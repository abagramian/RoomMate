import './index.scss'
import { Layer, Stage } from "react-konva"

const Canvas = () => (
    <div className='canvas'>
        <Stage
            width = { window.innerWidth - 400 }
            height = { window.innerHeight }
        >
            <Layer />
        </Stage>
    </div>
)

export default Canvas