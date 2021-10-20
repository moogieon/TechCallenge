import MarketListUI from "./marketList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MarketList() {
  // !! 검색
  const [keyword, setKeyword] = useState("");
  // !! list
  const [list, setList] = useState([] as any);

  useEffect(() => {
    const getData = async () => {
      const resultList = await axios.get(
        "https://mock-api.ssomee.com/categories",
      );
      setList(resultList.data);
      console.log(resultList.data);
    };
    getData();
  }, []);

  const onClickcategory = (categoryId) => async () => {
    await axios.get(
      `https://mock-api.ssomee.com/products/${categoryId}/${1}?order=date-desc`,
    );
    console.log(categoryId);
  };

  return (
    <MarketListUI
      list={list}
      setKeyword={setKeyword}
      keyword={keyword}
      onClickcategory={onClickcategory}
    />
  );
}
