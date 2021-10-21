import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px,0px,0px,20px;


`;

export const ListContents = styled.div`
  width: 100%;
  max-width: 1200px;
`;
export const Title = styled.h1`
  font-size: 700;
  text-align: center;
  padding-bottom: 40px;
`;

export const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   color: black;
   font-size: 20px;
    background-color: mintcream;
    width: 80%;
    padding: 20px;

    
   
`;
export const BestProductBox = styled.div`
  width:80%;
  height: 130px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
  

`;  
export const TopProductImg = styled.img`
  width: 70px;
  height: 100%;
  background-size: cover;
  margin-right: 20px;
  background-size: 100%;
`;
export const TopProductInfo = styled.div`
  /* width: 242px; */
  height: 89px;
  cursor: pointer;
  /* background-color: #69696933; */
  display: flex;
  flex-direction: column;
  
`;
export const TopName = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
`;
export const TopInfoEtc = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;
export const TopInfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopInfoRemarks = styled.div`
  font-size: 12px;
  line-height: 17.76px;
  font-weight: 500;
  color: #4f4f4f;
`;
export const TopInfoPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.64px;
`;

export const TopInfoRight = styled.div`
  width: 20px;
  height: 50px;
  width: 100%auto;
  margin-left: 30px;
  position: absolute;
  left: 1400px;
  /* padding-right: 30px; */
`;
export const DeletItem = styled.button`
  width: 70px;
  height: 50px;
  margin-left: 30px;
  :hover{
    cursor: pointer;
    color: green;
  }
`;

