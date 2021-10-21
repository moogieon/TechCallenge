import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import BasketUI from "./basket.presenter";

export default function Basket() {
  const [basket, setBasket] = useState([]);
  const router = useRouter();
  //!! 장바구니 목록 불러오기
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasket(item);
  }, []);
  //!! 장바구니 목록 삭제
  const onClickBasket = (Baskets) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const filtered = basket.filter((data) => data.prefix !== Baskets.prefix);
    localStorage.setItem("basket", JSON.stringify(filtered));
    setBasket(filtered);
  };
  //!! 장바구니 목록 상세 페이지
  const onClickMove = (category) => () => {
    router.push(`/detail/${category}`);
  };

  return (
    <BasketUI
      basket={basket}
      onClickBasket={onClickBasket}
      onClickMove={onClickMove}
    />
  );
}
