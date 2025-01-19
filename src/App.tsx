import { Route, Routes } from "react-router";
import Transitions from "./routes/transitions.tsx";
import About from "./routes/about.tsx";
import Home from "./routes/home.tsx";
import MyList from "./routes/myList.tsx";
import StandupUnderhook from "./routes/standupUnderhook.tsx";
import StandupOverhook from "./routes/standupOverhook.tsx";
import StandupLapelAndElbow from "./routes/standupLapelAndElbow.tsx";
import PassingHalfGuard from "./routes/passingHalfGuard.tsx";
import PassingOpenGuard from "./routes/passingOpenGuard.tsx";
import PassingSingleLegX from "./routes/passingSingleLegX";
import AttackingHalfGuard from "./routes/attackingHalfGuard.tsx";
import AttackingOpenGuard from "./routes/attackingOpenGuard.tsx";
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
        <Route path='/passingOpenGuard' element={<PassingOpenGuard />} />
        <Route path='/passingHalfGuard' element={<PassingHalfGuard />} />
        <Route path='/passingSingleLegX' element={<PassingSingleLegX />} />
        <Route path='/attackingOpenGuard' element={<AttackingOpenGuard />} />
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
