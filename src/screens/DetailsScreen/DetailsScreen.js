import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export default class DetailsScreen extends React.Component{
    state={
      quantity: 1
    }

    addQuantity = (quantity) => {
      this.setState({quantity: this.state.quantity + 1});
    }

    subtractQuantity = (quantity) => {
      if(this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});        
      }
    }

    render() {
      return(
        <View style={{backgroundColor: '#f7a8a0', height: '100%'}}>
          <ScrollView>
            <View style={{
               flexDirection: 'row',
              alignItems: 'center'
            }}>

              <View style={{width: '90%', height: '40%', marginTop: -150, marginLeft:10}}>
                <TouchableOpacity
                onPress={()=> this.props.navigation.goBack()}
                >
                  <Image
                    source={require('../../images/back_arrow.png')}
                    style={{width: 20, height: 20, marginTop: -20, marginLeft: 10}}
                  />
                </TouchableOpacity>

                {/* ************************* */}

                <View style={{width: "105%", alignItems: "center"}}>
                  <View style={{
                    flexDirection: "row",
                  }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 10,
                        marginLeft: -10
                    }}>Mango Passionfruit Mochi Croissant</Text>
                  </View>
                  <Image
                  source={require('../../images/featured1.jpeg')}
                  style={{marginTop: 20, width: 370, marginLeft: 5}}
                />
                </View>

                {/* ************************* */}
                
                {/* <Image
                  source={require('../../images/featured1.jpeg')}
                  style={{marginTop: 20, width: 370, marginLeft: 10}}
                /> */}
                
              </View>              
            </View>
          </ScrollView>

          <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                backgroundColor: "#933d41",
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 20,
                marginBottom: 20,
              }}
              >
                <TouchableOpacity
                  onPress={this.addQuantity}
                >
                  <Text style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "white"
                  }}>+</Text>
                </TouchableOpacity>

                <Text style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                  color: "white"
                }}>
                  {this.state.quantity}
                </Text>

                <TouchableOpacity
                  onPress={this.subtractQuantity}
                >
                  <Text style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "white",
                  }}>-</Text>
                </TouchableOpacity>
              </View>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 50,
            marginBottom: 30,
            width: 400,
            alignSelf: "center"
          }}>
            <View>
              <Text style={{fontSize: 22, marginTop: -70}}>Flaky croissant filled with mango Passionfruit cream and topped with mango flavored mochi.</Text>            
            </View>

            <View style={{marginTop: 40}}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: -230,
                marginTop: 70,
                backgroundColor: "#933d41",
                width: 90,
                color: "white"
                }}> $6.00</Text>
            </View>

          </View>
        </View>
      )
    }
  }
