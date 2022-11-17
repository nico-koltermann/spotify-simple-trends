import React from "react";
import { List } from "./list";
import { getFavorites } from "../api/favorite-api";

function App() {
  const list = [getFavorites()]

  return (
    <List
      items={list}
      renderItem={(pokemon) => (
        <li key={pokemon.artist}>
        </li>
      )}
    />
  );
}

export default App;