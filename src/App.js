import React, { useState, useEffect } from 'react';
import useKeyPress from './hooks/useKeyPress';
import './App.css';


const INITIAL_FUEL = 100
const INITIAL_POSITION = {
  X: Math.round(window.innerWidth/2),
  Y: Math.round(window.innerHeight/2),
}
const STEP = 10
const CONSUMPTION_RATE = 1

const App = () => {
  const downPress = useKeyPress(40);
  const upPress = useKeyPress(38);
  const leftPress = useKeyPress(37);
  const rightPress = useKeyPress(39);

  const [positionX, setPositionX] = useState(INITIAL_POSITION.X);
  const [positionY, setPositionY] = useState(INITIAL_POSITION.Y);

  const [fuel, setFuel] = useState(INITIAL_FUEL);


  useEffect(() => {
    if (downPress && fuel) {
      setPositionY(positionY+STEP)
      fuel > 0 ? setFuel(fuel-CONSUMPTION_RATE) : setFuel(0)
    }
  }, [downPress]);
  useEffect(() => {
    if (upPress && fuel) {
      setPositionY(positionY-STEP)
      fuel > 0 ? setFuel(fuel-CONSUMPTION_RATE) : setFuel(0)
    }
  }, [upPress]);
  useEffect(() => {
    if (leftPress && fuel) {
      setPositionX(positionX-STEP)
      fuel > 0 ? setFuel(fuel-CONSUMPTION_RATE) : setFuel(0)
    }
  }, [leftPress]);
  useEffect(() => {
    if (rightPress && fuel) {
      setPositionX(positionX+STEP)
      fuel > 0 ? setFuel(fuel-CONSUMPTION_RATE) : setFuel(0)
    }
  }, [rightPress]);

  return (
    <div className="container">
      <div className="dashboardContainer">
        <div>Drone dashboard</div>
        <div>Fuel: {fuel}%</div>
        <div>Position: {positionX}; {positionY};</div>
      </div>
    <div style={{left: positionX, top: positionY, position: 'absolute', zIndex: 1}}>X</div>
    </div>
  );
};

export default App;
