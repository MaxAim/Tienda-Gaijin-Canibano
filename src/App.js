import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
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
          path="/"
          component={() => <ItemListContainer />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App