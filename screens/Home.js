import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const Home=({navigation})=> {
    return(
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button 
            title='Go to the Details page'
            onPress={()=>navigation.navigate("Details")}
            />
                        <Button 
            title='Go to the About page'
            onPress={()=>navigation.navigate("About")}
            />
        </View>
    )
}

export default Home;