import React from 'react'
import Home from './components/Home'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Video from './components/Video'
import Collections from './components/Collections'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Marquee/>
      <Para/>
      <Video/>
      <Collections/>
    </div>
  )
}

export default App

