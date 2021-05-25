# Snake Game

## Features:
    1. Up/down/left/right arrow key movement
    2. Keep growing when eats the food.
    3. Shows score

## Implementation:
    1. React Implementation. 
    2. Used React hooks.
    3. Created a custom hook, to move the snake after some interval.

## States:
    1. direction state - to store the current direction - Left/Right/Up/Down
    2. snakeBoxes - stores the co-ordinated of snake - show the snake. 
    3. food - co-ordinated of food.

## Methods: 
    1. Generate Random -
        a. Need to generate random co-ordinates for showing food. 
        b. number is divided and multiplied by 4 so that we match the food co-ordinate with that of snake.
    
    2. moveSnake - 
        a. based on the direction, add or subtract 4 to the head co-ordinate. 
        b. push the head to the snakeBoxes. (push)
        c. delete the tail of the snakeBoxes. (shift)
    
    3. checkIfOut - 
        a. compare the co-ordinate of head of snake with the boundary of the board.
        b. if true - game ends.
    
    4. checkIfCrossed - 
        a. compare the co-ordinate of head of snake with rest of the snake co-ordinates. 
        b. if matches - game ends. 
    
    5. checkIfFoodEaten - 
        a. compare the co-ordinate of head of snake with the co-ordinate of food. 
        b. if matches - generate new food co-ordinate, add new box to snake, score also updates.
    
    6. useInterval - 
        Custom hook created to work with setInterval inside useEffect. 
    

You can visit the game here :  https://snake-game-by-ankit.netlify.app