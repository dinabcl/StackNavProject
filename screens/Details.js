import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const Details=({navigation})=> {
    return(
        <View>
            <Text>Welcome to Details Screen</Text>
            <Button 
            title='Go to the other page'
            onPress={()=>navigation.navigate("Home")}
            />
                        <Button 
            title='Go to the About page'
            onPress={()=>navigation.navigate("About")}
            />
        </View>
    )
}

export default Details;