import React , { useEffect } from "react";
import { View , Text, StatusBar} from "react-native";
import { StackActions } from "@react-navigation/native";

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Home'))
        }, 1000);
      }, [])

    return (
        <View style={{ flex: 1 ,
                    backgroundColor: '#FEEB70',
                    justifyContent: 'center',
                    alignItems: 'center' }}>
            <StatusBar backgroundColor="#FEEB70" />
            <Text style={{ fontFamily: 'Poppins-SemiBold' , fontSize: 35 , color: '#000'}}>ulmo</Text>
        </View>
    )
}

export default SplashScreen