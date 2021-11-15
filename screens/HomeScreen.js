import React from 'react'
import { View, Text, Button } from 'react-native'
import tailwind from 'tailwind-rn'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={tailwind("bg-black")} >
            <Text>Home Screen</Text>
            <Button title="Go to chat screen " onPress={() => navigation.navigate("Chat")} />
        </View>
    )
}

export default HomeScreen
