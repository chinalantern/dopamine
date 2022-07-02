import React, { useRef } from "react"
import Plane from "../Plane"
import { useFrame } from "@react-three/fiber"
import lerp from "lerp"

const Startup = () => {
  const planeRef = useRef()
  useFrame(() => (planeRef.current.material.opacity = lerp(planeRef.current.material.opacity, 0, 0.025)))
  return <Plane ref={planeRef} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

export default Startup
