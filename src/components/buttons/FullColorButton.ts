import styled from 'styled-components'
import Colors from '../../tokens/Colors'
import Button from './Button'

type Props = {
  disabled?: boolean
}

export const FullCollorButton = styled(Button)<Props>`
  background: ${Colors['Orange - Yellow']};
  ${props => props.disabled ? 
    `
      opacity: 0.5
    ` : 
    `
      &:hover {
        background: ${Colors['Yellow - Orange']};
      }
    `
  }
`

export default FullCollorButton

