import React, {useState, useEffect} from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random"


function App() {
    const [randomDogImage, setRandomDogImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setRandomDogImage(data.message))
            
    }, [])

    if(!randomDogImage) {
        return <p>Loading...</p>
    }

    return (
            <div>
                <img src={randomDogImage} alt="A Random Dog" />
            </div>
         )    

}

export default App