import {CoordinatesType} from "@t/blocks";

/**
 * Ищет все клетки внутри "плюса" (сверху, снизу, справа, слева, без горизонтального поиска)
 * @param {CoordinatesType} coords
 */
export default (coords: CoordinatesType) => {
    const array: CoordinatesType[] = [
        [coords[0] + 1, coords[1]],
        [coords[0] - 1, coords[1]],
        [coords[0], coords[1] + 1],
        [coords[0], coords[1] - 1],
    ];

    return (i: CoordinatesType): boolean => array.some(e => i[0] === e[0] && i[1] === e[1])
}
