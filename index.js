const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

const TILE_SIZE = 64

canvas.width = 16 * TILE_SIZE
canvas.height = 9 * TILE_SIZE

player = {
	x: 0,
	y: 0,
	width: TILE_SIZE,
	height: TILE_SIZE,
	velocityX: 0,
	velocityY: 0
}

class Sprite {
	constructor(x,y,width,height) {
		this.x = x
		this.y = y
		this.width = width 
		this.height = height
	}
	draw() {
		c.fillStyle = "red"
		c.fillRect(this.x,this.y,this.width,this.height)
	}
}

function PlayerFunction() {
	const Player = new Sprite(player.x,player.y,player.width,player.height)
	Player.draw()
	drawMap()
	movement()
}

function displayImage(image, imageSrc, posx, posy) {
	image.src = imageSrc
	image.onload = () => {
		c.drawImage(image, posx, posy)
	}
}

function mainLoop() {
	PlayerFunction()
	window.requestAnimationFrame(mainLoop)
}

function drawMap() {
	const map = new Image()
	displayImage(map, "img/map.png", 0, 0)
}

function movement() {
	player.x += player.velocityX
	player.y += player.velocityY
}

window.addEventListener("keydown", () => {
	switch(event.key) {
		case "w":
			player.velocityY = -4
			break
		case "s":
			player.velocityY = 4
			break
		case "a":
			player.velocityX = -4
			break
		case "d":
			player.velocityX = 4
			break
	}
})

window.addEventListener("keyup", () => {
	switch(event.key) {
		case "w":
			player.velocityY = 0
			break
		case "s":
			player.velocityY = 0
			break
		case "a":
			player.velocityX = 0
			break
		case "d":
			player.velocityX = 0
			break
	}
})


mainLoop()