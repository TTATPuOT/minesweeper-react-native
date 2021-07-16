import {CoordinatesType} from "@t/blocks";

export const GAME_ADD_OPEN = 'GAME_ADD_OPEN';
export const GAME_RESTART = 'GAME_RESTART';
export const GAME_SET_STATE = 'GAME_SET_STATE';


export interface GameInitialState {
    mines: CoordinatesType[]
    open: CoordinatesType[]
    settings: GameSettings
    status: GameStatuses,
    field: FiledType
}

export type FiledType = [BlockType[]];

export interface BlockType {
    index: number
    mine: boolean
    mines: number
    open: boolean,
    coords: [number, number]
}

export interface GameSettings {
    size: number
    mines: number
}

export interface GameRestart {
    size: number
    mines: number
}

export enum GameStatuses {
    Playing = "PLAYING",
    Win = "WIN",
    End = "END"
}
