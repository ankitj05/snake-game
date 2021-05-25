import {
    UPDATE_SNAKE,
    UPDATE_DIRECTION,
    UPDATE_FOOD,
    RESET,
    ADD_SNAKE_BOX
} from '../types'

const SnakeReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SNAKE:
            return {
                ...state,
                snakeBoxes: [...action.payload]
            }

        case UPDATE_DIRECTION:
            return {
                ...state,
                direction: action.payload
            }

        case UPDATE_FOOD:
            return {
                ...state,
                food: [...action.payload]
            }

        case RESET:
            return {
                ...action.payload
            }

        case ADD_SNAKE_BOX:
            return {
                ...state,
                snakeBoxes: [action.payload, ...state.snakeBoxes]
            }
        default:
            return {
                ...state
            }
    }
}

export default SnakeReducer