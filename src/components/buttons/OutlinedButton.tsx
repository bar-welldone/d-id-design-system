import styled from "styled-components";
import typography from "../../tokens/Typography";
import Button from "./Button";

const OutlinedButton = styled(Button)`
  ${typography.Body}
  filter: drop-shadow(0px 0px 8px rgba(254, 137, 0, 0.7));
  background: inherit;
  border: 1px solid #D0D0D0;
  text-transform: none;

  &:hover {
    ${typography.Button}
    background: #FFFFFF;
    color: #F6630E;
    filter: none;
  }
`

export default OutlinedButton