import React, { useMemo, useRef, useEffect } from "react"
import { Block, useBlock } from "../blocks"
import { Text, MultilineText } from "../Text"
import Paragraph from "./paragraph/Paragraph"
import { useLoader } from "@react-three/fiber"
import { Html, useTexture, Cloud } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import Plane from "../Plane"
import state from "../../store"

const Content = () => {
  const images = useTexture(state.paragraphs.map(({ image }) => image))
  useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile, offsetFactor } = useBlock()
  const size = 1
  const pixelWidth = w * state.zoom * size
  
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.15} position={[-w / 3.2, 0.5, -1]} color="#d40749">
            DOPAMINE
          </Text>
        </Block>
        <Block factor={1.0}>
          <Html className="bottom-left" style={{ color: "white", width: pixelWidth / (mobile ? 1 : 2) }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            Mostly it’s just me and heroin...
          </Html>
        </Block>
      </Block>
      <Block factor={2.2} offset={13.5}>
        <MultilineText top left size={w * 0.09} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe8c3" text={"There it is!"} />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
      {state.clouds.map(({ x, offset, pos, scale, factor }, index) => (
        <Block key={index} factor={factor} offset={offset}>
          {/* <Cloud position={[-4, -2, -25]} speed={0.6} opacity={1} />
          <Cloud position={[4, 2, -15]} speed={0.4} opacity={0.5} />
          <Cloud position={[-4, 2, -10]} speed={0.4} opacity={0.15} />
          <Cloud position={[4, -2, -5]} speed={0.4} opacity={0.25} />
          <Cloud position={[4, 2, 0]} speed={0.6} opacity={0.45} />
          <Cloud position={[-10, 2, 0]} speed={0.25} opacity={0.15} /> */}
        </Block>
      ))}
      <Block factor={1.25} offset={25}>
        <Html style={{ color: "white" }} className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
          …I’m no longer alone.
        </Html>
      </Block>
    </>
  )
}

export default Content
