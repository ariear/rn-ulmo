import React, { useState } from "react"
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"

const Home = ({navigation}) => {
  const [room] = useState([
    {
      img: require('../assets/pic5.png'),
      title: 'living room'
    },
    {
      img: require('../assets/pic4.png'),
      title: 'bedroom'
    },
    {
      img: require('../assets/pic6.png'),
      title: 'coffe room'
    },
    {
      img: require('../assets/pic7.png'),
      title: 'kitchen'
    },
    {
      img: require('../assets/pic4.png'),
      title: 'brutal room'
    },
  ])

  const [datahorizontal] = useState([
    {
      img: require('../assets/pic.png'),
      title: 'best of 2020'
    },
    {
      img: require('../assets/pic1.png'),
      title: 'the golden hour'
    },
    {
      img: require('../assets/pic2.png'),
      title: 'lovely kitchen'
    },
    {
      img: require('../assets/pic3.png'),
      title: 'summer choice'
    },
    {
      img: require('../assets/pic4.png'),
      title: 'afa yah?'
    }
  ])

  return (
    <ScrollView style={{ backgroundColor: '#ffff' , paddingHorizontal: 20}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
      <Text style={styles.title}>ulmo</Text>
      
      <View style={{ flexDirection: 'row' , 
                    alignItems: 'center', 
                    backgroundColor: '#F5F5F5' , 
                    paddingVertical: 10,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginBottom: 25}}>
        <Image source={require('../assets/icon/search.png')} />
        <TextInput 
            placeholder="Search"
            style={{ 
              width: '90%',
              marginLeft: 10,
              fontFamily: 'Poppins-Regular'
             }} />
      </View>
      
      <ScrollView horizontal={ true } showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
        {
          datahorizontal.map((e, index) => 
      <ImageBackground key={index} source={e.img} 
                      style={{ 
                          width: 120 ,
                          height: 120 , 
                          borderRadius: 10,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          padding: 10,
                          marginRight: 15 }}>
        <Text style={{ fontFamily : 'Poppins-Medium', color: 'white', fontSize: 18}}>{e.title}</Text>
      </ImageBackground>
          )
        }
      </ScrollView>

      <View>
        {
          room.map((e,index) => 
        <TouchableWithoutFeedback key={index} onPress={() => e.title === 'living room' ? navigation.navigate('LivingRoom') : false}>
        <View style={{ 
            borderRadius: 10,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            marginBottom: 20
         }}>
          <Text style={{ 
            fontFamily: 'Poppins-Medium',
            fontSize: 25,
            color: '#000',
            padding: 15
           }}>{e.title}</Text>
           <Image source={e.img} style={{ width: 120, height: 150 }} />
        </View>
        </TouchableWithoutFeedback>
          )
        }
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title:{
    fontFamily: 'Poppins-Medium', 
    fontSize: 34 , 
    textAlign: 'center' , 
    color: 'black',
    paddingTop: 40,
    marginBottom: 20
  }
})

export default Home