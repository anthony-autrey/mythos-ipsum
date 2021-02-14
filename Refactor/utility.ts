export class Utility {
    public static getRandomInt(min: number, max: number) {
        let rand = Math.random() * (max - min) + min;
        let rounded = Math.round(rand);
        return rounded;
    }
}

