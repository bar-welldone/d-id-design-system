import 'antd/dist/antd.css'
import { Modal } from 'antd'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'

// Incomplete - needs to be implemented

const ModalStyled = styled(Modal)`
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`

// const bodyStyle = {
//   boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
//   borderRadius: '12px'
// }

interface Props {
  children?: ReactNode
}

const DialogBox = ({children}: Readonly<Props>) => {
  return (
    <ModalStyled visible={true} closeIcon={<><CloseIcon /></>} >
      {
        children
      }
    </ModalStyled>
  )
}

export default DialogBox