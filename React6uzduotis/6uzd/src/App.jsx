import "./App.css";
import Darbuotojas from "./components/Darbuotojas";
import PrekiuKrepselis from "./components/PrekiuKrepselis";
import Skaicius from "./components/Skaicius";
import TrysSkaiciai from "./components/TrysSkaiciai";
import ZodzioIlgis from "./components/ZodzioIlgis";

function App() {
  return (
    <>
      <h3>1 uzd.</h3>
      <ZodzioIlgis />
      <h3>2 uzd.</h3>
      <Skaicius />
      <h3>3 uzd.</h3>
      <TrysSkaiciai />
      <h3>4 uzd.</h3>
      <Darbuotojas />
      <h3>5 uzd.</h3>
      <PrekiuKrepselis />
    </>
  );
}

export default App;
