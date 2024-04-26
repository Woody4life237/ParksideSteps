import { Checkbox, Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.scss";
import Section from "./Components/Subject";
import {
  art,
  autism,
  computing_formal,
  computing_preformal,
  english,
  food_tech,
  functional_skill_english,
  global_studies,
  maths,
  music,
  pe,
  pshe_primary,
  science,
  functional_skill_ICT,
  functional_skill_maths,
  ready_to_go,
  life_skills_passport,
  parkside_steps,
} from "./subjects";

function App() {
  const [search, setSearch] = useState("");

  const [showAutism, setShowAutism] = useState(true);
  const [showArt, setShowArt] = useState(true);
  const [showComputingPreformal, setShowComputingPreformal] = useState(true);
  const [showComputingFormal, setShowComputingFormal] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showFoodTech, setShowFoodTech] = useState(true);
  const [showFunEnglish, setShowFunEnglish] = useState(true);
  const [showFunICT, setShowFunICT] = useState(true);
  const [showFunMaths, setShowFunMaths] = useState(true);
  const [showGlobalStudies, setShowGlobalStudies] = useState(true);
  const [showLifeSkills, setShowLifeSkills] = useState(true);
  const [showMaths, setShowMaths] = useState(true);
  const [showMusic, setShowMusic] = useState(true);
  const [showSteps, setShowSteps] = useState(true);
  const [showPE, setShowPE] = useState(true);
  const [showPSHEPrimary, setShowPSHEPrimary] = useState(true);
  const [showPSHESecondary, setShowPSHESecondary] = useState(true);
  const [showRTG, setShowRTG] = useState(true);
  const [showScience, setShowScience] = useState(true);

  const [steps_level, setStepsLevel] = useState([0, 20]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setStepsLevel(newValue as number[]);
  };

  let inputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  let showAll =
    showAutism &&
    showArt &&
    showComputingFormal &&
    showComputingPreformal &&
    showEnglish &&
    showFoodTech &&
    showFunEnglish &&
    showFunICT &&
    showFunMaths &&
    showGlobalStudies &&
    showLifeSkills &&
    showMaths &&
    showMusic &&
    showSteps &&
    showPE &&
    showPSHEPrimary &&
    showPSHESecondary &&
    showRTG &&
    showScience;

  let showAllPrimary =
    showAutism &&
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

  let showAllSecondary =
    showFunEnglish &&
    showFunICT &&
    showFunMaths &&
    showLifeSkills &&
    showSteps &&
    showRTG;

  const [showSome, setShowSome] = useState(false);

  useEffect(() => {
    if (
      showAutism &&
      showArt &&
      showComputingFormal &&
      showComputingPreformal &&
      showEnglish &&
      showFoodTech &&
      showFunEnglish &&
      showFunICT &&
      showFunMaths &&
      showGlobalStudies &&
      showLifeSkills &&
      showMaths &&
      showMusic &&
      showSteps &&
      showPE &&
      showPSHEPrimary &&
      showPSHESecondary &&
      showRTG &&
      showScience
    ) {
      setShowSome(false);
    } else if (
      !(
        showAutism ||
        showArt ||
        showComputingFormal ||
        showComputingPreformal ||
        showEnglish ||
        showFoodTech ||
        showFunEnglish ||
        showFunICT ||
        showFunMaths ||
        showGlobalStudies ||
        showLifeSkills ||
        showMaths ||
        showMusic ||
        showSteps ||
        showPE ||
        showPSHEPrimary ||
        showPSHESecondary ||
        showRTG ||
        showScience
      )
    ) {
      setShowSome(false);
    } else {
      setShowSome(true);
    }
  }, [
    showAutism,
    showArt,
    showComputingFormal,
    showComputingPreformal,
    showEnglish,
    showFoodTech,
    showFunEnglish,
    showFunICT,
    showFunMaths,
    showGlobalStudies,
    showLifeSkills,
    showMaths,
    showMusic,
    showSteps,
    showPE,
    showPSHEPrimary,
    showPSHESecondary,
    showRTG,
    showScience,
  ]);

  const [showSomePrimary, setShowSomePrimary] = useState(false);

  useEffect(() => {
    if (
      showAutism &&
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
      setShowSomePrimary(false);
    } else if (
      !(
        showAutism ||
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
      setShowSomePrimary(false);
    } else {
      setShowSomePrimary(true);
    }
  }, [
    showAutism,
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

  const [showSomeSecondary, setShowSomeSecondary] = useState(false);

  useEffect(() => {
    if (
      showFunEnglish &&
      showFunICT &&
      showFunMaths &&
      showLifeSkills &&
      showSteps &&
      showRTG
    ) {
      setShowSomeSecondary(false);
    } else if (
      !(
        showFunEnglish ||
        showFunICT ||
        showFunMaths ||
        showLifeSkills ||
        showSteps ||
        showRTG
      )
    ) {
      setShowSomeSecondary(false);
    } else {
      setShowSomeSecondary(true);
    }
  }, [
    showFunEnglish,
    showFunICT,
    showFunMaths,
    showLifeSkills,
    showSteps,
    showRTG,
  ]);

  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsFooterVisible(false);
    }
  }, []);

  function showAllChange(value) {
    setShowAutism(value);
    setShowArt(value);
    setShowComputingPreformal(value);
    setShowComputingFormal(value);
    setShowEnglish(value);
    setShowFoodTech(value);
    setShowFunEnglish(value);
    setShowFunMaths(value);
    setShowFunICT(value);
    setShowGlobalStudies(value);
    setShowMaths(value);
    setShowMusic(value);
    setShowPE(value);
    setShowPSHEPrimary(value);
    setShowPSHESecondary(value);
    setShowScience(value);
    setShowLifeSkills(value);
    setShowSteps(value);
    setShowRTG(value);
  }

  function showAllChangePrimary(value) {
    setShowAutism(value);
    setShowArt(value);
    setShowComputingPreformal(value);
    setShowComputingFormal(value);
    setShowEnglish(value);
    setShowFoodTech(value);
    setShowGlobalStudies(value);
    setShowMaths(value);
    setShowMusic(value);
    setShowPE(value);
    setShowPSHEPrimary(value);
    setShowPSHESecondary(value);
    setShowScience(value);
  }
  function showAllChangeSecondary(value) {
    setShowFunEnglish(value);
    setShowFunMaths(value);
    setShowFunICT(value);
    setShowLifeSkills(value);
    setShowSteps(value);
    setShowRTG(value);
  }

  return (
    <div className="App" id="app">
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
          <div className="checkbox primary">
            Primary
            <Checkbox
              style={{ padding: "4px" }}
              checked={showAllPrimary}
              indeterminate={showSomePrimary}
              onChange={(e) => showAllChangePrimary(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Secondary
            <Checkbox
              style={{ padding: "4px" }}
              checked={showAllSecondary}
              indeterminate={showSomeSecondary}
              onChange={(e) => showAllChangeSecondary(e.target.checked)}
            />
          </div>
        </div>
        <div className="checkboxes">
          <div className="checkbox primary">
            Art
            <Checkbox
              style={{ padding: "4px" }}
              checked={showArt}
              onChange={(e) => setShowArt(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Computing (Preformal)
            <Checkbox
              style={{ padding: "4px" }}
              checked={showComputingPreformal}
              onChange={(e) => setShowComputingPreformal(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Computing (Formal)
            <Checkbox
              style={{ padding: "4px" }}
              checked={showComputingFormal}
              onChange={(e) => setShowComputingFormal(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            English
            <Checkbox
              style={{ padding: "4px" }}
              checked={showEnglish}
              onChange={(e) => setShowEnglish(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Food Tech
            <Checkbox
              style={{ padding: "4px" }}
              checked={showFoodTech}
              onChange={(e) => setShowFoodTech(e.target.checked)}
            />
          </div>

          <div className="checkbox primary">
            Global Studies
            <Checkbox
              style={{ padding: "4px" }}
              checked={showGlobalStudies}
              onChange={(e) => setShowGlobalStudies(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Maths
            <Checkbox
              style={{ padding: "4px" }}
              checked={showMaths}
              onChange={(e) => setShowMaths(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Music
            <Checkbox
              style={{ padding: "4px" }}
              checked={showMusic}
              onChange={(e) => setShowMusic(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            PE
            <Checkbox
              style={{ padding: "4px" }}
              checked={showPE}
              onChange={(e) => setShowPE(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            PSHE (Primary)
            <Checkbox
              style={{ padding: "4px" }}
              checked={showPSHEPrimary}
              onChange={(e) => setShowPSHEPrimary(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            PSHE (Secondary)
            <Checkbox
              style={{ padding: "4px" }}
              checked={showPSHESecondary}
              onChange={(e) => setShowPSHESecondary(e.target.checked)}
            />
          </div>
          <div className="checkbox primary">
            Science
            <Checkbox
              style={{ padding: "4px" }}
              checked={showScience}
              onChange={(e) => setShowScience(e.target.checked)}
            />
          </div>
        </div>
        <div className="checkboxes">
          <div className="checkbox secondary">
            Autism
            <Checkbox
              style={{ padding: "4px" }}
              checked={showAutism}
              onChange={(e) => setShowAutism(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Functional English
            <Checkbox
              style={{ padding: "4px" }}
              checked={showFunEnglish}
              onChange={(e) => setShowFunEnglish(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Functional ICT
            <Checkbox
              style={{ padding: "4px" }}
              checked={showFunICT}
              onChange={(e) => setShowFunICT(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Functional Maths
            <Checkbox
              style={{ padding: "4px" }}
              checked={showFunMaths}
              onChange={(e) => setShowFunMaths(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Life Skills Passport
            <Checkbox
              style={{ padding: "4px" }}
              checked={showLifeSkills}
              onChange={(e) => setShowLifeSkills(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Parkside Foundation
            <Checkbox
              style={{ padding: "4px" }}
              checked={showSteps}
              onChange={(e) => setShowSteps(e.target.checked)}
            />
          </div>
          <div className="checkbox secondary">
            Ready to Go
            <Checkbox
              style={{ padding: "4px" }}
              checked={showRTG}
              onChange={(e) => setShowRTG(e.target.checked)}
            />
          </div>
        </div>
      </div>
      <div className="slider">
        Steps Levels
        <Slider
          value={steps_level}
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
            steps={steps_level}
          />
        )}
        {showAutism && (
          <Section
            search={search}
            categories={autism}
            subject="AET 2.0: Autism Prog"
            steps={steps_level}
          />
        )}
        {showComputingPreformal && (
          <Section
            search={search}
            categories={computing_preformal}
            subject="Computing (Preformal)"
            steps={steps_level}
          />
        )}
        {showComputingFormal && (
          <Section
            search={search}
            categories={computing_formal}
            subject="Computing (Formal)"
            steps={steps_level}
          />
        )}
        {showEnglish && (
          <Section
            search={search}
            categories={english}
            subject="English"
            steps={steps_level}
          />
        )}
        {showFoodTech && (
          <Section
            search={search}
            categories={food_tech}
            subject="Food Tech"
            steps={steps_level}
          />
        )}
        {showFunEnglish && (
          <Section
            search={search}
            categories={functional_skill_english}
            subject="Functional Skills: English (C.1)"
            steps={steps_level}
          />
        )}
        {showFunICT && (
          <Section
            search={search}
            categories={functional_skill_ICT}
            subject="Functional Skills: ICT (C.1)"
            steps={steps_level}
          />
        )}
        {showFunMaths && (
          <Section
            search={search}
            categories={functional_skill_maths}
            subject="Functional Skills: Maths (C.1)"
            steps={steps_level}
          />
        )}
        {showGlobalStudies && (
          <Section
            search={search}
            categories={global_studies}
            subject="Global Studies"
            steps={steps_level}
          />
        )}
        {showLifeSkills && (
          <Section
            search={search}
            categories={life_skills_passport}
            subject="Lifeskills Passport (C.1)"
            steps={steps_level}
          />
        )}
        {showMaths && (
          <Section
            search={search}
            categories={maths}
            subject="Maths"
            steps={steps_level}
          />
        )}
        {showMusic && (
          <Section
            search={search}
            categories={music}
            subject="Music"
            steps={steps_level}
          />
        )}
        {showSteps && (
          <Section
            search={search}
            categories={parkside_steps}
            subject="Parkside Foundation"
            steps={steps_level}
          />
        )}
        {showRTG && (
          <Section
            search={search}
            categories={ready_to_go}
            subject="Parkside Ready to Go"
            steps={steps_level}
          />
        )}
        {showPE && (
          <Section
            search={search}
            categories={pe}
            subject="PE"
            steps={steps_level}
          />
        )}
        {showPSHEPrimary && (
          <Section
            search={search}
            categories={pshe_primary}
            subject="PSHE - Primary"
            steps={steps_level}
          />
        )}
        {showScience && (
          <Section
            search={search}
            categories={science}
            subject="Science"
            steps={steps_level}
          />
        )}
      </div>
      <a style={{ display: "none" }} href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FWoody4life237%2FParksideSteps"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FWoody4life237%2FParksideSteps&countColor=%23263759" /></a>
      <div className="spacer"></div>
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
