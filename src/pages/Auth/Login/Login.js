import React, {useState} from 'react';
import {View, Text, TextInput,ToastAndroid, TouchableOpacity} from 'react-native';
import Styles from './Login.style.js';
import api from '../../../api.js';
import {login} from '../../../redux/user';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const click_login = () => {
    let info = {};
    api
      .post('/auth/login', {username: username, password: password})
      .then(response => {
        if (response.status == 200) {
          info = {
            accessToken: String(response.data.accessToken) || '',
            userId: String(response.data.userId) || '',
          };
          dispatch(login(info));
          navigation.replace('Menu');
        }
      })
      .catch(err => {
        ToastAndroid.show('Kullanıcı adınızı ve parolanızı doğru girdiğinizden emin olun.'+err, ToastAndroid.SHORT);
        return err;
      });
  };

  const click_register = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.body_container}>
        <Text style={Styles.header}>Giriş</Text>

        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>Kullanıcı Adı</Text>
          <TextInput
            style={Styles.text_input}
            onChangeText={text => setUsername(text)}
            placeholder="Kullanıcı Adı"
          />
        </View>

        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>Parola</Text>
          <TextInput
            style={Styles.text_input}
            placeholder="Parola"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={Styles.btns_container}>
          <TouchableOpacity style={Styles.btn_login} onPress={click_login}>
            <Text style={Styles.btn_login_text}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={Styles.btn_register} onPress={click_register}>
          <Text style={Styles.btn_register_text}>
            Henüz bir hesabınız yok mu?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
