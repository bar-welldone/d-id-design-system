import React, { ReactNode } from "react";
import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import Logo, { LogoStyled } from "./Logo";

const HeaderStyled = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  ${LogoStyled} {
    margin: 0 24px 0 8px;
  }
`

const OptionsContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`

interface Props {
  renderTabs(): ReactNode
  renderOptions(): ReactNode
}

const Header = ({renderTabs, renderOptions}: Readonly<Props>) => {
  return (
    <HeaderStyled>
      <Logo />
      { renderTabs() }
      <OptionsContainer>
        { renderOptions() }
      </OptionsContainer>
    </HeaderStyled>
  )
}

export default Header