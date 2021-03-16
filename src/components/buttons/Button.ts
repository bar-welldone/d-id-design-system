import styled from "styled-components"
import typography from "../../tokens/Typography"

interface Props {
  noText?: boolean
}
const Button = styled.button<Props>`
  ${typography.Button};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #FFFFFF;

  svg {
    path {
      fill: currentColor;
    }
    margin-right: ${props => props.noText ? '0' : '8px'}
  }
`

export default Button