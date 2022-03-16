import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/toimoi.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        // validate user

        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.23}]}
            resizeMode="contain"
        />

        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
        />

        <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY" 
        />

        {/* <SocialSignInButtons /> */}

        <CustomButton 
            text="Don't have an account? Create one!" 
            onPress={onSignUpPress} 
            type="TERTIARY" 
            style={styles.create}
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
    logo: {
        width: '100%',
        maxWidth: 500,
        marginBottom: 20,
        height: 100,
        borderWidth: 3,
        borderColor: 'white',
    }
});

export default SignInScreen;