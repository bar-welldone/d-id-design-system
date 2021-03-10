import { ReactElement } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const MoreMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 164px;
  padding: 8px 0px;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

type MenuItemChildElement = ReactElement<typeof MenuItem>
interface Props {
  children:  MenuItemChildElement | MenuItemChildElement[]
}
const MoreMenu = ({children}: Readonly<Props>) => {
  return (
    <MoreMenuStyled>
      {children}
    </MoreMenuStyled>
  )
}

export default MoreMenu