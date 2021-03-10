import styled from "styled-components"
import typography from "../../tokens/Typography"


const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #FFFFFF;
  ${typography.Button}
`

export default Button