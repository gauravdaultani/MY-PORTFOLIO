import React from 'react'
import Herocmponent from './sub/Herocmponent'

interface Props {}

const Hero = () => {
  return (
  <div className= "relative flex flex.col w-full h-full">
    <video
    autoPlay
    loop
    muted
    className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" /> 
    </video>
    <Herocmponent />
  </div>
  )

}

export default Hero