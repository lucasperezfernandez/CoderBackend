const getNum0a255 = () => Math.floor(Math.random() * 256);

class Color {
    getRandomColor(){
        const color = `rgb(${getNum0a255}, ${getNum0a255}, ${getNum0a255})`
        return color;
    }
}

module.exports = Color;