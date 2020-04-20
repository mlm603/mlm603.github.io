import React, { Component } from 'react';

import Avatar from './components/Avatar/AvatarBody/Avatar';
import AvatarText from './components/Avatar/AvatarText/AvatarText';
import EightBitBackground from './components/UI/EightBitBackground';


class App extends Component {
  render() {
    return (
      <EightBitBackground>
        <Avatar mouth_movements="15g" width="10%" height="150px"/>
        <AvatarText width="60%">
          Hi, I'm Meghan!
          <br/><br/> I like visualizing data, reading about data, talking to people about data, criticizing data . . . you get the idea.
          <select_list>
            <p>> Learn more about me</p>
            <p>> View my portfolio</p>
            <p>> Contact me</p>
          </select_list>
        </AvatarText>
      </EightBitBackground>
    );
  };
}

export default App;
