import MarketListUI from "./marketList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MarketList() {
  const [list, setList] = useState([] as any);
  const [data2, setData2] = useState("");
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
  return <MarketListUI list={list} />;
}
