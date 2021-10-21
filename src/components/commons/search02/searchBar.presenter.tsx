import { GetSearch, Searchbar, SearchbarInput } from "./searchBar.style";

export default function Searchbar02UI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="카테고리 검색"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
