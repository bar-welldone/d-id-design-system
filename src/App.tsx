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
import {ReactComponent as PreviewIcon} from './assets/preview-icon.svg';


function App() {
  return (
    <div className="App">
      <FullCollorButton> Normal </FullCollorButton>
      <FullCollorButton disabled> Disabled </FullCollorButton>
      <LightButton>Light</LightButton>
      <OutlinedButton> Outlined </OutlinedButton>
      <GhostButton> Ghost </GhostButton>
      <TextField value="Text field"/>
      <Header renderTabs={() => (
          <>
            <HeaderTab text="Live Portrait" selected/>
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
      </MoreMenu>
    </div>
  );
}

export default App;
