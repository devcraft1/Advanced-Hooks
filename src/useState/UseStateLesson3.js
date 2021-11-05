import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'


// create a helper array 
const createArray = (length) => [
    ...Array(length)
]

// fetches stars and handles click events
function Star({ selected = false, onselect }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onselect} />
}

// handles star states and logic to 
function StarRating({ totalStars = 5 }) {
    const [selectedStar, setSelectedStar] = useState(0)
    return createArray(totalStars).map((n, i) =>
    (<Star key={i} selected={selectedStar > i} onselect={() => {
        setSelectedStar(i + 1)
    }} />)
    )
}

function Lesson3() {
    return (
        <div>
            <h3>Lesson 3</h3>
            <StarRating totalStars={20} />
        </div>

    )
}


export default Lesson3;
// imported npm install react-icons
// components must be represented by capital letter.