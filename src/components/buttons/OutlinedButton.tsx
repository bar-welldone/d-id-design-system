import styled from "styled-components";
import Colors from "../../tokens/Colors";
import typography from "../../tokens/Typography";
import Button from "./Button";

// Todo: fix styling

const OutlinedButton = styled(Button)`
  ${typography.Body}
  background: inherit;
  border: 1px solid ${Colors.Orange};
  text-transform: none;

  &:hover {
    ${typography.Button}
    border: none;
    background: #FFFFFF;
    color: #F6630E;
    filter: none;
  }
`

export default OutlinedButton