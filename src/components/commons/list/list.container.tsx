// import { itemList } from "../goodsList/goodsList";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import ListUI from "./list.presenter";

export default function List(props) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const onClickMove = (category) => () => {
    router.push(`/detail/${category}`);
  };

  return (
    <ListUI
      onClickMove={onClickMove}
      goods={props.goods}
      setKeyword={setKeyword}
      keyword={keyword}
    />
  );
}
