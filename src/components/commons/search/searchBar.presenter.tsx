import { GetSearch, Searchbar, SearchbarInput } from "./searchBar.style";

export default function SearchbarUI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색 버튼을 눌러주세요"
        onChange={props.onChangeSearchbar}
      />
      <GetSearch onClick={props.onClickSearch(props.search)}>🔍</GetSearch>
    </Searchbar>
  );
}
