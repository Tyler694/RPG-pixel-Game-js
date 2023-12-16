const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

const TILE_SIZE = 64

canvas.width = 16 * TILE_SIZE
canvas.height = 9 * TILE_SIZE

player = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	width: TILE_SIZE,
	height: TILE_SIZE,
	velocityX: 0,
	velocityY: 0
}

MapS = {
	x: 0,
	y: 0
}

keys = {
	w: {
		pressed: false
	},
	s: {
		pressed: false
	},
	a: {
		pressed: false
	},
	d: {
		pressed: false
	}
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
	const Player = new Sprite(player.x, player.y, player.width,player.height)
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
	displayImage(map, "img/rpg map.png", MapS.x, MapS.y)
}

function movement() {
	if (keys.w.pressed) {
		player.velocityY = 4
	}
	if (keys.s.pressed) {
		player.velocityY = -4
	}
	if (keys.a.pressed) {
		player.velocityX = 4
	}
	if (keys.d.pressed) {
		player.velocityX = -4
	}
	MapS.x += player.velocityX
	MapS.y += player.velocityY
}

window.addEventListener("keydown", () => {
	switch(event.key) {
		case "w":
			keys.w.pressed = true
			break
		case "s":
			keys.s.pressed = true
			break
		case "a":
			keys.a.pressed = true
			break
		case "d":
			keys.d.pressed = true
			break
	}
})

window.addEventListener("keyup", () => {
	switch(event.key) {
		case "w":
			keys.w.pressed = false
			player.velocityY = 0
			break
		case "s":
			keys.s.pressed = false
			player.velocityY = 0
			break
		case "a":
			keys.a.pressed = false
			player.velocityX = 0
			break
		case "d":
			keys.d.pressed = false
			player.velocityX = 0
			break
	}
})


mainLoop()