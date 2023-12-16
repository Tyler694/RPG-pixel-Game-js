const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

const TILE_SIZE = 64

canvas.width = 16 * TILE_SIZE
canvas.height = 9 * TILE_SIZE

const map = new Image()

displayImage(map, "img/map.png", 0, 0)

function displayImage(image, imageSrc, posx, posy) {
	image.src = imageSrc
	map.onload = () => {
		c.drawImage(image, posx, posy)
	}
}





