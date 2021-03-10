import { ReactNode } from "react";
import styled from "styled-components";
import Logo, { LogoStyled } from "./Logo";

const HeaderStyled = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  ${LogoStyled} {
    margin-right: 24px;
  }
`
interface Props {
  children?: ReactNode
}

const Header = ({children}: Readonly<Props>) => {
  return (
    <HeaderStyled>
      <Logo />
      { children }
    </HeaderStyled>
  )
}

export default Header