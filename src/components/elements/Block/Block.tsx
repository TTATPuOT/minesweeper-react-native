import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from "react-native";
import {BlockType} from "@store/game/types";
import {addOpen} from "@store/game/actions";
import {useDispatch} from "react-redux";

export interface HiddenBlockProps {
    data: BlockType
}

const Block = (props: HiddenBlockProps) => {
    const dispatch = useDispatch();

    const classes = useMemo<ViewStyle[]>(() => {
        const { data } = props;

        const array: ViewStyle[] = [styles.block];

        if (data.open && !data.mine) array.push(styles.empty);
        else if (/*isOpen && */data.mine) array.push(styles.mine);
        else array.push(styles.hidden);

        return array;
    }, [props.data]);

    const handleClick = useCallback(() => {
        dispatch(addOpen(props.data.coords));
    }, [props.data]);

    return <TouchableOpacity style={classes} onPress={handleClick}>
        <Text style={styles.text}>{props.data.mines}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    block: {
        width: 50,
        height: 50,
        borderRadius: 5,
        margin: 2,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    hidden: {
        backgroundColor: '#FFF',
    },
    mine: {
        backgroundColor: 'pink',
    },
    empty: {
        backgroundColor: 'grey',
    },
    number: {
        backgroundColor: 'grey',
    },
    flag: {},
});

export default Block;
