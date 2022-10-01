export {};


const getNum0a255 = (): number => Math.floor(Math.random() * 255);

class Color{
    get():string{
        const color: string = `rgb(${getNum0a255}, ${getNum0a255}, ${getNum0a255})`
        return color;
    }
}




const color1: Color = new Color();
console.log(color1.get());