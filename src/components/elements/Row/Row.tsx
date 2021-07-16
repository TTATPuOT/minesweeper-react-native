import React, {useMemo} from 'react';
import Block from "@elements/Block";
import {StyleSheet, View} from "react-native";
import {BlockType} from "@store/game/types";

export interface RowProps {
    blocks: BlockType[]
}

const Row = (props: RowProps) => {
    const blocks = useMemo<JSX.Element[]>(() => {
        return props.blocks.map(block => <Block data={block} key={block.index} />)
    }, [props.blocks]);

    return <View style={styles.row}>{blocks}</View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
});

export default Row;
