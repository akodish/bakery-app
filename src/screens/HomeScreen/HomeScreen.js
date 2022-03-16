import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import Icon from '@expo/vector-icons/Entypo';
import ProductScreen from '../ProductScreen';
import NewPasswordScreen from '../NewPasswordScreen';
import DetailsScreen from '../DetailsScreen';
import { RectButton } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

export default class HomeScreen extends React.Component{

  state={
    area: "Fairfax, Virginia"
  }
  render() {
    return(
      <ScrollView style={{backgroundColor: '#f7a8a0'}}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: 25
        }}>
          <View style={{width: '10%'}}> 
            <Image
              source={require('../../images/menu.png')}
              style={{width: 30, height: 30, marginTop: 0}}
            />
          </View>
          <View style={{
            width: '90%',
            alignItems: 'center',

          }}>
            <Picker
              selectedValue={this.state.area}
              style={{height:50, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({area: itemValue})
              }
            >
              <Picker.Item
                label="Fairfax, Virginia"
                value="Fairfax, Virginia"
                style={{fontWeight: 'bold'}}
              />
              <Picker.Item
                label="Washington, D.C."
                value="Washington, D.C."
                style={{fontWeight: 'bold'}}
              />
            </Picker>
          </View>
          
          <View style={{width: '10%'}}>
            {/* <Icon name="magnifying-glass" size={30} /> */}
          </View>
        </View>

        <View style={{
          paddingHorizontal: 20,
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white'
          }}>HOME OF</Text>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#933d41'
          }}>CROISSANT</Text>
        </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 30}}
          >

            {/* LIST 1 */}

            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#cc858a',
              marginHorizontal: 20,
              borderRadius: 10,
              paddingVertical: 0,
              width: 170
              }}>

              <Image
                source={require('../../images/featured_icon.jpeg')}
                style={{height: 50, width: 50, marginLeft: 10, marginTop: 10}}
              />

             <Text style={{
               fontWeight: 'bold',
               fontSize: 18,
               color: 'white',
               marginLeft: 10
             }}>
               FEATURED
             </Text>
             </View>

            {/* LIST 2 */}

            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#933d41',
              marginHorizontal: -5,
              borderRadius: 10,
              paddingVertical: 5,
              width: 170
            }}>

              <Image
                source={require('../../images/popular_icon.jpeg')}
                style={{height: 60, width: 60, marginTop: -15, marginLeft: 10}}
              />

             <Text style={{
               fontWeight: 'bold',
               fontSize: 18,
               color: 'white',
               marginLeft: 0
             }}>
               POPULAR
             </Text>
             </View>

             {/* LIST 3 */}

             <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#933d41',
              marginHorizontal: 20,
              borderRadius: 10,
              paddingVertical: 5,
              width: 170
              }}>

              <Image
                source={require('../../images/all_icon.jpeg')}
                style={{height: 50, width: 50, marginLeft: 17}}
              />

             <Text style={{
               fontWeight: 'bold',
               fontSize: 18,
               color: 'white',
               marginLeft: -5
             }}>
               ALL ITEMS
             </Text>
             </View>

          </ScrollView>
             <View style={{
               alignItems: 'center',
               marginHorizontal: 20,
               flexDirection: 'row',
               marginTop: 30
             }}>
               <View style={{
                 width: '80%'
               }}>
                 <Text style={{
                   fontSize: 22,
                   fontWeight: 'bold',
                 }}>FEATURED TREATS</Text>
               </View>
               <View style={{
                 width: '50%',
                 alignItems: 'flex-end'
               }}>
                {/* <Icon
                name="dots-three-horizontal"
                size={25}
                color='#848385
                /> */}
               </View>
             </View>

             <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 20,
             }}>

              <ProductScreen
                image={require('../../images/featured1.jpeg')}
                title='Mango Passionfruit Mochi Croissant'
                price='6.00'
                onPress={() => this.props.navigation.navigate('DetailsScreen')}
              />

              <ProductScreen
                image={require('../../images/featured2.jpeg')}
                title='Strawberry Custard Danish'
                price='4.75'
                onPress={() => this.props.navigation.navigate('DetailsScreen')}
              />
              </View>

              <View style={{
               flexDirection: 'row',
               marginHorizontal: 15,
               marginTop: 5,
             }}>
        
              <ProductScreen
                image={require('../../images/featured3.jpeg')}
                title='Pistachio Rose Almond Croissant'
                price='5.50'
                onPress={() => this.props.navigation.navigate('DetailsScreen')}
              />
            
              <ProductScreen
                image={require('../../images/featured4.jpeg')}
                title='Ferrero Rocher Croissant'
                price='6.00'
                onPress={() => this.props.navigation.navigate('DetailsScreen')}
              />
             </View>
      </ScrollView>
    )
  }
}