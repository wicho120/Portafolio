import React, { useState, useEffect } from 'react';
import NavBarComponent from './components/NavBarComponent';
import SkillComponent from './components/SkillComponent';
import TypingComponent from './components/TypingComponent';
const App = () => {

  return (
    <div>
          <NavBarComponent></NavBarComponent>
          <TypingComponent></TypingComponent>
          <SkillComponent></SkillComponent>
    </div>

  );
};

export default App;


