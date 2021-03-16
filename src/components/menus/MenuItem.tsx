import { ReactElement, ReactSVGElement } from "react";
import styled from "styled-components";
import Colors from "../../tokens/Colors";
import colors from "../../tokens/Colors";

export const MenuItemStyled = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #FFFFFF;
  padding: 0 16px;
  cursor: pointer;
  color: ${Colors["Text/Primary Dark"]};

  &:hover {
    background-color: ${colors["Grey Hover"]}
  }
`

export const MenuItemText = styled.span`
  margin-left: 8px
`
export interface MenuItemProps {
  renderIcon(): ReactElement<ReactSVGElement>
  text: string
}

const MenuItem = ({renderIcon, text}: Readonly<MenuItemProps>) => {
  return (
    <MenuItemStyled>
      { renderIcon() }
      <MenuItemText> {text} </MenuItemText>
    </MenuItemStyled>

  )
}

export default MenuItem