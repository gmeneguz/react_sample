import styled from "styled-components";

const smallScreenTrigger = 800;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentOne = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  background: lightgray;
  min-height: 300px;

  .left {
    width: 50%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
    @media (max-width: ${smallScreenTrigger}px) {
      display: none;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 1;

    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${smallScreenTrigger}px) {
    width: 100%;
  }
`;

export const ContentTwo = styled.div`
  display: flex;
`;
