import {
  ItemLog,
  Wrapper,
  Title,
  Body,
  Head,
  Wrapper_Body,
  GoodsImg,
  GoodsInfo,
  GoodsName,
  LogoTitle,
  LogoInfo,
  LogoImg,
  LogoName,
  LogoRemarks,
  LogoPrice,
  LogoTag,
  InfoBox,
} from "./marketList.style";

interface IProps {
  name: string;
  id: number;
}
export default function MarketListUI(props) {
  return (
    <>
      <>
        <Wrapper>
          <Title>marketList</Title>
          <Head>카테고리</Head>

          <Body>
            {props.list?.map((data: IProps) => (
              <Wrapper_Body key={data.id}>
                <InfoBox>
                  <GoodsImg></GoodsImg>
                  <GoodsInfo>
                    <GoodsName>{data.name}</GoodsName>
                  </GoodsInfo>
                </InfoBox>
              </Wrapper_Body>
            ))}
          </Body>
        </Wrapper>
        {/* <ItemLog>
          <LogoTitle>오늘 본 상품</LogoTitle>
          {props.basket
            .slice(0)
            .reverse()
            .map((data: any, _: any) => (
              <LogoInfo key={data._id} onClick={props.onClickToday(data)}>
                <LogoImg
                  src={`https://storage.googleapis.com/${data.images[0]}`}
                />
                <LogoName>{data.seller.name}</LogoName>
                <LogoRemarks>{data.remarks.substr(0, 11) + "..."}</LogoRemarks>
                <LogoPrice>
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </LogoPrice>
                <LogoTag>{data.tags}</LogoTag>
              </LogoInfo>
            ))}
        </ItemLog> */}
      </>
    </>
  );
}
