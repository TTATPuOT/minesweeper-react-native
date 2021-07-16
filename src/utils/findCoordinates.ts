import {CoordinatesType} from "@t/blocks";

/**
 * Ищет полное сходство координат
 * @param {CoordinatesType} coords
 */
export default (coords: CoordinatesType) =>
    (i: CoordinatesType): boolean =>
        i[0] === coords[0] && i[1] === coords[1];
