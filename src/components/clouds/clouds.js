import React, { useRef, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
import { Block, useBlock } from "../../blocks"
import lerp from "lerp"
import state from "../../store"

// function Rig() {
//   const camera = useThree((state) => state.camera)
//   return useFrame((state) => {
//     // camera.position.z = Math.sin(state.clock.elapsedTime) * 20
//   })
// }

export default function Clouds() {
  const { size, gl, scene, camera, clock } = useThree()
  const { contentMaxWidth, sectionHeight, mobile } = useBlock()
  const cloud = useRef()
  const ratio = gl.getPixelRatio()

  useFrame(() => {
    state.clouds.forEach((cloud, i) => {
      const {}
    })
  })

  return (
    <></>
    // <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
    //   <ambientLight intensity={0.8} />
    //   <pointLight intensity={2} position={[0, 0, -1000]} />
    //   <Suspense fallback={null}>
    //     <Cloud position={[-4, -2, -25]} speed={0.1} opacity={0.3} segments={100} />
    //     <Cloud position={[4, 2, -15]} speed={0.3} opacity={0.3} segments={100} />
    //     <Cloud position={[-4, 2, -10]} speed={0.4} opacity={0.2} segments={100} />
    //     <Cloud position={[4, -2, -5]} speed={0.3} opacity={0.3} />
    //     <Cloud position={[4, 2, 0]} speed={0.5} opacity={0.3} />
    //   </Suspense>
    //   {/* <Sky  azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} /> */}
    //   {/* <Rig /> */}
    // </Canvas>
  )
}

// opacity={0.5}
// speed={0.4} // Rotation speed
// width={10} // Width of the full cloud
// depth={1.5} // Z-dir depth
// segments={20} // Number of particles

// camera={{ position: [0, 0, 20], fov: 75 }}>
// <ambientLight intensity={0.8} />
// <pointLight intensity={2} position={[0, 0, -1000]} />
// <Suspense fallback={null}>
//   <Cloud position={[-4, -2, -25]} speed={0.1} opacity={0.3} segments={100} />
//   <Cloud position={[4, 2, -15]} speed={0.3} opacity={0.3} segments={100} />
//   <Cloud position={[-4, 2, -10]} speed={0.4} opacity={0.2} segments={100} />
//   <Cloud position={[4, -2, -5]} speed={0.3} opacity={0.3} />
//   <Cloud position={[4, 2, 0]} speed={0.5} opacity={0.3} />
// </Suspense>
// {/* <Sky  azimuth={0.1} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} /> */}
// {/* <Rig /> */}
