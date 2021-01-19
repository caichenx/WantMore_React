import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import NaviHeader from "./NavHeader";
import FeatureBar from "./FeatureBar";
import unsplash from "../api/unsplash";
import Marketplace from "./Marketplace";
import Route from "./Route";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";
import Login from "./Login";
import "./style/App.css";

class App extends React.Component {
  state = { products: [], selectedProduct: null, cart: [], user: null };

  // fetch images from unsplash API
  fetchImages = async (term, numOfResult) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: numOfResult,
        orientation: "landscape",
      },
    });

    // console.log(response);

    // create product objects
    const mapToProduct = response.data.results.map((result) => {
      return {
        id: result.id,
        name: result.alt_description,
        image: result.urls,
        price: this.priceGenerator(),
        quantitySelected: 0,
      };
    });

    // assign the product objects to the state
    this.setState({ products: mapToProduct });
  };

  componentDidMount() {
    this.fetchImages("plants", 24);
    //loads the last user session from the local storage to the state if it exists
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });
  }

  priceGenerator() {
    const price = Math.floor(Math.random() * 40 + 10);
    return `${price}.00`;
  }

  // if a product is clicked by users, get the information of the product
  // the information will late be used to display the details of the product
  onProductClick = (productInfo) => {
    this.setState({ selectedProduct: productInfo });
  };

  // once the "add to cart" button in the "ItemDetail" component is clicked
  // add the product the cart array
  addToCart = (item) => {
    let identicalItem = false;
    // if cart is empty, add the new item straightway
    if (this.state.cart.length === 0) {
      item.quantitySelected = 1;
      this.setState({
        cart: [item],
      });
    } else {
      // if cart is not empty
      const updateCart = [...this.state.cart];
      // check if identical item exists
      const elementExist = updateCart.find((product) => product.id === item.id);
      // if exist, increase the number of the item instead of add the item in the cart
      if (elementExist) {
        let index = updateCart.indexOf(elementExist);
        updateCart[index].quantitySelected += 1;
        identicalItem = true;
      }

      this.setState({ cart: updateCart });
    }
    // if identical item doesn't exist, add the new item to the cart
    if (!identicalItem) {
      item.quantitySelected = 1;
      this.setState({
        cart: [...this.state.cart, item],
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
          <FeatureBar fetchImages={this.fetchImages} />
          <hr />
          <Marketplace
            products={this.state.products}
            onProductClick={this.onProductClick}
          />
        </Route>
        <Route path="/marketplace">
          <Marketplace
            products={this.state.products}
            onProductClick={this.onProductClick}
          />
        </Route>
        <Route
          path={`/marketplace/${
            this.state.selectedProduct ? this.state.selectedProduct.id : ""
          }`}
        >
          <ItemDetails
            selectedProduct={
              this.state.selectedProduct ? this.state.selectedProduct : ""
            }
            addToCart={this.addToCart}
          />
        </Route>
        <Route path="/cart">
          <Cart cart={this.state.cart} updateCart={this.updateCart} />
        </Route>
        <Route path="/login">
          <Login user={this.state.user} login={this.login} />
        </Route>
      </div>
    );
  }
}

export default App;
