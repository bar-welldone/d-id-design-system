import styled from "styled-components";
import colors from "../../tokens/Colors";
import typography from "../../tokens/Typography";

interface StyledProps {
  selected?: boolean
}

const HeaderTabStyled = styled.button<StyledProps>`
  height: 56px;
  padding: 8px;
  ${
    props => props.selected ? 
      ` 
        ${typography.Headline5};
        color: ${colors.Orange};
      ` :
      `
        ${typography.Body};
        color: ${colors["Text / Secondary Light"]};
      `
  }
`

interface Props {
  text: string
  selected?: boolean
}

const HeaderTab = ({text, selected}: Readonly<Props>) => {
  return (
    <HeaderTabStyled selected={selected}>
      {text}
    </HeaderTabStyled>
  )
}

export default HeaderTab