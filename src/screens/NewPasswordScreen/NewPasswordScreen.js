import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn("onSubmitPressed");
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');

    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Text style={styles.title}>RESET YOUR PASSWORD.</Text>

        <Text style={styles.headings}>Confirmation Code *</Text>
        <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode} 
        />

        <Text style={styles.headings}>Password *</Text>
        <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword} 
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton 
            text="Back to Sign In" 
            onPress={onSignInPress} 
            type="TERTIARY" 
        />
    </View> 
    </ScrollView>
  ); 
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7a8a0',
        height: 700,
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: '#933d41',
        margin: 10,
    },
    text: {
        color: 'white',
        marginVertical: 10,
    },
    link: {
        color: '#a8516e',
    },
    headings: {
        marginRight: 'auto',
        color: 'white',
        marginTop: 10,
    }
});

export default NewPasswordScreen;