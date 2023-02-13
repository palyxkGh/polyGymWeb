import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {routePaths} from './config/routes';

// pages
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage';
import HistoryPage from './pages/HistoryPage';
import TrainingsPage from './pages/TrainingsPage';
import TrainersPage from './pages/TrainersPage';
import GalleryPage from './pages/GalleryPage';
// components
import NavBar from './components/NavBar';
import TrainingsNavbar from './components/TrainingsNavbar';

// styles
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <TrainingsNavbar />
        <div className="d-flex justify-content-lg-around back" >
          p toto je aktula..
          <Routes>
          <Route path={routePaths.home} element={<HomePage/>}/>
          <Route path={routePaths.info} element={<InfoPage/>}/>
          <Route path={routePaths.history} element={<HistoryPage/>}/>
          <Route path={routePaths.trainings} element={<TrainingsPage/>}/>
          <Route path={routePaths.trainers} element={<TrainersPage/>}/>
          <Route path={routePaths.gallery} element={<GalleryPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;