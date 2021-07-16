import React, {useCallback, useEffect, useMemo} from 'react';
import Row from "@elements/Row";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import {restart} from "@store/game/actions";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FiledType, GameStatuses} from "@store/game/types";

const Field = () => {
    const dispatch = useDispatch();

    const status = useSelector<RootState, GameStatuses>(state => state.game.status);
    const field = useSelector<RootState, FiledType>(state => state.game.field);

    useEffect(() => {
        handleRestart();
    }, []);

    const handleRestart = useCallback(() => {
        dispatch(restart({ size: 7, mines: 8 }));
    }, []);

    const rows = useMemo<JSX.Element[]>(() => {
        return field.map((row, index) => <Row blocks={row} key={index} />)
    }, [field]);

    return <>
        <TouchableOpacity onPress={handleRestart} style={styles.restart}>
            <Text>Restart</Text>
        </TouchableOpacity>
        <Text>{status}</Text>
        <View>
            {rows}
        </View>
    </>
}

const styles = StyleSheet.create({
    restart: {
        width: '100%',
        height: 20,
        backgroundColor: 'gold',
        marginBottom: 50
    }
});

export default Field;
