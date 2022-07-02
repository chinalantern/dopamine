import React, { Suspense, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import Startup from "./components/startup/Startup"
import Content from "./components/content/Content"
import Diamonds from "./diamonds/Diamonds"
import state from "./store"
import "./styles.css"

function App() {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Content />
          <Diamonds />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>
    </>
  )
}

export default App
