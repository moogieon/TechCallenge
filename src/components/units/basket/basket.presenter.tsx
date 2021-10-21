import {
  Wrapper,
  Title,
  TopBox,
  BestProductBox,
  TopProductImg,
  TopProductInfo,
  TopName,
  TopInfoRemarks,
  TopInfoPrice,
  TopInfoEtc,
  TopInfoLeft,
  TopInfoRight,
  DeletItem,
} from "./basket.style";
export default function BasketUI(props) {
  return (
    <>
      <Title> MY 🛒 장바구니</Title>
      <Wrapper>
        {props.basket.length ? (
          <TopBox>
            {props.basket?.map((data) => (
              <BestProductBox key={data.prefix}>
                <TopProductImg src={data.mainImage} />
                <TopProductInfo onClick={props.onClickMove(data.prefix)}>
                  <TopName>{data.name}</TopName>
                  <TopInfoEtc>
                    <TopInfoLeft>
                      <TopInfoRemarks>{data.brand.name}</TopInfoRemarks>
                      <TopInfoPrice>
                        ₩{" "}
                        {data.originalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </TopInfoPrice>
                    </TopInfoLeft>
                  </TopInfoEtc>
                </TopProductInfo>
                <TopInfoRight>
                  <DeletItem onClick={props.onClickBasket(data)}>
                    삭제
                  </DeletItem>
                </TopInfoRight>
              </BestProductBox>
            ))}
          </TopBox>
        ) : (
          <TopBox>상품을 채워주세요</TopBox>
        )}
      </Wrapper>
    </>
  );
}
