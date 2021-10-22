import MarketListUI from "./marketList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
export default function MarketList() {
  // !! 검색
  const [keyword, setKeyword] = useState("");
  // !! categoriesList
  const [list, setList] = useState([] as any);
  // !! goodsLIst
  const [isEdit, setIsEdit] = useState(false);
  const [goods, setGoods] = useState([] as any);
  //! category click
  const [activedPage, setActivedPage] = useState();
  const router = useRouter();
  //!! 카테고리 목록
  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        "https://mock-api.ssomee.com/categories",
      );
      setList(resultList.data);
    };
    getData();
  }, []);
  //!! 카테고리로 이동
  const onClickcategory = (categoryId) => async () => {
    const itemList = await axios.get(
      `https://mock-api.ssomee.com/products/${categoryId}/${1}?order=date-desc`,
    );
    setIsEdit(true);
    setGoods(itemList.data);
    setActivedPage(categoryId);
  };

  // console.log(window.history);
  // !! 장바구니 바로가기
  const onClickAll = () => {
    router.push("/basket");
  };
  const onClickMain = () => {
    router.push(" ");
  };

  return (
    <MarketListUI
      list={list}
      setKeyword={setKeyword}
      keyword={keyword}
      onClickcategory={onClickcategory}
      goods={goods}
      onClickAll={onClickAll}
      isEdit={isEdit}
      activedPage={activedPage}
      onClickMain={onClickMain}
    />
  );
}
