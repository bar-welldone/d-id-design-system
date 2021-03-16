import React from 'react';
import './App.css';
import FullCollorButton from './components/buttons/FullColorButton';
import GhostButton from './components/buttons/GhostButton';
import LightButton from './components/buttons/LightButton';
import OutlinedButton from './components/buttons/OutlinedButton';
import Header from './components/header/Header';
import HeaderTab from './components/header/HeaderTab';
import MenuItem from './components/menus/MenuItem';
import MoreMenu from './components/menus/MoreMenu';
import TextField from './components/text-fields/TextField';
import {ReactComponent as PreviewIcon} from './assets/preview.svg';
import SubMenu, { SubMenuItem } from './components/menus/SubMenu';
import Colors from './tokens/Colors';
import Player from './components/player/Player';
import GlobalStyle from './GlobalStyle';
import DialogBox from './components/modals/DialogBox';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FullCollorButton> Normal </FullCollorButton>
      <FullCollorButton>
        <PreviewIcon/>
        Normal
      </FullCollorButton>

      <FullCollorButton disabled> Disabled </FullCollorButton>
      <LightButton>Light</LightButton>
      <OutlinedButton> Outlined </OutlinedButton>
      <OutlinedButton> 
        <PreviewIcon/>
        Outlined 
      </OutlinedButton>
      <OutlinedButton noText> 
        <PreviewIcon/>
      </OutlinedButton>
      <GhostButton> Ghost </GhostButton>
      <TextField value="Text field"/>
      <Header renderTabs={() => (
          <>
            <HeaderTab text="Live Portrait" selected activeColor={Colors.Orange}/>
            <HeaderTab text="Talking Heads"/>
            <HeaderTab text="Video Blurring"/>
          </>
        )} 
        renderOptions={() => (
          <LightButton> Sign Up </LightButton>
        )}
      />

      <MoreMenu>
        <MenuItem text="Preview" renderIcon={() => ( <PreviewIcon /> )}/>
        <MenuItem text="Preview" renderIcon={() => ( <PreviewIcon /> )}/>
        <SubMenu text="Preview" renderIcon={() => ( <PreviewIcon /> )}>
          <SubMenuItem>test</SubMenuItem>
          <SubMenuItem>test</SubMenuItem>
        </SubMenu>
      </MoreMenu>

      <Player progressValue={70}/>
    </div>
  );

}

export default App;
