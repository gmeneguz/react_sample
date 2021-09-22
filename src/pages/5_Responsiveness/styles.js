import styled from "styled-components";

const smallScreenTrigger = 700;

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
`;

export const ContentOne = styled.div`
  display: flex;
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }

    @media (max-width: ${smallScreenTrigger}px) {
      display: none;
    }

    :hover {
      transform: scale(0.98);
      transition: transform 0.2s;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: left;
    align-items: left;
    margin: 0 15px;

    h2 {
      color: #fff;
      font-size: 22px;
    }
    p {
      color: #fff;
      opacity: 0.4;
    }
  }

  @media (max-width: ${smallScreenTrigger}px) {
    width: 100%;
  }
`;

export const ContentTwo = styled.div`
  display: flex;
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }

    @media (max-width: ${smallScreenTrigger}px) {
      width: 100%;
    }

    :hover {
      transform: scale(0.98);
      transition: transform 0.2s;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: left;
    align-items: left;
    margin: 0 15px;

    h2 {
      color: #fff;
      font-size: 22px;
    }
    p {
      color: #fff;
      opacity: 0.4;
    }
  }

  @media (max-width: ${smallScreenTrigger}px) {
    flex-direction: column-reverse;
    margin: 0 15px;
  }
`;
