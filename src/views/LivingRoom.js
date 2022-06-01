import React, { useState } from "react"
import { Image, Text, TouchableWithoutFeedback, View , TextInput, ScrollView} from "react-native"

const LivingRoom = ({navigation}) => {
    const [listFurniture] = useState([
        {
            img: require('../assets/categories-furniture/avatar.png'),
            title: 'Furniture'
        },
        {
            img: require('../assets/categories-furniture/avatar1.png'),
            title: 'Lighting'
        },
        {
            img: require('../assets/categories-furniture/avatar2.png'),
            title: 'Rugs'
        },
        {
            img: require('../assets/categories-furniture/avatar3.png'),
            title: 'Mirrors'
        },
        {
            img: require('../assets/categories-furniture/avatar4.png'),
            title: 'Blankets'
        },
        {
            img: require('../assets/categories-furniture/avatar5.png'),
            title: 'Cushions'
        },
        {
            img: require('../assets/categories-furniture/avatar6.png'),
            title: 'Curtains'
        },
        {
            img: require('../assets/categories-furniture/avatar5.png'),
            title: 'Cushions'
        },
        {
            img: require('../assets/categories-furniture/avatar5.png'),
            title: 'Cushions'
        },
        {
            img: require('../assets/categories-furniture/avatar5.png'),
            title: 'Cushions'
        },
    ])

    return (
        <View style={{ backgroundColor: '#ffff', paddingHorizontal: 20, flex: 1 }}>
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                marginBottom: 25
             }}>
                 <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image source={require('../assets/icon/arrow-left.png')} style={{ width: 35 , height : 35 }} />
                 </TouchableWithoutFeedback>
                <View style={{ flexGrow: 1 , alignItems: 'center'}}>
                <Text style={{ 
                        fontFamily: 'Poppins-Regular' , 
                        textAlign: 'center' ,
                        fontSize: 20,
                        color: '#000' }}>Living room</Text>
                </View>
            </View>

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
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                color: '#000',
                fontSize: 26,
                marginBottom: 20
             }}>categories</Text>

             <ScrollView>
                 {
                     listFurniture.map((e, index) => 
                <TouchableWithoutFeedback key={index} onPress={() => e.title === 'Furniture' ? navigation.navigate('Furniture') : false}>
                 <View style={{ 
                     flexDirection: 'row',
                     alignItems: 'center',
                     marginBottom: 30
                  }}>
                     <Image source={e.img} style={{ width: 45, height: 45, marginRight: 15 }} />
                     <Text style={{ 
                         fontFamily: 'Poppins-Regular',
                         color: '#000',
                         fontSize: 18
                      }}>{e.title}</Text>
                 </View>
                </TouchableWithoutFeedback>
                    )
                 }
             </ScrollView>
        </View>
    )
}

export default LivingRoom