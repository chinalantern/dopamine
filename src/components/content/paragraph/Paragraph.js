import Plane from "../../Plane"
import { Block, useBlock } from "../../blocks"
import { Text } from "../../Text"
import { Html } from "@react-three/drei"
import state from "../../../store"

const Paragraph = ({ hideImage, image, index, offset, factor, header, aspect, subParagraphs }) => {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#D40749" : "#2FE8C3"

  // TODO: Fix 'tabIndex' bc its reporting wrong numbers bc its in subParagraph loops sometimes

  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        {hideImage ? (
          <>
            <Html
              style={{ width: pixelWidth / (mobile ? 1 : 1.5), textAlign: left ? "left" : "right" }}
              position={[left || mobile ? (-w * size) / 2 : (-w * size) / 6, (-w * size) / 2 / aspect - 0.4 + ((w * size) / aspect / 1.07 + 0.5), 1]}>
              {subParagraphs.map((paragraph, i) => (
                <div key={i} tabIndex={index} style={{ margin: "0 0 1.5rem 0" }}>
                  {paragraph}
                </div>
              ))}
            </Html>
          </>
        ) : (
          <>
            <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
            <Html
              style={{ width: pixelWidth / (mobile ? 1 : 1.5), textAlign: left ? "left" : "right" }}
              position={[left || mobile ? (-w * size) / 2 : (-w * size) / 6, (-w * size) / 2 / aspect - 0.4, 1]}>
              {subParagraphs.map((paragraph, i) => (
                <div key={i} tabIndex={index} style={{ margin: "0 0 1.5rem 0" }}>
                  {paragraph}
                </div>
              ))}
            </Html>
          </>
        )}

        <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

export default Paragraph
