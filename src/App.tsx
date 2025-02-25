import { Route, Routes } from "react-router";
import Transitions from "./routes/transitions.tsx";
import About from "./routes/about.tsx";
import Home from "./routes/home.tsx";
import MyList from "./routes/myList.tsx";
import { Container } from "react-bootstrap";
import Navbar from "./navbar.tsx";

import StandupUnderhook from "./routes/standupUnderhook.tsx";
import StandupOverhook from "./routes/standupOverhook.tsx";
import Standup2on1WristControl from "./routes/standup2on1WristControl.tsx";
import StandupCollarTie from "./routes/standupCollarTie.tsx";
import StandupRussian from "./routes/standupRussian.tsx";
import StandupWrstControl from "./routes/standupWristControl.tsx";
import StandupNoGrips from "./routes/standupNoGrips.tsx";

import PassingHalfGuardStanding from "./routes/passingHalfGuardStanding.tsx";
import PassingHalfGuardKneeling from "./routes/passingHalfGuardKneeling.tsx";
import PassingOpenGuardSupine from "./routes/passingOpenGuardSupine.tsx";
import PassingOpenGuardSeated from "./routes/passingOpenGuardSeated.tsx";
import PassingHalfButterfly from "./routes/passingHalfButterfly.tsx";
import PassingButterflyGuard from "./routes/passingButterflyGuard.tsx";
import PassingHeadquarters from "./routes/passingHeadquarters.tsx";
import PassingSingleLegX from "./routes/passingSingleLegX";

import Attacking5050 from "./routes/attacking5050.tsx";
import AttackingButterflyGuard from "./routes/attackingButterflyGuard.tsx"; 
import AttackingChoiGuard from "./routes/attackingChoiGuard.tsx";
import AttackingClosedGuard from "./routes/attackingClosedGuard.tsx";
import AttackingCrabRide from "./routes/attackingCrabRide.tsx";
import AttackingDeLaRiva from "./routes/attackingDeLaRiva.tsx";
import AttackingHalfButterfly from "./routes/attackingHalfButterfly.tsx";
import AttackingHalfGuard from "./routes/attackingHalfGuard.tsx";
import AttackingInsideReap from "./routes/attackingInsideReap.tsx";
import AttackingInvertedGuard from "./routes/attackingInvertedGuard.tsx";
import AttackingKGuard from "./routes/attackingKGuard.tsx";
import AttackingLegDrag from "./routes/attackingLegDrag.tsx";
import AttackingMount from "./routes/attackingMount.tsx";
import AttackingNorthSouth from "./routes/attackingNorthSouth.tsx";
import AttackingOctopusGuard from "./routes/attackingOctopusGuard.tsx";
import AttackingOutsideAshi from "./routes/attackingOutsideAshi.tsx";
import AttackingOutsideReap from "./routes/attackingOutsideReap.tsx";
import AttackingReverseDLR from "./routes/attackingReverseDLR.tsx";
import AttackingReverseXGuard from "./routes/attackingReverseXGuard.tsx";
import AttackingShinToShin from "./routes/attackingShinToShin.tsx";
import AttackingSideControl from "./routes/attackingSideControl.tsx";
import AttackingSingleLegX from "./routes/attackingSingleLegX.tsx";
import AttackingTurtle from "./routes/attackingTurtle.tsx";
import AttackingBack from "./routes/attackingBack.tsx";

function App() {
  return (
    <main>
      
      <Container fluid>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transitions' element={<Transitions />} />
        <Route path='/myList' element={<MyList />} />
        <Route path='/about' element={<About />} />

        <Route path='/attacking5050' element={<Attacking5050 />} />
        <Route path='/attackingButterflyGuard' element={<AttackingButterflyGuard/>} />
        <Route path='/attackingChoiGuard' element={<AttackingChoiGuard/>} />
        <Route path='/attackingClosedGuard' element={<AttackingClosedGuard/>} />
        <Route path='/attackingCrabRide' element={<AttackingCrabRide/>} />
        <Route path='/attackingDeLaRiva' element={<AttackingDeLaRiva/>} />
        <Route path='/attackingHalfButterfly' element={<AttackingHalfButterfly/>} />
        <Route path='/attackingHalfGuard' element={<AttackingHalfGuard/>} />
        <Route path='/attackingInsideReap' element={<AttackingInsideReap/>} />
        <Route path='/attackingInvertedGuard' element={<AttackingInvertedGuard/>} />
        <Route path='/attackingKGuard' element={<AttackingKGuard/>} />
        <Route path='/attackingLegDrag' element={<AttackingLegDrag/>} />
        <Route path='/attackingMount' element={<AttackingMount/>} />
        <Route path='/attackingOctopusGuard' element={<AttackingOctopusGuard/>} />
        <Route path='/attackingNorthSouth' element={<AttackingNorthSouth/>} />
        <Route path='/attackingOutsideAshi' element={<AttackingOutsideAshi/>} />
        <Route path='/attackingOutsideReap' element={<AttackingOutsideReap/>} />
        <Route path='/attackingReverseDLR' element={<AttackingReverseDLR/>} />
        <Route path='/attackingReverseXGuard' element={<AttackingReverseXGuard/>} />
        <Route path='/attackingShinToShin' element={<AttackingShinToShin/>} />
        <Route path='/attackingSideControl' element={<AttackingSideControl/>} />
        <Route path='/attackingSingleLegX' element={<AttackingSingleLegX/>} />
        <Route path='/attackingTurtle' element={<AttackingTurtle/>} />
        <Route path='/attackingBack' element={<AttackingBack/>} />

        <Route path='/standupUnderhook' element={<StandupUnderhook />} />
        <Route path='/standupOverhook' element={<StandupOverhook/>} />
        <Route path='/standup2on1WristControl' element={<Standup2on1WristControl/>} />
        <Route path='/standupCollarTie' element={<StandupCollarTie/>} />
        <Route path='/standupRussian' element={<StandupRussian/>} />
        <Route path='/standupWristControl' element={<StandupWrstControl/>} />
        <Route path='/standupNoGrips' element={<StandupNoGrips/>} />

        <Route path='/passingOpenGuardSupine' element={<PassingOpenGuardSupine />} />
        <Route path='/passingOpenGuardSeated' element={<PassingOpenGuardSeated />} />
        <Route path='/passingHeadquarters' element={<PassingHeadquarters />} />
        <Route path='/passingHalfGuardStanding' element={<PassingHalfGuardStanding />} />
        <Route path='/passingHalfGuardKneeling' element={<PassingHalfGuardKneeling />} />
        <Route path='/passingButterflyGuard' element={<PassingButterflyGuard />} />
        <Route path='/passingHalfButterfly' element={<PassingHalfButterfly />} />
        <Route path='/passingSingleLegX' element={<PassingSingleLegX />} />

      </Routes>
      </Container>
      <footer className="text-center">
        <p>RealGrappling&copy; </p>
      </footer>
    </main>
  );
}

export default App;
