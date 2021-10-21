import styled from "@emotion/styled";

export const Wrapper = styled.div`

  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
export const Body = styled.div`
  width: 1200px;
  height: 700px;
  padding-left: 50px;
  color: black;

`;
export const Wrapper_Head = styled.div`
  height: 52px;
  line-height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  color: white;
`;

export const Board_Num = styled.div`
  width: 10%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  padding-left: 40px;
  color: black;
`;
export const Board_Title = styled.div`
  width: 70%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  text-align: center;
  color: black;
`;
export const Board_Writer = styled.div`
  width: 18%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  color: black;
`;

export const Wrapper_Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px; 
  line-height: 52px;
  border-bottom: 1px solid gray;
  color: black;
`;

export const Column_Num = styled.div`
  width: 10%;
  font-size: 16px;
  color: #4f4f4f;
  padding-left: 48px;
  color: black;
`;
export const Column_Title = styled.div`
  width: 70%;
  font-size: 16px;
  text-align: center;
  color: black;
  cursor: pointer;

  :hover {
    color: green;
  }
`;
export const Column_Category = styled.div`
 
  font-size: 16px;
  color: black;
`;





