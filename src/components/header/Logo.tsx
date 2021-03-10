import styled from 'styled-components';
import {ReactComponent as LogoIcon} from '../../assets/logo.svg';

export const LogoStyled = styled.div`
  width: 37px;
  height: 33px;
`
const Logo = () => {
  return (
    <LogoStyled>
      <LogoIcon />
    </LogoStyled>
  )
}

export default Logo