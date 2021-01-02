import React from 'react';
import Clock from './components/clock/Clock';
import Toggle from './components/Toggle/index';

function App() {
  
  const black = '#000000';
  const white = '#FFFFFF';

  const [toggled, setToggled] = React.useState(false);
  const [background, setBackground] = React.useState(white);
  const [color, setColor] = React.useState(black);
  
  



  const handleClick = () => {
    setToggled((s) => !s); //inverter valor antigo
    
    if(background == white) {
      setBackground(black);
      setColor(white);
    } else {
      setBackground(white);
      setColor(black);
    }
    
  };


 

  return (
    <div className="App" style={{background, color}}>
      <header className="App-header">
        
        <div className='theme-options'>
          <Toggle toggled={toggled} onClick={handleClick}  />
          <Clock />
        </div>

      </header>
    </div>
  );
}

export default App;
