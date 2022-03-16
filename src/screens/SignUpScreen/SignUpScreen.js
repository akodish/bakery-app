import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Text style={styles.title}>CREATE AN ACCOUNT.</Text>

        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
        />
        <CustomInput 
            placeholder="Repeat Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUsePressed}> 
                Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={onPrivacyPressed}> 
                Privacy Policy.
            </Text>
        </Text>

        {/* <SocialSignInButtons /> */}

        <CustomButton 
            text="Have an account? Sign in!" 
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
    logo: {
        width: '100%',
        maxWidth: 500,
        marginBottom: 20,
        height: 100,
        borderWidth: 3,
        borderColor: 'white',
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
});

export default SignUpScreen;