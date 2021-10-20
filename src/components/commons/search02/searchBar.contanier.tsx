import axios from "axios";
import { ChangeEvent, useState } from "react";
import Searchbar02UI from "./searchBar.presenter";

export default function Searchbar02(props) {
  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    props.setKeyword(event.target.value);
  }

  return <Searchbar02UI onChangeSearchbar={onChangeSearchbar} />;
}
