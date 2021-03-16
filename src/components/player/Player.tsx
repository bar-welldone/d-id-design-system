import styled from "styled-components";
import ProgressBar, { ProgressBarProps, ProgressBarStyled } from "./ProgressBar";
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as SoundIcon } from '../../assets/volume.svg'
import { ReactComponent as FullscreenIcon } from '../../assets/fullscreen.svg'


const PlayerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  padding: 4px 4px 4px 8px;

  ${ProgressBarStyled} {
    margin-right: 6px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
`

const PlayerControlsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  svg {
    path {
      fill: #FFFFFF;
    }
    
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

`

const FullscreenIconStyled = styled(FullscreenIcon)`
  margin-left: auto;
`


type ProgressPrefixed<Type> = {
  [Property in keyof Type as `progress${Capitalize<string & Property>}`]: Type[Property]
}

type Props = ProgressPrefixed<ProgressBarProps> & {
  onPlayChange?(): void
  onVolumeChange?(): void
  onFullscreenChange?(): void
}

const Player = (props: Readonly<Props>) => {
  const {progressMin, progressMax, progressValue} = props
  const {onPlayChange, onVolumeChange, onFullscreenChange} = props

  return (
    <PlayerStyled>
      <ProgressBar min={progressMin} max={progressMax} value={progressValue}/>
      <PlayerControlsContainer>
        
        <PlayIcon onClick={onPlayChange}/> 
        <SoundIcon onClick={onVolumeChange} /> 
        <FullscreenIconStyled onClick={onFullscreenChange}/> 
      </PlayerControlsContainer>
    </PlayerStyled>
  )
}

export default Player