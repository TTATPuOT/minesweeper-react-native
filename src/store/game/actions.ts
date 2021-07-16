import {createAction} from "@reduxjs/toolkit";
import {GAME_ADD_OPEN, GAME_RESTART, GAME_SET_STATE, GameRestart, GameStatuses} from "./types.d";
import {CoordinatesType} from "@t/blocks";

export const addOpen = createAction<CoordinatesType>(GAME_ADD_OPEN);

export const restart = createAction<GameRestart>(GAME_RESTART);

export const setState = createAction<GameStatuses>(GAME_SET_STATE);
