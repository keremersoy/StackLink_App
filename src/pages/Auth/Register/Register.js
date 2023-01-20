import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Styles from './Register.style.js';
import api from '../../../api.js';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isShowPassword, setisShowPassword] = useState(false);

  const click_register = () => {
    console.log(name,username,password,email);
    api
      .post('/auth/register', {name:name,username: username, password: password,email:email})
      .then(response => {
        if (response.status == 200) {
          navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const click_login = () => {
    navigation.replace('Login');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.body_container}>
      <Text style={Styles.header}>
            Kayıt
        </Text>
        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>İsim</Text>
          <TextInput style={Styles.text_input} onChangeText={text => setName(text)}placeholder="İsminiz" />
        </View>

        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>Kullanıcı Adı</Text>
          <TextInput style={Styles.text_input} onChangeText={text => setUsername(text)} placeholder="Kullanıcı Adı" />
        </View> 
        
        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>E-mail</Text>
          <TextInput style={Styles.text_input} onChangeText={text => setEmail(text)} placeholder="E-mail" />
        </View>

        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>Parola</Text>
          <TextInput
            style={Styles.text_input}
            placeholder="Parola"
            onChangeText={text => setPassword(text)}
            secureTextEntry={!isShowPassword}
          />
        </View>

        <View style={Styles.checkbox_container}>
            <Text style={Styles.text_checkbox}>Parolayı göster</Text>
          <BouncyCheckbox
            unfillColor="#E6DDC4"
            fillColor="#678983"
            onPress={setisShowPassword}
            style={Styles.checkbox_show_password}
          />
        </View>

        <View style={Styles.btns_container}>
          <TouchableOpacity
            style={Styles.btn_register}
            onPress={click_register}>
            <Text style={Styles.btn_register_text}>Kaydol</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.btn_login} onPress={click_login}>
          <Text style={Styles.btn_login_text}>Zaten bir hesabınız var mı?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
