import React from "react";
import NaviHeader from "./NavHeader";
import FeatureBar from "./FeatureBar";
import Carousel from "./Carousel";
import unsplash from "../api/unsplash";
import axios from "axios";
import Marketplace from "./Marketplace";
import Route from "./Route";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";
import Login from "./Login";
import "./App.css";
import jwtDecode from "jwt-decode";

class App extends React.Component {
  state = { images: [], selectedItem: null, cart: [], user: null };

  fetchImages = async (term, numOfResult) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: numOfResult,
        orientation: "landscape",
      },
    });

    // console.log(response.data.results);

    this.setState({
      images: response.data.results,
      selectedItem: response.data.results[0],
    });
  };

  componentDidMount() {
    this.fetchImages("plants", 24);
    //loads the last user session from the local storage to the state if it exists
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });
  }

  onProductClick = (productInfo) => {
    this.setState({ selectedItem: productInfo });
  };

  addToCart = (item) => {
    let identicalItem = false;
    // if cart is empty, add the new item straightway
    if (this.state.cart.length === 0) {
      this.setState({
        cart: [{ product: item, quantity: 1 }],
      });
    } else {
      // if cart is not empty
      const updateCart = [...this.state.cart];
      // check if identical item exists
      const elementExist = updateCart.find(
        (element) => element.product.id === item.id
      );
      // if exist, increase the number of the item instead of add the item in the cart
      if (elementExist) {
        let index = updateCart.indexOf(elementExist);
        updateCart[index].quantity += 1;
        identicalItem = true;
      }

      this.setState({ cart: updateCart });
    }
    // if identical item doesn't exist, add the new item to the cart
    if (!identicalItem) {
      this.setState({
        cart: [...this.state.cart, { product: item, quantity: 1 }],
      });
    }
  };

  updateCart = (newCart) => {
    this.setState({ cart: newCart });
  };

  login = async (email, password) => {
    //make an Ajax request to /login endpoint, passing it whatever the user entered into the login form
    const res = await axios
      .post("http://localhost:3001/login", { email, password })
      .catch((res) => {
        return { status: 401, message: "unauthorised" };
      });
    // if the response is 200, then assume the user's credentials were correct.
    if (res.status === 200) {
      // decode the token sent in the server's response to obtain user's email
      const { email } = jwtDecode(res.data.accessToken);
      const user = {
        email,
        token: res.data.accessToken,
        // superficial solution to check user's permission level
        accessLevel: email === "admin@example.com" ? 0 : 1,
      };
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  logout = (e) => {
    e.preventDefault();
    // clear the user from both state and local storage
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  render() {
    return (
      <div>
        <h1>Want More</h1>
        <NaviHeader
          itemCount={this.state.cart.length}
          user={this.state.user}
          logout={this.logout}
        />
        <Route path="/">
          {/* <Carousel /> */}
          <FeatureBar fetchImages={this.fetchImages} />
          <h2
            style={{
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            Discover unique hand-picked items
          </h2>
          <hr />
          <Marketplace
            images={this.state.images}
            onProductClick={this.onProductClick}
          />
        </Route>
        <Route path="/marketplace">
          <Marketplace
            images={this.state.images}
            onProductClick={this.onProductClick}
          />
        </Route>
        <Route
          path={`/marketplace/${
            this.state.selectedItem ? this.state.selectedItem.id : ""
          }`}
        >
          <ItemDetails
            item={this.state.selectedItem ? this.state.selectedItem : ""}
            addToCart={this.addToCart}
          />
        </Route>
        <Route path="/cart">
          <Cart cart={this.state.cart} updateCart={this.updateCart} />
        </Route>
        <Route path="/popular">
          <Marketplace
            images={this.state.images}
            onProductClick={this.onProductClick}
          />
        </Route>
        <Route path="/login">
          <Login user={this.state.user} login={this.login} />
        </Route>
      </div>
    );
  }
}

export default App;
