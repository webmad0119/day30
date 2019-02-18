import React, { Component } from "react";
import "./App.css";
import User from "./User";
import CustomButton from "./CustomButton";

class App extends Component {
  render() {
    function toPriceWithCurrency(product) {
      if (product.currency) {
        return `${product.price} ${product.currency}` 
      } else {
        return `${product.price} $` 
      }
    }

    const product1 = {
      name: "roomba 280",
      price: 280,
      offer: true,
      discount: 10,
      currency: "EUR",
      stockImage: "https://i5.walmartimages.com/asr/78161951-79cb-452e-b3e4-345c23d4c415_1.8fb16a41b5b5f133ce4e0efd275e95eb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    }

    const priceTag = <span>Precio (desde priceTag): {toPriceWithCurrency(product1)}</span>

    const element = (
      <div>
        <h1>Hello Ironhacker!</h1>
        <h2>Good to see you here.</h2>
      </div>
    );

    return (
      <div className="App">
        <CustomButton text="click me"/>
        <CustomButton text="click me 2"/>
        <CustomButton text="click me"/>
        <CustomButton text="click me"/>
        <CustomButton text="click me"/>


        <User nombre="Dan" edad="39" />
        <User nombre="Alvaro" edad="30" />
        <User nombre="Carlos" edad="41"/>

        {element}
        <h1> {product1.name}</h1>
        <img src={product1.stockImage} width="280" />
        
        <ul>
          <li>{priceTag}</li>
          <li>Descuento: {product1.discount}</li>
        </ul>
      </div>
    );
  }
}

export default App;