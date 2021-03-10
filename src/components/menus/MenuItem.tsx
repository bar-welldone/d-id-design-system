import { ReactElement, ReactSVGElement } from "react";
import styled from "styled-components";
import colors from "../../tokens/Colors";

const MenuItemStyled = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #FFFFFF;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors["Grey Hover"]}
  }
`

const MenuItemText = styled.span`
  margin-left: 8px
`
interface Props {
  renderIcon: () => ReactElement<ReactSVGElement>
  text: string
}

const MenuItem = ({renderIcon, text}: Readonly<Props>) => {
  return (
    <MenuItemStyled>
      { renderIcon() }
      <MenuItemText> {text} </MenuItemText>
    </MenuItemStyled>

  )
}

export default MenuItem