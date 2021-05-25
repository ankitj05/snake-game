import React, { useReducer } from 'react'
import SnakeReducer from './SnakeReducer'
import SnakeContext from './SnakeContext'
import {
    UPDATE_SNAKE,
    UPDATE_DIRECTION,
    UPDATE_FOOD,
    RESET,
    ADD_SNAKE_BOX
} from '../types'

const SnakeState = (props) => {

    const generateRandom = () => {
        let min = 1
        let max = 98
        let x = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4
        let y = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4
        return [x, y]
    }

    const initialState = {
        snakeBoxes: [[0, 0], [4, 0]],
        food: generateRandom(),
        direction: "RIGHT",
        score: 0
    }

    const [state, dispatch] = useReducer(SnakeReducer, initialState)

    const updateSnakeBoxes = (boxes) => dispatch({ type: UPDATE_SNAKE, payload: boxes })

    const updateDirection = (direction) => dispatch({ type: UPDATE_DIRECTION, payload: direction })

    const updateFood = (food) => dispatch({ type: UPDATE_FOOD, payload: food })

    const reset = () => dispatch({ type: RESET, payload: initialState })

    const addSnakeBox = (box) => dispatch({ type: ADD_SNAKE_BOX, payload: box })

    return <SnakeContext.Provider
        value={
            {
                snakeBoxes: state.snakeBoxes,
                food: state.food,
                direction: state.direction,
                updateSnakeBoxes: updateSnakeBoxes,
                updateDirection: updateDirection,
                updateFood: updateFood,
                reset: reset,
                addSnakeBox: addSnakeBox,
                generateRandom: generateRandom
            }
        }>
        {props.children}
    </SnakeContext.Provider>
}

export default SnakeState
