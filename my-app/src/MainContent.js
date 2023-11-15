import React from "react"
import memesData from "./memesData"

export default function MainContent() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://source.unsplash.com/featured/300x201"

    })

    const [allMemesData, setAllMemesData] = React.useState(memesData)



    function getMemeImg() {
        const memeArray = allMemesData.data.memes
        const randomNum = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNum].url
        setMemeImage((preMemeImage) => {
            return {
                ...preMemeImage,
                randomImage : url
            }
        })

    }

    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button onClick={getMemeImg} >Get a new Meme Image
            </button>
            <img src={memeImage.randomImage} />

        </div>
    )
}

