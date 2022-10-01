import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Error from './Error';
import Report from './Components/Report';
import Home from './Components/Home';
import { useState } from 'react';
import UserPage from './Components/UserPage';
import Login from './Components/Login/Login';

import Caretaker from './Components/Caretaker/index';
import AnimalDetails from './Components/Caretaker/subcontent/AnimalDetails';
import ImmediateActionsMsg from './Components/Caretaker/subcontent/ImmediateActionMsg';
import GpsTracker from './Components/Caretaker/subcontent/GpsTracker';


import Admin from './Components/Admin/index';
import ReportOfCaretakers from './Components/Admin/subcontent/ReportOfCaretakers';
import AddNews from './Components/Admin/subcontent/AddNews';
import ImmediateActions from './Components/Admin/subcontent/ImmediateActions';

function App() {
  return (
    <>
<Router>
  <Routes>
<Route path="/" element={<UserPage />} />
<Route path="/login" element={<Login />} />
  <Route path="/admin" element={<Admin />}>
  <Route path="home" element={<Home />} />
  <Route path="reportOfCaretakers" element={<ReportOfCaretakers />} />
  <Route path="addNews" element={<AddNews />} />
  <Route path="immediateActions" element={<ImmediateActions />} />

  </Route>
  <Route path="/caretaker" element={<Caretaker />}>
  <Route path="home" element={<Home />} />
  <Route path="animalDetails" element={<AnimalDetails />} />
  <Route path="actions" element={<ImmediateActionsMsg />} />
  <Route path="gpsTracker" element={<GpsTracker />} />


  
  </Route>
  </Routes>
</Router>
    </>
  );
}

export default App;
