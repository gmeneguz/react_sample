import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: "flex";
  margin-left: 10%;

  p {
    font-weight: bold;
    font-size: 18px;
  }

  a {
    font-size: 42px;

    color: #777676;
    font-weight: bold;
    text-decoration: none;
    :hover {
      transform: scale(1.01);
      transition: transform 0.5s;
      color: #171717;
    }
  }
`;
