import { View, Text,  Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
        < StatusBar barStyle="light-content"/>
      <Image className="h-full w-full absolute" source={require("../../assets/images/background.png")}/>
      
      {/*  lights*/} 
      <View className="flex-row absolute justify-around w-full">
        <Animated.Image entering={FadeInUp.duration(1000).delay(200).springify()} className="h-[250] w-[95]" source={require("../../assets/images/light.png")}/>
        <Animated.Image entering={FadeInUp.duration(1000).delay(400).springify()} className="h-[170] w-[65]" source={require("../../assets/images/light.png")}/>
      </View>

      {/*  title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/*  title*/}
        <View className="flex items-center">
            <Animated.Text entering={FadeInUp.duration(1400).delay(600).springify()} className="text-white font-bold tracking-wider text-5xl" > Login</Animated.Text>
        </View>
        {/*  form */}
        <View className=" flex items-center mx-4 space-y-4">
            <Animated.View 
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="bg-black/5 p-5 rounded-full w-full">
                <TextInput placeholder='E-mail' placeholderTextColor={'gray'} ></TextInput>
            </Animated.View> 

            <Animated.View 
            entering={FadeInDown.duration(1000).delay(1000).springify()}
            className=" bg-black/5 p-5 rounded-full w-full">
                <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry></TextInput>
            </Animated.View>

            <Animated.View 
            entering={FadeInDown.duration(1000).delay(1200).springify()}
            className="  w-full">
                <TouchableOpacity className='w-full p-3 bg-sky-400 rounded-full'> 
                    <Text className=" text-2xl font-bold text-center text-white"> Login</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View 
            entering={FadeInDown.duration(1000).delay(1400).springify()}
            className='flex-row justify-center'>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push("SignUp")}>
                    <Text className='text-sky-900 font-bold'> SignUp </Text>
                </TouchableOpacity>
            </Animated.View>
        </View> 
      </View>

    </View>
  )
}

export default LoginScreen