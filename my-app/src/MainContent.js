import React from "react"
import memesData from "./memesData"

export default function MainContent() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImg() {
        const memeArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNum].url)

    }

    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button onClick={getMemeImg}>Get a new Meme Image
            </button>
            <img src={memeImage} />

        </div>
    )
}