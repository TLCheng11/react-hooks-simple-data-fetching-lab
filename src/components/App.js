// create your App component here
import React, {useEffect, useState} from "react";

function App() {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setImageUrl(data.message))
    }, [])

    const image = imageUrl ? <img src={imageUrl} alt="A Random Dog" /> : <p>Loading...</p>

    return (
        <div>
            {image}
        </div>
    )

    // if (!imageUrl) {
    //     return (
    //         <div>
    //             <p>Loading...</p>
    //         </div>
    //     )
    // }

    // return (
    //     <div>
    //         <img src={imageUrl} alt="A Random Dog" />
    //     </div>
    // )
}

export default App