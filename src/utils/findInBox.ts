import {CoordinatesType} from "@t/blocks";

/**
 * Ищет все клетки внутри квадрата
 * @param {CoordinatesType} coords
 */
export default (coords: CoordinatesType) =>
    (i: CoordinatesType): boolean =>
        (i[0] >= coords[0] - 1 && i[0] <= coords[0] + 1) && (i[1] >= coords[1] - 1 && i[1] <= coords[1] + 1)
