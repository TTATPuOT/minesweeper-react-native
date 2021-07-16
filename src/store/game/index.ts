import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {GameInitialState, GameRestart, GameStatuses} from "./types.d";
import {addOpen, restart, setState} from "./actions";
import {CoordinatesType} from "@t/blocks";
import randomInteger from "random-int";
import findCoordinates from "@utils/findCoordinates";
import generateMatrix from "@utils/generateMatrix";
import findInBox from "@utils/findInBox";

const initialState: GameInitialState = {
    mines: [],
    open: [],
    settings: {
        mines: 4,
        size: 4,
    },
    status: GameStatuses.Playing,
    field: [[]]
};

const reducer = createReducer(initialState, {
    [addOpen.type]: (state, action: PayloadAction<CoordinatesType>) => {
        state.open.push(action.payload);
        state.status = GameStatuses.End;
        state.open = generateMatrix(state.settings.size);

        const isMine = state.mines.findIndex(findCoordinates(action.payload));
        if (isMine > -1) {
            state.status = GameStatuses.End;
            state.open = generateMatrix(state.settings.size);
        } else {
        }
    },
    [restart.type]: (state, action: PayloadAction<GameRestart>) => {
        const { payload } = action;
        const minesArray: CoordinatesType[] = [];

        state.status = GameStatuses.Playing;
        state.settings.mines = payload.mines;
        state.settings.size = payload.size;

        const array: number[] = [];
        const maxMines: number = payload.size * payload.size;

        while (array.length < payload.mines) {
            const index = randomInteger(1, maxMines);
            if (!array.includes(index)) array.push(index);
        }

        array.sort();

        for (const index of array) {
            const x = Math.ceil(index / payload.size) - 1;
            const y = index - (payload.size * x) - 1;
            minesArray.push([x, y]);
        }

        state.field = [[]];
        let index = 0;
        for (let x = 0; x < payload.size; x++) {
            state.field[x] = [];
            for (let y = 0; y < payload.size; y++) {
                const mine = minesArray.findIndex(findCoordinates([x, y])) > -1;
                const mines = minesArray.find(findInBox([x, y]))?.length;

                state.field[x][y] = {
                    mine, index,
                    mines: mines ?? 0,
                    open: false,
                    coords: [x, y]
                }
                index++;
            }
        }
    },
    [setState.type]: (state, action: PayloadAction<GameStatuses>) => {
        state.status = action.payload;
    }
});

export default reducer;
