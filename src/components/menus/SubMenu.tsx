import styled from "styled-components";
import Colors from "../../tokens/Colors";
import { MenuItemProps, MenuItemStyled, MenuItemText } from "./MenuItem";
import { ReactComponent as UpIcon } from '../../assets/up.svg'
import React, { ReactNode, useState } from "react";

const SubMenuStyled = styled.div`
  
`

const MenuItem = styled(MenuItemStyled)<{opened: boolean}>`
  padding-right: 8px;
  ${props => props.opened ? 
    `
      background: ${Colors["Grey Hover"]}
    ` : ``
  }
`

const UpIconStyled = styled(UpIcon)<{dir: 'up' | 'down'}>`
  margin-left: auto;
  transform: rotate(${props => props.dir === 'down' ? `180` : `0`}deg)
`

const SubMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors["Grey Hover"]}
`

export const SubMenuItem = styled.div`
  height: 32px;
  text-align: start;
  padding: 8px 0 4px 16px;
  cursor: pointer;
  color: ${Colors["Text/Primary Dark"]};
`

type SubMenuProps = MenuItemProps & {
  children: ReactNode
}

const SubMenu = ({renderIcon, text, children}: Readonly<SubMenuProps>) => {
  const [opened, setOpened] = useState(false)

  const toggleOpened = () => setOpened(!opened)
  return (
    <SubMenuStyled>
      <MenuItem opened={opened} onClick={toggleOpened}>
        { renderIcon() }
        <MenuItemText> {text} </MenuItemText>
        <UpIconStyled dir={opened ? 'up' : 'down'}/>
      </MenuItem>
      { opened &&
        <SubMenuItemsContainer>
          {children}
        </SubMenuItemsContainer>
      }
    </SubMenuStyled>
  )
}

export default SubMenu