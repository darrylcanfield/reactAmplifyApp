import { Route, Routes } from "react-router";
import Transitions from "./routes/transitions.tsx";
import About from "./routes/about.tsx";
import Home from "./routes/home.tsx";
import MyList from "./routes/myList.tsx";
import StandupCollarSleeve from "./routes/standupCollarSleeve.tsx";
import StandupCrossLapel from "./routes/standupCrossLapel.tsx";
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
      <Navbar /> 
      <Container>
      {/* <nav>
        <h1>links: load</h1>
        <a href="/">Home</a>
        <a href="/standup">Standup</a>
        <a href="/about">About</a>  
      </nav>
      <nav>
      <h1>routes: no load</h1>
        <Link to="/">Home</Link>
        <Link to ="/standup">Huge</Link>
        <Link to="/about">About</Link>  
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transitions' element={<Transitions />} />
        <Route path='/standupCollarSleeve' element={<StandupCollarSleeve />} />
        <Route path='/standupCrossLapel' element={<StandupCrossLapel />} />
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
    </main>
  );
}

export default App;
