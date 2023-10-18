import React from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import "./Info/info.css";
import Informacion from "./Informacion";
import Experience from "./Experience";





const App = () => {
  return (
    <Canvas camera={{ position: [2, 0, 5] }}>
      <mesh className="mesh-container">
        <Informacion
          nombre="soy: JHEISON GOMEZ!!"
          biografia="ESTUTIANTE DE
          DESARROLLO THREE.JS"
        />
        <Experience />
       
        
      </mesh>
    </Canvas>
  );
};

export default App;