import React, { useState } from "react"
import { View, Text , TouchableWithoutFeedback , Image , TextInput, ScrollView} from "react-native"

const Furniture = ({navigation}) => {
    const [listFurniture] = useState([
        {
            img: require('../assets/asset-furnitures/pic.png'),
            price: '$150.00',
            desc: 'Wooden bedside table featuring a raised desi...'
        },
        {
            img: require('../assets/asset-furnitures/pic1.png'),
            price: '$149.99',
            desc: 'Chair made of ash wood sourced from responsib...'
        },
        {
            img: require('../assets/asset-furnitures/pic2.png'),
            price: '$690.00',
            desc: 'Wooden bedside table featuring a raised desi...'
        },
        {
            img: require('../assets/asset-furnitures/pic3.png'),
            price: '$150.00',
            desc: 'Wooden bedside table featuring a raised desi...'
        },
        {
            img: require('../assets/asset-furnitures/pic3.png'),
            price: '$150.00',
            desc: 'Wooden bedside table featuring a raised desi...'
        },
        {
            img: require('../assets/asset-furnitures/pic.png'),
            price: '$150.00',
            desc: 'Wooden bedside table featuring a raised desi...'
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
                        color: '#000' }}>Furniture</Text>
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

            <View style={{ flexDirection: 'row' , justifyContent: 'space-between' , marginBottom: 25}}>
                <View style={{ 
                    flexDirection : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F5F5F5',
                    width: '47%',
                    paddingVertical: 10,
                    borderRadius: 8
                 }}>
                    <Text style={{ 
                        fontFamily: 'Poppins-Medium',
                        color: '#000',
                        fontSize: 18,
                        marginRight: 10
                     }}>Sort</Text>
                    <Image source={require('../assets/icon/sort.png')} />
                </View>
                <View style={{ 
                    flexDirection : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F5F5F5',
                    width: '47%',
                    paddingVertical: 10,
                    borderRadius: 8
                 }}>
                    <Text style={{ 
                        fontFamily: 'Poppins-Medium',
                        color: '#000',
                        fontSize: 18,
                        marginRight: 10
                     }}>Filter</Text>
                    <Image source={require('../assets/icon/filter.png')} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    listFurniture.map((e,index) => 
                <View key={index} style={{ width: '47%' , marginBottom: 25}}>
                    <Image source={e.img} style={{ width: '100%', height: 250, marginBottom: 10, borderRadius: 10 }} />
                    <View style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5
                     }}>
                        <Text style={{ 
                            fontFamily: 'Poppins-regular',
                            color: '#000',
                            fontSize: 18
                         }}>{e.price}</Text>
                        <Image source={require('../assets/icon/favorit.png')} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Light' }}>{e.desc}</Text>
                </View>
                    )
                }
                </View>
            </ScrollView>

        </View>
    )
}

export default Furniture