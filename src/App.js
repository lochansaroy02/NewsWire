import './App.css';
import React, { useState ,useEffect} from 'react'
import Navbar from "./components/Navbar";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




/**
 * Fix the errors 
 * set default image 
 * fix responsiveness 
 */




export const App = () => {

  const pageSize = 15;
  const api = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);


  useEffect(() => {
  setProgress(progress)
  return () => {
  };
}, [progress]);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={< News setProgress={setProgress} api={api} key='general' pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/Business" element={< News setProgress={setProgress} api={api} key='business' pageSize={pageSize} country="in" category="business" />}></Route>
          <Route exact path="/Entertainment" element={< News setProgress={setProgress} api={api} key='entertainment' pageSize={pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path="/General" element={< News setProgress={setProgress} api={api} key='general' pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/Health" element={< News setProgress={setProgress} api={api} key='health' pageSize={pageSize} country="in" category="health" />}></Route>
          <Route exact path="/Science" element={< News setProgress={setProgress} api={api} key='science' pageSize={pageSize} country="in" category="science" />}></Route>
          <Route exact path="/Sports" element={< News setProgress={setProgress} api={api} key='sports' pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route exact path="/Technology" element={< News setProgress={setProgress} api={api} key='technology}>' pageSize={pageSize} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App