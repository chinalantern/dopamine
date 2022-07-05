import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html, Loader } from "@react-three/drei"
import Startup from "./components/startup/Startup"
import Content from "./components/content/Content"
import Diamonds from "./diamonds/Diamonds"
import state from "./store"

import { Cloud, Sky } from "@react-three/drei"

import "./styles.css"

function App() {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  // const onScroll = (e) => {
    // state.top.current = e.target.scrollTop
    // console.log("This is the element scrollTop: ", e.target.scrollTop)
    // console.log('This is the element scrollHeight: ', e.target.scrollHeight)
    // console.log('This is the window.innerHeight: ', window.innerHeight)
  // }

  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  // function Rig() {
  //   const camera = useThree((state) => state.camera)
  //   return useFrame((state) => {
  //     camera.position.z = Math.sin(state.clock.elapsedTime) * 20
  //   })
  // }

  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        {/* <Canvas camera={{ position: [0, 0, 16], fov: 75 }}> */}
        <ambientLight intensity={0.8} />
        {/* <pointLight intensity={1} position={[0, 0, -1000]} /> */}
        <Suspense fallback={null}>
          <Content />
          {/* <Diamonds /> */}
          <Startup />
          {/* <Cloud position={[-4, -2, -25]} speed={0.6} opacity={1} />
          <Cloud position={[4, 2, -15]} speed={0.4} opacity={0.5} />
          <Cloud position={[-4, 2, -10]} speed={0.4} opacity={0.15} />
          <Cloud position={[4, -2, -5]} speed={0.4} opacity={0.25} />
          <Cloud position={[4, 2, 0]} speed={0.6} opacity={0.45} />
          <Cloud position={[-10, 2, 0]} speed={0.25} opacity={0.15} /> */}
        </Suspense>
        {/* <Sky azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} /> */}
        {/* <Rig /> */}
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>
      <Loader />
    </>
  )
}

export default App
