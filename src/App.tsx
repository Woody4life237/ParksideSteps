import { Checkbox, Slider, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Section from "./Components/Subject";
import {
  art,
  computing_formal,
  computing_preformal,
  english,
  food_tech,
  global_studies,
  maths,
  music,
  pe,
  pshe_primary,
  science,
} from "./subjects";

function App() {
  const [search, setSearch] = useState("");

  const [showArt, setShowArt] = useState(true);
  const [showComputingPreformal, setShowComputingPreformal] = useState(true);
  const [showComputingFormal, setShowComputingFormal] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showFoodTech, setShowFoodTech] = useState(true);
  const [showGlobalStudies, setShowGlobalStudies] = useState(true);
  const [showMaths, setShowMaths] = useState(true);
  const [showMusic, setShowMusic] = useState(true);
  const [showPE, setShowPE] = useState(true);
  const [showPSHEPrimary, setShowPSHEPrimary] = useState(true);
  const [showPSHESecondary, setShowPSHESecondary] = useState(true);
  const [showScience, setShowScience] = useState(true);

  const [stepsLevel, setStepsLevel] = useState([0, 20]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setStepsLevel(newValue as number[]);
  };

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  return (
    <div className="App">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div>
        | Art?:{" "}
        <Checkbox
          checked={showArt}
          onChange={(e) => setShowArt(e.target.checked)}
        />
        | Computing (Preformal)?:{" "}
        <Checkbox
          checked={showComputingPreformal}
          onChange={(e) => setShowComputingPreformal(e.target.checked)}
        />
        | Computing (Formal)?:{" "}
        <Checkbox
          checked={showComputingFormal}
          onChange={(e) => setShowComputingFormal(e.target.checked)}
        />
        | English?:{" "}
        <Checkbox
          checked={showEnglish}
          onChange={(e) => setShowEnglish(e.target.checked)}
        />
        | Food Tech?:{" "}
        <Checkbox
          checked={showFoodTech}
          onChange={(e) => setShowFoodTech(e.target.checked)}
        />
        | Global Studies?:{" "}
        <Checkbox
          checked={showGlobalStudies}
          onChange={(e) => setShowGlobalStudies(e.target.checked)}
        />
        | Maths?:{" "}
        <Checkbox
          checked={showMaths}
          onChange={(e) => setShowMaths(e.target.checked)}
        />
        | Music?:{" "}
        <Checkbox
          checked={showMusic}
          onChange={(e) => setShowMusic(e.target.checked)}
        />
        | PE?:{" "}
        <Checkbox
          checked={showPE}
          onChange={(e) => setShowPE(e.target.checked)}
        />
        | PSHE (Primary)?:{" "}
        <Checkbox
          checked={showPSHEPrimary}
          onChange={(e) => setShowPSHEPrimary(e.target.checked)}
        />
        | PSHE (Secondary)?:{" "}
        <Checkbox
          checked={showPSHESecondary}
          onChange={(e) => setShowPSHESecondary(e.target.checked)}
        />
        | Science?:{" "}
        <Checkbox
          checked={showScience}
          onChange={(e) => setShowScience(e.target.checked)}
        />
        |
      </div>
      <div className="slider">
        Steps Levels
        <Slider
          value={stepsLevel}
          onChange={handleChange}
          valueLabelDisplay="on"
          marks={true}
          max={20}
          min={1}
        />
      </div>
      <div className="group">
        {showArt && (
          <Section search={search} obj={art} title="Art" steps={stepsLevel} />
        )}
        {showComputingPreformal && (
          <Section
            search={search}
            obj={computing_preformal}
            title="Computing (Preformal)"
            steps={stepsLevel}
          />
        )}
        {showComputingFormal && (
          <Section
            search={search}
            obj={computing_formal}
            title="Computing (Formal)"
            steps={stepsLevel}
          />
        )}
        {showEnglish && (
          <Section
            search={search}
            obj={english}
            title="English"
            steps={stepsLevel}
          />
        )}
        {showFoodTech && (
          <Section
            search={search}
            obj={food_tech}
            title="Food Tech"
            steps={stepsLevel}
          />
        )}
        {showGlobalStudies && (
          <Section
            search={search}
            obj={global_studies}
            title="Global Studies"
            steps={stepsLevel}
          />
        )}
        {showMaths && (
          <Section
            search={search}
            obj={maths}
            title="Maths"
            steps={stepsLevel}
          />
        )}
        {showMusic && (
          <Section
            search={search}
            obj={music}
            title="Music"
            steps={stepsLevel}
          />
        )}
        {showPE && (
          <Section search={search} obj={pe} title="PE" steps={stepsLevel} />
        )}
        {showPSHEPrimary && (
          <Section
            search={search}
            obj={pshe_primary}
            title="PSHE - Primary"
            steps={stepsLevel}
          />
        )}
        {showScience && (
          <Section
            search={search}
            obj={science}
            title="Science"
            steps={stepsLevel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
