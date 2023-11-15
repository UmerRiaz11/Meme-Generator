import React from "react"
import MainContent from "./MainContent"
import box from "./box"
import Boxes from "./Boxes"


export default function App() {
    const [square, setSquare] = React.useState(box)
    // const style = { backgroundColor: props.darkMode ? "#cccccc" : "#222222" }
    function toggle(id) {
        setSquare((preSquare) => {
            return preSquare.map((square) => {
                return square.id === id ? { ...square, on: !square.on } : {...square, square}
            })

        })

        const squareElements = square.map((square) => {
            return <Boxes
                key={square.id}
                on={square.on}
                toggle={() => toggle(square.id)}

            />
        })


        return (
            <div>
                {squareElements}
                {/* <MainContent /> */}
            </div>
        )
    }
}