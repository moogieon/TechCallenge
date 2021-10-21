import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import MarketDeatilUI from "./marketDetail.presenter";

export default function MarketDeatil() {
  const [itemDetail, setItemDetail] = useState([] as any);
  const router = useRouter();
  // !! 상품목록 불러오기
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        `https://mock-api.ssomee.com/products/${router.query.market_id}`,
      );
      setItemDetail(resultList.data);
    };
    getData();
  }, [router.query.market_id]);
  const onClickURL = () => {
    router.push(itemDetail.productUrl);
  };

  // !! 장바구니 담기
  const onClickBasket = (Baskets) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    let isExists = false;
    basket.forEach((data: any) => {
      if (data.prefix === Baskets.prefix) isExists = true;
    });
    if (isExists) return alert("!! 이미 담았습니다 !!.");
    if (basket.push(Baskets)) {
      alert("장바구니에 담았습니다.");
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  };
  return (
    <MarketDeatilUI
      itemDetail={itemDetail}
      onClickURL={onClickURL}
      onClickBasket={onClickBasket}
    />
  );
}
