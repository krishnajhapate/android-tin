import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen />
       </Stack.Navigator>
    )
}

export default StackNavigator
