import React from 'react';
import Clock from './components/clock/Clock';
import Toggle from './components/Toggle/index';

function App() {
  
  const [toggled, setToggled] = React.useState(false);
  const [background, setBackground] = React.useState("#fdfdfd");
  const [font, setFont] = React.useState("#424246");


  const handleClick = () => {
    setToggled((s) => !s); //inverter valor antigo
    setBackground(background);
    setFont(font);
  };


 

  return (
    <div className="App">
      <header className="App-header">
        
        <div className='theme-options'>
          <Toggle toggled={toggled} onClick={handleClick} />
          <Clock />
        </div>

      </header>
    </div>
  );
}

export default App;
