import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import ProjectsBody from './components/ProjectsBody/ProjectsBody';

const App = () => {

  return (
    <>
      {/* <ProjectInfo/> */}
      <Routes>
        <Route path="/" element={<ProjectsBody />}/>
        <Route path="/project" element={<ProjectInfo />}/>
      </Routes>
    </>
  )
}

export default App;
