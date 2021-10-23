import styled from "@emotion/styled";
interface IPageProps {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* padding-left: 100px; */


`;
export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  :hover{
    font-weight: 700;
    cursor: pointer;
  }
`;
export const Head = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;
export const All = styled.div`
 
  width: 100%;
  height: 50px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  :hover{
    cursor: pointer;
    color: green;
  }
`;
export const Body = styled.div`
  display: flex;
  height: 100px;
  



`;

export const Wrapper_Body = styled.div`
  border-bottom: 1px solid green;
  width: 80px;
  margin-left: 10px;
  background-color: mintcream;
  color: mintcream;
  display: flex;
  height: 100px;
  cursor: pointer;

  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;

  :hover {
  -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  :hover .name {
    color: #fc0;
  }
 
`;
export const GoodsImg = styled.div`
  width: 100px;
  height: 100px;

`;
export const GoodsInfo = styled.div`
  height: 100px;
  padding-top: 8px;

`;

export const GoodsName = styled.div`
  color: black;
  height: 36px;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: ${(props:IPageProps)=>(props.isActive? "green":"balck")} ;
`;


export const InfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemList = styled.div`
 width: 1200px;
  height: 700px;
  padding-left: 50px;
  padding-top: 50px;
  
`;
export const MainImage = styled.img`
 width: 100%;
height: 100%;
  
`;
export const Wrap = styled.div`
 width: 100%;
height: 100%;
  
`;





