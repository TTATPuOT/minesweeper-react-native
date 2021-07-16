import {CoordinatesType} from "@t/blocks";

export default (size: number): CoordinatesType[] => {
    const array: CoordinatesType[] = [];

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            array.push([x, y]);
        }
    }

    return array;
}
