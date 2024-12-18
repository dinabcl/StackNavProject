import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const About=({navigation})=> {
    return(
        <View>
            <Text>Welcome to About Screen</Text>
            <Button 
            title='Go to the Home page'
            onPress={()=>navigation.navigate("Home")}
            />
            <Button 
            title='Go to the Details page'
            onPress={()=>navigation.navigate("Details")}
            />

        </View>
    )
}

export default About;