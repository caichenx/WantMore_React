import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BGO_drQcn_K1JSu2htErPIrUsbXFH3zP70IGEKCoHpQ",
  },
});
