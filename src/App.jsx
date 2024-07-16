import './App.css'
import { Navbar } from './components/Navbar';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import React, { useState, useEffect } from 'react';


function App() {
  const [projectList, setProjectList] = useState([]);

  const fetchProjects = async () => {
    try {
      const fetchedProjectList = await fetch(
        `http://localhost:3000/Users`
      ).then((response) => response.json());
      setProjectList(fetchedProjectList);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <Cards listOfProjects={projectList}/>
      <Footer />
    </div>
  )
}

export default App