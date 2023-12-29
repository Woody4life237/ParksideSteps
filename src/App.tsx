import { Checkbox, Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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

  let showAll =
    showArt &&
    showComputingFormal &&
    showComputingPreformal &&
    showEnglish &&
    showFoodTech &&
    showGlobalStudies &&
    showMaths &&
    showMusic &&
    showPE &&
    showPSHEPrimary &&
    showPSHESecondary &&
    showScience;

  const [showSome, setShowSome] = useState(false);

  useEffect(() => {
    if (
      showArt &&
      showComputingFormal &&
      showComputingPreformal &&
      showEnglish &&
      showFoodTech &&
      showGlobalStudies &&
      showMaths &&
      showMusic &&
      showPE &&
      showPSHEPrimary &&
      showPSHESecondary &&
      showScience
    ) {
      setShowSome(false);
    } else if (
      !(
        showArt ||
        showComputingFormal ||
        showComputingPreformal ||
        showEnglish ||
        showFoodTech ||
        showGlobalStudies ||
        showMaths ||
        showMusic ||
        showPE ||
        showPSHEPrimary ||
        showPSHESecondary ||
        showScience
      )
    ) {
      setShowSome(false);
    } else {
      setShowSome(true);
    }
  }, [
    showArt,
    showComputingFormal,
    showComputingPreformal,
    showEnglish,
    showFoodTech,
    showGlobalStudies,
    showMaths,
    showMusic,
    showPE,
    showPSHEPrimary,
    showPSHESecondary,
    showScience,
  ]);

  const [isFooterVisible, setIsFooterVisible] = useState(true);

  function showAllChange(value) {
    setShowArt(value);
    setShowComputingPreformal(value);
    setShowComputingFormal(value);
    setShowEnglish(value);
    setShowFoodTech(value);
    setShowGlobalStudies(value);
    setShowGlobalStudies(value);
    setShowMaths(value);
    setShowMusic(value);
    setShowPE(value);
    setShowPSHEPrimary(value);
    setShowPSHESecondary(value);
    setShowScience(value);
  }

  return (
    <div className="App" id="app">
      <div onClick={async () => {}}> CLICK ME</div>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div className="checkboxes">
        <div className="checkbox">
          All
          <Checkbox
            style={{ padding: "4px" }}
            checked={showAll}
            indeterminate={showSome}
            onChange={(e) => showAllChange(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Art
          <Checkbox
            style={{ padding: "4px" }}
            checked={showArt}
            onChange={(e) => setShowArt(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Computing (Preformal)
          <Checkbox
            style={{ padding: "4px" }}
            checked={showComputingPreformal}
            onChange={(e) => setShowComputingPreformal(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Computing (Formal)
          <Checkbox
            style={{ padding: "4px" }}
            checked={showComputingFormal}
            onChange={(e) => setShowComputingFormal(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          English
          <Checkbox
            style={{ padding: "4px" }}
            checked={showEnglish}
            onChange={(e) => setShowEnglish(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Food Tech
          <Checkbox
            style={{ padding: "4px" }}
            checked={showFoodTech}
            onChange={(e) => setShowFoodTech(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Global Studies
          <Checkbox
            style={{ padding: "4px" }}
            checked={showGlobalStudies}
            onChange={(e) => setShowGlobalStudies(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Maths
          <Checkbox
            style={{ padding: "4px" }}
            checked={showMaths}
            onChange={(e) => setShowMaths(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Music
          <Checkbox
            style={{ padding: "4px" }}
            checked={showMusic}
            onChange={(e) => setShowMusic(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          PE
          <Checkbox
            style={{ padding: "4px" }}
            checked={showPE}
            onChange={(e) => setShowPE(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          PSHE (Primary)
          <Checkbox
            style={{ padding: "4px" }}
            checked={showPSHEPrimary}
            onChange={(e) => setShowPSHEPrimary(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          PSHE (Secondary)
          <Checkbox
            style={{ padding: "4px" }}
            checked={showPSHESecondary}
            onChange={(e) => setShowPSHESecondary(e.target.checked)}
          />
        </div>
        <div className="checkbox">
          Science
          <Checkbox
            style={{ padding: "4px" }}
            checked={showScience}
            onChange={(e) => setShowScience(e.target.checked)}
          />
        </div>
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
      <div className="group" id="subjects">
        {showArt && (
          <Section
            search={search}
            categories={art}
            subject="Art"
            steps={stepsLevel}
          />
        )}
        {showComputingPreformal && (
          <Section
            search={search}
            categories={computing_preformal}
            subject="Computing (Preformal)"
            steps={stepsLevel}
          />
        )}
        {showComputingFormal && (
          <Section
            search={search}
            categories={computing_formal}
            subject="Computing (Formal)"
            steps={stepsLevel}
          />
        )}
        {showEnglish && (
          <Section
            search={search}
            categories={english}
            subject="English"
            steps={stepsLevel}
          />
        )}
        {showFoodTech && (
          <Section
            search={search}
            categories={food_tech}
            subject="Food Tech"
            steps={stepsLevel}
          />
        )}
        {showGlobalStudies && (
          <Section
            search={search}
            categories={global_studies}
            subject="Global Studies"
            steps={stepsLevel}
          />
        )}
        {showMaths && (
          <Section
            search={search}
            categories={maths}
            subject="Maths"
            steps={stepsLevel}
          />
        )}
        {showMusic && (
          <Section
            search={search}
            categories={music}
            subject="Music"
            steps={stepsLevel}
          />
        )}
        {showPE && (
          <Section
            search={search}
            categories={pe}
            subject="PE"
            steps={stepsLevel}
          />
        )}
        {showPSHEPrimary && (
          <Section
            search={search}
            categories={pshe_primary}
            subject="PSHE - Primary"
            steps={stepsLevel}
          />
        )}
        {showScience && (
          <Section
            search={search}
            categories={science}
            subject="Science"
            steps={stepsLevel}
          />
        )}
      </div>
      <footer
        className="footer"
        style={{ display: isFooterVisible ? "flex" : "none" }}
      >
        For any problems or additions please contact&nbsp;
        <a href="mailto:stepshelperwebmaster@gmail.com">
          StepsHelperWebMaster@gmail.com
        </a>
        <button
          className="close-button"
          onClick={() => setIsFooterVisible(false)}
        >
          close
        </button>
      </footer>
    </div>
  );
}

export default App;
