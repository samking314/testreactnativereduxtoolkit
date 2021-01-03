import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { selectCount, increment } from './../features/counterSlice';

export const Comp = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <View>
            <Button title="PRESS ME" onPress={() => dispatch(increment())} />
            <Text>COUNT: {count}</Text>
        </View>
    )
}
