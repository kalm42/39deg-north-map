import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [coords, setCoords] = useState([39.7578253, -121.8761121]); // default to Chico, CA
  const [showUS, setShowUS] = useState(false);
  const [showStates, setShowStates] = useState(false);
  const [showCounties, setShowCounties] = useState(false);
  const [showCongress, setShowCongress] = useState(false);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, [setCoords]);
  return (
    <div className="App">
      <ControlPanel 
        us={[showUS, setShowUS]} 
        states={[showStates, setShowStates]} 
        counties={[showCounties, setShowCounties]} 
        congress={[showCongress, setShowCongress]} 
        />
      <Map
        position={coords}
        usOutline={showUS}
        statesOutline={showStates}
        countiesOutline={showCounties}
        congressOutline={showCongress}
      />
    </div>
  );
}

export default App;
