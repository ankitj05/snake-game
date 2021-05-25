import React, { useContext } from 'react'
import SnakeContext from '../context/SnakeContext'


function Food() {
    const snakeContext = useContext(SnakeContext)
    const { food } = snakeContext

    return (
        <div>
            <div className="food" style={{ left: `${food[0]}%`, top: `${food[1]}%` }}></div>
        </div>
    )
}

export default Food
