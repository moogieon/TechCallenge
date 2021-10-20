import { GetSearch, Searchbar, SearchbarInput } from "./searchBar.style";

export default function Searchbar02UI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
