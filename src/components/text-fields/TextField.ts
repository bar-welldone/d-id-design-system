import styled from "styled-components";
import colors from "../../tokens/Colors";
import typography from "../../tokens/Typography";

//Todo: get real input design (border, padding, etc)
const TextField = styled.input`
  ${typography.Headline5};
  padding: 8px 12px;
  background-color: transparent;
  color: white;
  border: 1px solid ${colors.Grey};
  border-radius: 8px;
`

export default TextField