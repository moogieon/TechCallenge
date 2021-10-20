
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 300px;
  height: 52px;
  border-radius: 15px;
  background: #d3e5c3;
  border: 1px solid #d3e5c3;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const GetSearch = styled.div`
  color: #5729ff;
  font-size: 30px;
  cursor: pointer;
  :hover {
    font-size: 40px;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #d3e5c3;
  margin: 0px 20px;
`;
