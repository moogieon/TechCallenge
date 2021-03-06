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
      <Title> MY π μ₯λ°κ΅¬λ</Title>
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
                        β©{" "}
                        {data.originalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        μ
                      </TopInfoPrice>
                    </TopInfoLeft>
                    <TopInfoRight>
                      <DeletItem onClick={props.onClickBasket(data)}>
                        μ­μ 
                      </DeletItem>
                    </TopInfoRight>
                  </TopInfoEtc>
                </TopProductInfo>
              </BestProductBox>
            ))}
          </TopBox>
        ) : (
          <TopBox>μνμ μ±μμ£ΌμΈμ</TopBox>
        )}
      </Wrapper>
    </>
  );
}
