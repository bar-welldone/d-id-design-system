import styled from "styled-components";

const ProgressCompleted = styled.div`
  background: #FFFFFF;
`

interface StyledProps { 
  percentageCompleted: number 
}

export const ProgressBarStyled = styled.div<StyledProps>`
  position: relative;
  display: flex;
  height: 4px;
  background: rgba(255,255,255, 0.4);
  border-radius: 5px;
  overflow: hidden;
  ${ProgressCompleted} {
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.percentageCompleted}%;
    height: 100%;
  }
`


export type ProgressBarProps = {
  min?: number
  max?: number
  value?: number
}

const ProgressBar = ({min = 0, max = 100, value = 0}: Readonly<ProgressBarProps>) => {
  const percentageCompleted = ((value - min) / (max - min)) * 100
  return (
    <ProgressBarStyled percentageCompleted={percentageCompleted}>
      <ProgressCompleted />
    </ProgressBarStyled>
  )
}

export default ProgressBar

