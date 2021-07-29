import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/category/:categoryId"
            component={() => <ItemListContainer />}
          />
          <Route
            exact
            path="/item/:itemsId"
            component={() => <ItemDetailContainer />}
          />
          <Route
            exact
            path="/cart"
            component={() => <Cart />}
          />
          <Route
            path="/"
            component={() => <ItemListContainer />}
          />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App