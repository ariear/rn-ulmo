import React from "react"
import { Image, ScrollView, Text, View, TextInput } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

const Bag = () => {
    return (
        <ScrollView style={{ paddingHorizontal: 20, backgroundColor: '#fff' }}>
            <Text style={{ 
                fontFamily: 'Poppins-Medium',
                fontSize: 30,
                color: '#000',
                paddingTop: 50,
                marginBottom: 30
             }} >bag</Text>

             <View style={{ marginBottom: 30 }}>
                 <View style={{ 
                     flexDirection: 'row',
                     marginBottom: 30
                  }} >
                     <Image source={require('../../assets/asset-furnitures/pic2.png')} style={{ width: 160 }} />
                     <View style={{ width: '62%', paddingLeft: 10, justifyContent: 'space-between' }}>
                         <Text style={{ 
                             fontFamily: 'Poppins-Regular',
                             color: '#000',
                             fontSize: 19
                          }}>$150.00</Text>
                          <Text style={{ 
                              fontFamily: 'Poppins-Light'
                           }}>Square Wooden bedside table featuring a raised design sandaran</Text>
                           <View style={{ 
                               backgroundColor: '#F5F5F5',
                               borderRadius: 6,
                               flexDirection: 'row',
                               alignItems: 'center',
                               alignSelf: 'baseline',
                               paddingHorizontal: 30,
                               paddingVertical: 10
                            }}>
                                <FontAwesome5 name="minus" color="#000"></FontAwesome5>
                                <Text style={{ 
                                    fontFamily: 'Poppins-Medium',
                                    marginHorizontal: 10
                                 }}>1</Text>
                                <FontAwesome5 name="plus" color="#000"></FontAwesome5>
                           </View>
                           <View style={{ position: 'absolute', top: 0, right: 5 }}>
                           <FontAwesome5 name="times-circle" size={20} ></FontAwesome5>
                           </View>
                     </View>
                 </View>
                 <View style={{ 
                     flexDirection: 'row'
                  }} >
                     <Image source={require('../../assets/asset-furnitures/pic.png')} style={{ width: 160 }} />
                     <View style={{ width: '62%', paddingLeft: 10, justifyContent: 'space-between' }}>
                         <Text style={{ 
                             fontFamily: 'Poppins-Regular',
                             color: '#000',
                             fontSize: 19
                          }}>$280.00</Text>
                          <Text style={{ 
                              fontFamily: 'Poppins-Light'
                           }}>Wooden bedside table featuring a raised design sandaran</Text>
                           <View style={{ 
                               backgroundColor: '#F5F5F5',
                               borderRadius: 6,
                               flexDirection: 'row',
                               alignItems: 'center',
                               alignSelf: 'baseline',
                               paddingHorizontal: 30,
                               paddingVertical: 10
                            }}>
                                <FontAwesome5 name="minus" color="#000"></FontAwesome5>
                                <Text style={{ 
                                    fontFamily: 'Poppins-Medium',
                                    marginHorizontal: 10
                                 }}>2</Text>
                                <FontAwesome5 name="plus" color="#000"></FontAwesome5>
                           </View>
                           <View style={{ position: 'absolute', top: 0, right: 5 }}>
                           <FontAwesome5 name="times-circle" size={20}></FontAwesome5>
                           </View>
                     </View>
                 </View>
             </View>
             
             <Text style={{ 
                fontFamily: 'Poppins-Medium',
                fontSize: 30,
                color: '#000',
                marginBottom: 20
             }} >promocode</Text>

        <View style={{ flexDirection: 'row' , 
                    alignItems: 'center', 
                    backgroundColor: '#F5F5F5' , 
                    paddingVertical: 10,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginBottom: 25}}>
        <TextInput 
            placeholder="fill coupon"
            style={{ 
                width: '90%',
                marginLeft: 10,
                fontFamily: 'Poppins-Regular'
            }} />
            <FontAwesome5 name="times" size={15} />
      </View>

      <View style={{ 
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 25
       }}>
          <View>
              <Text style={{ 
                  fontFamily: 'Poppins-Medium',
                  color: '#000',
                  fontSize: 25
               }}>total</Text>
              <Text style={{ 
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16
               }}>Promocode</Text>
          </View>
          <View>
              <Text style={{ 
                    fontFamily: 'Poppins-Medium',
                    color: '#000',
                    fontSize: 25
               }}>$ 420,50</Text>
              <Text style={{ 
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16
               }}>-$25,00</Text>
          </View>
      </View>

      <View style={{ 
          backgroundColor: '#FEE440',
          borderRadius: 7,
          paddingVertical: 18,
          marginBottom: 40
       }}>
          <Text style={{ 
              fontFamily: 'Poppins-Regular',
              color: '#000',
              fontSize: 18,
              textAlign: 'center'
           }}>Checkout</Text>
      </View>

        </ScrollView>
    )
}

export default Bag