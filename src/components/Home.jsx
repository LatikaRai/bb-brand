import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='home-section relative w-full h-[92vh] -z-[11] p-[2vw] bg-[#121212] flex flex-col items-center justify-center'>
        <h1 className='brand-name text-white text-[25vw]'>Youthiapa</h1>
        <div className="model-cont absolute w-[60vw] h-full flex items-center justify-center text-white">
          <div className="model-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
