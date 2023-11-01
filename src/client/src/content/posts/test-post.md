---
title: The Game of Life in Javascript
category: Programming
description: Learn how to code the classic Game of Life in JavaScript. This
  simple but addictive game is a great way to learn about cellular automata and
  game programming.
draft: false
date: November 1, 2023 - 4:30 AM
author: Wesley Ford
image.src: public/image/blog/github-mark.png
contentType: article
image:
  src: /image/blog/test-post.jpg
  desc: Person sitting on rock in water
---

# Creating the Game of Life in JavaScript

Conway's Game of Life is a classic cellular automaton devised by British mathematician John Conway in 1970. It's not a traditional game in the sense of having winners or losers but is instead a fascinating simulation of life and evolution. In this article, we will explore how to implement the Game of Life in JavaScript.

## What is Conway's Game of Life?

The Game of Life takes place on an infinite grid of square cells, each of which can be in one of two states: alive or dead. The game evolves in discrete steps, where the state of each cell is determined by a set of simple rules:

1. **Any live cell with fewer than two live neighbors dies, as if by underpopulation.**
2. **Any live cell with two or three live neighbors lives on to the next generation.**
3. **Any live cell with more than three live neighbors dies, as if by overpopulation.**
4. **Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.**

These rules give rise to intricate patterns, oscillators, and gliders, making it a perfect candidate for a JavaScript project.

## Setting Up the HTML and CSS

To create the Game of Life, we'll start by setting up the HTML structure and some basic CSS for rendering the grid.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <div id="grid-container"></div>
    <button id="start-button">Start</button>
    <button id="stop-button">Stop</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Now, let's add some CSS to style our grid and buttons in a file named `style.css`:

```css
body {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

#grid-container {
  display: grid;
  grid-template-columns: repeat(50, 20px);
  grid-gap: 1px;
}

.cell {
  width: 20px;
  height: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
```

## Implementing the Game Logic in JavaScript

Next, let's create the JavaScript code for our Game of Life simulation. In a file named `script.js`, we will define the core logic for the game.

```javascript
const rows = 50; // Number of rows
const cols = 50; // Number of columns
const cellSize = 20; // Size of each cell in pixels

const gridContainer = document.getElementById('grid-container');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let grid = [];

function createGrid() {
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.addEventListener('click', () => toggleCell(i, j));
      grid[i][j] = {
        element: cell,
        alive: false,
      };
      gridContainer.appendChild(cell);
    }
  }
}

function toggleCell(row, col) {
  grid[row][col].alive = !grid[row][col].alive;
  grid[row][col].element.style.backgroundColor = grid[row][col].alive ? '#000' : '#f0f0f0';
}

function startGame() {
  // Add your game logic here
}

function stopGame() {
  // Add code to stop the game here
}

createGrid();
startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
```

At this point, we've set up the grid and added event listeners to toggle the state of cells when clicked. Now, you need to implement the `startGame` function to apply Conway's rules for the game's evolution.

## Implementing the Game Logic

To implement the game logic and make it evolve over generations, you need to add the following functions:

```javascript
function countLiveNeighbors(row, col) {
  let count = 0;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      if (grid[newRow][newCol].alive) {
        count++;
      }
    }
  }

  return count;
}

function updateGrid() {
  const newGrid = grid.map(row => [...row]);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const liveNeighbors = countLiveNeighbors(i, j);

      if (grid[i][j].alive) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          newGrid[i][j].alive = false;
        }
      } else {
        if (liveNeighbors === 3) {
          newGrid[i][j].alive = true;
        }
      }
    }
  }

  grid = newGrid;

  // Update the grid display
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].element.style.backgroundColor = grid[i][j].alive ? '#000' : '#f0f0f0';
    }
  }
}

let intervalId = null;

function startGame() {
  if (!intervalId) {
    intervalId = setInterval(updateGrid, 100); // Update the grid every 100 milliseconds
  }
}

function stopGame() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}
```

The `countLiveNeighbors` function calculates the number of live neighbors for a given cell, and `updateGrid` applies the rules to create the next generation.

## Conclusion

You have now implemented Conway's Game of Life in JavaScript. This simple yet mesmerizing simulation can produce complex patterns and behaviors, making it a fascinating project for anyone interested in cellular automata, algorithms, or JavaScript programming.

You can further enhance the project by adding additional features, such as clearing the grid, creating custom patterns, or even saving and loading patterns. The possibilities are endless, and the Game of Life provides an excellent platform for creativity and experimentation.

Feel free to experiment with different grid sizes, intervals, and initial