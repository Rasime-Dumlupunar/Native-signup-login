import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const SignUpScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='w-full h-full bg-white'>
      < StatusBar barStyle="light-content"/>
       <Image className= "h-full w-full absolute" source={require("../../assets/images/background.png")}></Image>
       
       <View className="flex-row justify-around absolute w-full">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()}className=" h-[250] w-[95]" source={require("../../assets/images/light.png")}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className=" h-[170] w-[65]" source={require("../../assets/images/light.png")}/>
       </View>

       <View className="w-full h-full flex justify-around pt-40 pb-10 pr-5 pl-5">
            <View className='flex items-center'>
                <Animated.Text entering={FadeInUp.duration(600).delay(400).springify()} className='font-bold text-white tracking-wider pt-10 text-5xl'> Sign Up </Animated.Text>
            </View>

            <View className='flex items-center mt-4 space-y-4'>
                <Animated.View 
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className='bg-black/5 p-5 rounded-full w-full'>
                    <TextInput  placeholder='Username' placeholderTextColor={'gray'}></TextInput>
                </Animated.View>

                <Animated.View 
            entering={FadeInDown.duration(1000).delay(1000).springify()}
            className='bg-black/5 p-5 rounded-full w-full'>
                    <TextInput placeholder='E-mail' placeholderTextColor={'gray'}></TextInput>
                </Animated.View>

                <Animated.View 
            entering={FadeInDown.duration(1000).delay(1200).springify()} className='bg-black/5 p-5 rounded-full w-full'>
                    <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry></TextInput>
                </Animated.View>

                <Animated.View 
            entering={FadeInDown.duration(1000).delay(1400).springify()} className='w-full'>
                    <TouchableOpacity className='bg-sky-400 rounded-full w-full p-3' >
                    <Text className='font-bold text-xl text-center text-white'> Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View 
            entering={FadeInDown.duration(1000).delay(1600).springify()} className='flex-row justify-center'>
                    <Text> Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push("Login")}>
                    <Text className='font-bold text-sky-700'> Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
      
   
  )
}

export default SignUpScreen;