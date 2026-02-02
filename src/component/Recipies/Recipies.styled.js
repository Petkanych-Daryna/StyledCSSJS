import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;

`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  padding: 20px;
`;

export const Recipe = styled.li`
  width: 200px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    color: black;
    font-size: 15px;
    margin: 8px 0 4px;
  }

  p {
    color: black;

    margin: 2px 0;
    font-size: 13px;
  }
`;

export const Diff = styled.span`
  display: inline-block;
  margin-top: 6px;
  padding: 3px 6px;
  font-size: 12px;
  border-radius: 6px;

  background: ${({ $difficulty }) =>
    $difficulty === 0 ? "#b8f7b8" :
    $difficulty === 1 ? "#fff3a0" :
    $difficulty === 2 ? "#f3ffc6" :
    "#ff7b7b"};

  color: ${({ $difficulty }) => ($difficulty === 3 ? "white" : "black")};
`;
