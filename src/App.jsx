import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sectionfirst from './components/Sectionfirst'
import Video from './components/Video'
import Sectionthird from './components/Sectionthird'
import ImageSlider from './components/ImageSlider'
import TextSlider from './components/TextSlider'
import Images from './components/Images'
import Trendig from './components/Trendig'
import Lastsection from './components/Lastsection'
import Footer from './components/Footer'


function App() {
 

  return (
 <>
    <Navbar/>
 <Sectionfirst/>
 <Video/>
 <Sectionthird/>
 <ImageSlider/>
 <TextSlider/>
 <Images/>
 <Trendig/>
 <Lastsection/>
 <Footer/>
 </>
  )
}

export default App
