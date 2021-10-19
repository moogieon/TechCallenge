import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`;
export const Title = styled.div`
  font-size: 36px;
  text-align: center;
`;
export const Head = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`

  display: flex;



`;
export const Wrapper_Body = styled.div`
  border-bottom: 1px solid green;
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
  font-size: 15px;
  font-weight: 500;

`;


export const InfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoodsPrice = styled.div`
  height: 36px;

  margin-top: 62px;
  font-size: 23px;

  /* border: 1px solid red; */
  font-family: ccc;
`;

export const GoWrite = styled.button`
  background-color: black;
  margin-top: 54px;

  width: 124px;
  height: 52px;
  color: black;
  font-size: 16px;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: #ffc414;
  }
`;
// --------- side bar -------
export const ItemLog = styled.div`
  border: 1px solid black;

  width: 196px;
  height: 505px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 20px;
    background-color: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    height: 17%;

    border-left: 9px solid black;
    border-right: 9px solid black;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border-left: 9px solid black;
    border-right: 9px solid black;
    background: #f2f2f2;
  }
  position: sticky;
  top: 100px;
  left: 3000px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
export const LogoTitle = styled.div`
  font-size: 18px;
  font-family: ccc;
  /* border: 1px solid red; */
  color: black;
  position: sticky;
`;
export const LogoInfo = styled.div`
  width: 156px;
  /* height: 199px; */
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  background-size: 100%;
  margin-top: 30px;
  margin-left: 36px;
  color: black;
`;
export const LogoName = styled.div`
  width: 126px;
  height: 18px;

  margin-top: 12px;
  margin-bottom: 12px;
  color: black;
`;
export const LogoRemarks = styled.div`
  /* width: 81px; */
  height: 18px;
  font-size: 14px;
  color: #4f4f4f;
`;
export const LogoPrice = styled.div`
  height: 24px;

  margin-top: 4px;
  color: darkgrey;
`;
export const LogoTag = styled.div`
  height: 17px;
  margin-top: 8px;
  font-size: 12px;
  color: #3f6ee5;
`;
