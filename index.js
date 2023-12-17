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
	velocity: {
		x: 0,
		y: 0
		
	}
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

displayBoundaries()

function displayBoundaries() {
	for (i=0;i=boundariesData.length;i+32) {
		for(j=0;j=32;i++) {
			if(Element == 21) {
				console.log("boundary found")
			}
		}
	}
}

function movement() {
	if (keys.w.pressed) {
		player.velocity.y = 4
	}
	if (keys.s.pressed) {
		player.velocity.y = -4
	}
	if (keys.a.pressed) {
		player.velocity.x = 4
	}
	if (keys.d.pressed) {
		player.velocity.x = -4
	}
	MapS.x += player.velocity.x
	MapS.y += player.velocity.y
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
			player.velocity.y = 0
			break
		case "s":
			keys.s.pressed = false
			player.velocity.y = 0
			break
		case "a":
			keys.a.pressed = false
			player.velocity.x = 0
			break
		case "d":
			keys.d.pressed = false
			player.velocity.x = 0
			break
	}
})

mainLoop()