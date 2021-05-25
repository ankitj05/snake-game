import React, { useContext, useEffect } from 'react'
import SnakeContext from '../context/SnakeContext'
import useInterval from './useInterval'

const Board = () => {
    const snakeContext = useContext(SnakeContext)
    const { snakeBoxes, updateSnakeBoxes, direction,
        updateDirection, reset, food, addSnakeBox,
        generateRandom, updateFood } = snakeContext

    const moveSnake = () => {
        let newSnake = [...snakeContext.snakeBoxes]
        let head = newSnake[newSnake.length - 1]

        switch (direction) {
            case 'RIGHT':
                head = [head[0] + 4, head[1]]
                break
            case 'LEFT':
                head = [head[0] - 4, head[1]]
                break
            case 'UP':
                head = [head[0], head[1] - 4]
                break
            case 'DOWN':
                head = [head[0], head[1] + 4]
                break
            default:
                break
        }
        newSnake.push(head)
        newSnake.shift()
        updateSnakeBoxes(newSnake)
    }

    useInterval(moveSnake, 150)

    const getDirection = (e) => {
        switch (e.keyCode) {
            case 37:
                updateDirection('LEFT')
                break

            case 38:
                updateDirection('UP')
                break

            case 39:
                updateDirection('RIGHT')
                break

            case 40:
                updateDirection('DOWN')
                break

            default:
                return
        }
    }

    const checkIfOut = () => {
        let currSnake = [...snakeBoxes]
        let head = currSnake[currSnake.length - 1]
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            gameFinish()
        }
    }

    const checkIfCrossed = () => {
        let currSnake = [...snakeBoxes]
        let head = currSnake.pop()

        currSnake.forEach(box => {
            if (head[0] === box[0] && head[1] === box[1])
                gameFinish()
        })
    }

    const checkIfFoodEaten = () => {
        let currSnake = [...snakeBoxes]
        let head = currSnake[currSnake.length - 1]
        if (head[0] === food[0] && head[1] === food[1]) {
            updateFood(generateRandom())
            addSnakeBox([])
        }
    }

    const gameFinish = () => {
        alert(`Game Finished. Total Score : ${snakeBoxes.length * 10}`)
        reset()
    }

    useEffect(() => {
        document.addEventListener('keydown', getDirection)
    }, [])

    useEffect(() => {
        checkIfOut()
        checkIfCrossed()
        checkIfFoodEaten()
    }, [snakeBoxes])

    return (
        <div>
            {snakeBoxes && snakeBoxes.map((box, i) => (
                < div className="snake" key={i} style={{ left: `${box[0]}%`, top: `${box[1]}%` }}></div>
            ))
            }
        </div >
    )
}

export default Board
