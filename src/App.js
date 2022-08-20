import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    // <Router>
    //   <div className="container">
    //   <Navbar />
    //   <br/>
    //   <Route path="/" exact component={ExercisesList} />
    //   <Route path="/edit/:id" component={EditExercise} />
    //   <Route path="/create" component={CreateExercise} />
    //   <Route path="/user" component={CreateUser} />
    //   </div>
    // </Router>
      <Router>
        <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<ExerciseList />}/>
          <Route path="/edit/:id" element={<EditExercise />}/>
          <Route path="/create"  element={<CreateExercise />}/>
          <Route path="/user"  element={<CreateUser />}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
