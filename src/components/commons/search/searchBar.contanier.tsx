import axios from "axios";
import { ChangeEvent, useState } from "react";
import SearchbarUI from "./searchBar.presenter";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const onClickSearch = (click) => () => {
    props.setKeyword(click);
  };

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <SearchbarUI
      onClickSearch={onClickSearch}
      search={search}
      onChangeSearchbar={onChangeSearchbar}
    />
  );
}
