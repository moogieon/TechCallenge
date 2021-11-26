import List from "../../commons/list/list.container";

import Searchbar02 from "../../commons/search02/searchBar.contanier";
import {
  Wrapper,
  Title,
  Body,
  Head,
  All,
  Wrapper_Body,
  GoodsImg,
  GoodsInfo,
  GoodsName,
  InfoBox,
  ItemList,
  MainImage,
} from "./marketList.style";

interface IProps {
  name: string;
  id: number;
}
export default function MarketListUI(props: any) {
  return (
    <>
      <>
        <Wrapper>
          <Title onClick={props.onClickMain}>marketList</Title>

          <Searchbar02 setKeyword={props.setKeyword} />
          <Head>카테고리</Head>
          <All onClick={props.onClickAll}>장바구니</All>
          <Body>
            {props.list
              ?.filter((data) => data.name.includes(props.keyword))
              .map((data: IProps) => (
                <Wrapper_Body
                  key={data.id}
                  onClick={props.onClickcategory(data.id)}
                >
                  <InfoBox>
                    <GoodsImg></GoodsImg>
                    <GoodsInfo>
                      <GoodsName isActive={data.id === props.activedPage}>
                        {data.name}
                      </GoodsName>
                    </GoodsInfo>
                  </InfoBox>
                </Wrapper_Body>
              ))}
          </Body>
          <ItemList>
            {props.isEdit && (
              <List goods={props.goods} activedPage={props.activedPage} />
            )}
            <MainImage src={"/소미마켓.png"} />
          </ItemList>
        </Wrapper>
      </>
    </>
  );
}
