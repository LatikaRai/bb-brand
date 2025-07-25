import React from 'react'
import Bestsellers from './components/Bestsellers'
import Home from './components/Home'
import Marquee from './components/Marquee'
import Para from './components/Para'
import Video from './components/Video'
import Collections from './components/Collections'
import Navbar from './components/Navbar'
// import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <body theme='white'>
      <Navbar/>
      {/* <Mainroutes/> */}
      <Home/>
      <Marquee/>
      <Bestsellers/>
      <Para/>
      <Collections/>
      <Video/>
    </body>
  )
}

export default App

