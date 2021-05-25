import React, { useContext } from 'react'
import SnakeContext from '../context/SnakeContext'
function Score() {

    const snakeContext = useContext(SnakeContext)
    const { snakeBoxes } = snakeContext

    return (
        <div>
            <h2 className="score">Score: {snakeBoxes.length * 10}</h2>
        </div>
    )
}

export default Score
