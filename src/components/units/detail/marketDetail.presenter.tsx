import {
  Wrapper,
  Writer,
  Body,
  Shop,
  Basket,
  BasketTitle,
  BasketBox,
} from "./marketDetail.style";
export default function MarketDeatilUI(props) {
  return (
    <>
      <Wrapper>
        <Body>
          <Writer>{props.itemDetail.name}</Writer>

          <Shop onClick={props.onClickURL}>
            {props.itemDetail.shop?.name} 바로가기
          </Shop>
          <BasketBox onClick={props.onClickBasket(props.itemDetail)}>
            <Basket>🛒</Basket>
            <BasketTitle>장바구니 담기</BasketTitle>
          </BasketBox>
          <div
            dangerouslySetInnerHTML={{
              __html: props.itemDetail.description,
            }}
          ></div>
          {/* <button onClick={props.onClickEdit}>수정하기</button> */}
        </Body>
      </Wrapper>
    </>
  );
}
