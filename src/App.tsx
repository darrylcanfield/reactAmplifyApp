import { Route, Routes } from "react-router";
import Transitions from "./routes/transitions.tsx";
import About from "./routes/about.tsx";
import Home from "./routes/home.tsx";
import MyList from "./routes/myList.tsx";
import StandupUnderhook from "./routes/standupUnderhook.tsx";
import StandupOverhook from "./routes/standupOverhook.tsx";
import StandupLapelAndElbow from "./routes/standupLapelAndElbow.tsx";
import PassingHalfGuardStanding from "./routes/passingHalfGuardStanding.tsx";
import PassingHalfGuardKneeling from "./routes/passingHalfGuardKneeling.tsx";
import PassingOpenGuardSupine from "./routes/passingOpenGuardSupine.tsx";
import PassingOpenGuardSeated from "./routes/passingOpenGuardSeated.tsx";
import PassingHalfButterfly from "./routes/passingHalfButterfly.tsx";
import PassingButterflyGuard from "./routes/passingButterflyGuard.tsx";
import PassingHeadquarters from "./routes/passingHeadquarters.tsx";
import PassingSingleLegX from "./routes/passingSingleLegX";
import AttackingHalfGuard from "./routes/attackingHalfGuard.tsx";
import AttackingSingleLegX from "./routes/attackingSingleLegX.tsx";
import { Container } from "react-bootstrap";
import Navbar from "./navbar.tsx";

function App() {
  return (
    <main>
      
      <Container fluid>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transitions' element={<Transitions />} />
        <Route path='/standupUnderhook' element={<StandupUnderhook />} />
        <Route path='/standupOverhook' element={<StandupOverhook/>} />
        <Route path='/standupLapelAndElbow' element={<StandupLapelAndElbow/>} />
        <Route path='/passingOpenGuardSupine' element={<PassingOpenGuardSupine />} />
        <Route path='/passingOpenGuardSeated' element={<PassingOpenGuardSeated />} />
        <Route path='/passingHeadquarters' element={<PassingHeadquarters />} />
        <Route path='/passingHalfGuardStanding' element={<PassingHalfGuardStanding />} />
        <Route path='/passingHalfGuardKneeling' element={<PassingHalfGuardKneeling />} />
        <Route path='/passingButterflyGuard' element={<PassingButterflyGuard />} />
        <Route path='/passingHalfButterfly' element={<PassingHalfButterfly />} />
        <Route path='/passingSingleLegX' element={<PassingSingleLegX />} />
        <Route path='/attackingHalfGuard' element={<AttackingHalfGuard />} />
        <Route path='/attackingSingleLegX' element={<AttackingSingleLegX/>} />
        <Route path='/myList' element={<MyList />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </Container>
      <footer className="text-center">
        <p>RealGrappling&copy; </p>
      </footer>
    </main>
  );
}

export default App;
