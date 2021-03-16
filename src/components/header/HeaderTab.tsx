import styled from "styled-components";
import Colors from "../../tokens/Colors";
import typography from "../../tokens/Typography";

interface StyledProps {
  selected?: boolean
  activeColor?: string
}

const HeaderTabStyled = styled.button<StyledProps>`
  height: 56px;
  padding: 8px;
  ${
    props => props.selected ? 
      ` 
        ${typography.Headline5};
        color: ${props.activeColor};
      ` :
      `
        ${typography.Body};
        color: ${Colors["Text / Secondary Light"]};

        &:hover {
          ${typography.Headline5};
          color: #FFFFFF;
        }
      `
  }
`

interface Props {
  text: string
  selected?: boolean
  activeColor?: string
}

const HeaderTab = ({text, selected, activeColor = Colors.Primary}: Readonly<Props>) => {
  return (
    <HeaderTabStyled selected={selected} activeColor={activeColor}>
      {text}
    </HeaderTabStyled>
  )
}

export default HeaderTab