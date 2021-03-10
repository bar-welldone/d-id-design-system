import styled from "styled-components";
import colors from "../../tokens/Colors";
import Button from "./Button";

const GhostButton = styled(Button)`
  background: inherit;
  color: ${colors.Orange}
`

export default GhostButton