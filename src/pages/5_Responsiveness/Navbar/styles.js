import styled, { css } from "styled-components";

const expandedMenuScreenWidth = 800;

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  background: #171717;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  color: #fff;
`;
export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png");
  background-size: cover;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarItems = styled.div`
  display: none;

  @media (max-width: ${expandedMenuScreenWidth}px) {
    ${({ showResponsiveMenu }) =>
      showResponsiveMenu &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: white;
        color: #171717;
      `}
  }

  @media (min-width: ${expandedMenuScreenWidth}px) {
    display: flex;
  }
`;
export const Item = styled.div`
  display: flex;
  margin: 8px;
`;

export const HamburguerButton = styled.button`
  z-index: 10;
  font-size: 24px;
  width: 34px;
  height: 34px;
  border: 2px solid gray;
  border-radius: 8px;

  :hover {
    background-color: lightgray;
  }
  :active {
    background-color: gray;
  }
  @media (min-width: ${expandedMenuScreenWidth}px) {
    display: none;
  }
`;
