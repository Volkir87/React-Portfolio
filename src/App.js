import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Description from './components/Description';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Projects from './utils/Projects';

function App() {

  const [allProjects, setProjects] = useState();

  useEffect(() => {
    Projects.getAll()
    .then(data => {
      console.log('data: ',data);
      setProjects(data.allProjects);
    })
    .catch(error => {throw error})
  },[]);
  console.log('allProjects in App: ', allProjects);
  return (
    <div className="general">
      <Main/>
      <Description/>
      <Portfolio allPrj={allProjects}/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
