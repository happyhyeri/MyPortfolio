import logo from './logo.svg';
import IntroPage from './section/Intro';
import AboutMePage from './section/AboutMe';
import ProjectPage from './section/Project';
import FinishPage from './section/contact/Finish';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useRef} from 'react';

function App() {
  const sectionRef = useRef();
  
  const onChangePageScroll =()=>{
    sectionRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
   <IntroPage onBtnClick={onChangePageScroll}></IntroPage>
   <AboutMePage sectionRef = {sectionRef}></AboutMePage>
    <ProjectPage></ProjectPage>
    <FinishPage></FinishPage>
   </>
  );
}

export default App;
