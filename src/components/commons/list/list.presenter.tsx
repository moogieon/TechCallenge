import Searchbar from "../search/searchBar.contanier";
import {
  Wrapper,
  Body,
  Wrapper_Head,
  Wrapper_Body,
  Board_Num,
  Board_Title,
  Board_Writer,
  Column_Title,
  Column_Num,
  Column_Category,
} from "./list.style";

export default function ListUI(props: any) {
  return (
    <>
      <Wrapper>
        {props.goods.products?.length ? (
          <Body>
            <Searchbar setKeyword={props.setKeyword} />
            <Wrapper_Head>
              <Board_Num>번호</Board_Num>
              <Board_Title>제목</Board_Title>
              <Board_Writer>상점</Board_Writer>
            </Wrapper_Head>
            {props.goods?.products
              ?.filter((data) => data.name.includes(props.keyword))
              .map((data: any, index: any) => (
                <Wrapper_Body key={data.id}>
                  <Column_Num>{index + 1}</Column_Num>
                  <Column_Title
                    id={data.id}
                    onClick={props.onClickMove(data.prefix)}
                  >
                    {data.name ? data.name : "준비중입니다."}
                  </Column_Title>
                  <Column_Category>{data.shop.name}</Column_Category>
                </Wrapper_Body>
              ))}
          </Body>
        ) : (
          <Body>상품 준비중입니다...</Body>
        )}
      </Wrapper>
    </>
  );
}
