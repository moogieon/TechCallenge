import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const Writer = styled.div`
  height: 40px;
  font-size: 20px;
  border-bottom: 2px solid green;
  margin-bottom: 20px;
`;
export const Shop = styled.div`
  height: 40px;
  font-size: 20px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    color: green;
  }
`;
export const Basket = styled.div`
  font-size: 40px;
`;
export const BasketTitle = styled.div`
  font-size: 17px;
`;
export const BasketBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    color: green;
    cursor: pointer;
  }
`;
