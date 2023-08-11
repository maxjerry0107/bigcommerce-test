import PageManager from "./page-manager";

export default class SpecialItems extends PageManager {

  constructor($scope, context) {
    super($scope, context);
    this.cartId = "";
    this.apiUrl = "/api/storefront/carts/";
  }

  getCart() {
    return fetch(this.apiUrl, {
      method: "GET",
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.error(error));
  };


  addCartItem(cartItems) {
    var route = "";
    if (this.cartId == "")
      route = this.apiUrl;
    else
      route = this.apiUrl + this.cartId + '/items';
    return fetch(route, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItems),
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  deleteCart() {
    var route = this.apiUrl + this.cartId;
    return fetch(route, {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(result => result)
      .catch(error => console.error(error));
  };

  onReady() {

    this.getCart().then(result => {
      if (result.length > 0) {
        this.cartId = result[0].id;
        $("#btnRemoveAllItems").show();
      } else {
        this.cartId = ""
        $("#btnRemoveAllItems").hide();
      }
    })

    $("#btnAddAlltoCart").on("click", () => {
      const productId = $("#btnAddAlltoCart").attr("productId");
      this.addCartItem({
        "lineItems": [
          {
            "quantity": 1,
            "productId": productId
          }
        ]
      }).then(result => {
        alert("Product added to cart.")
        location.reload()
      });
    })

    $("#btnRemoveAllItems").on("click", () => {
      this.deleteCart().then(result => {
        alert("Removed All Items.")
        location.reload()
      });

    })
  }


}