import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount } from './store';
import { Button, Text, View } from 'react-native';

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
