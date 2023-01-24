import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Styles from './EditProfile.style';
import api from '../../../api.js';
import Header from '../../../components/Header';
import {fetchUserData} from '../../../redux/user';
import {launchImageLibrary} from 'react-native-image-picker';
import { toFormData } from 'axios';

//TODO: foto ekleme işlemleri
const EditProfile = props => {
  const token = useSelector(state => state.user.token);

  const dispatch = useDispatch();

  const {user} = props.route.params;
  const {navigation} = props;
  const [img, setImg] = useState(user?.img);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [github, setGithub] = useState(user?.github);

  const launch_image_library = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(
      options,
      response => {
        try {
          //console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            console.log('response', JSON.stringify(response));
            setImg(response.assets[0].uri);
          }
        } catch (e) {
          console.log(e);
        }
      },
    );
  };

  const btn_cancel = () => {
    navigation.goBack();
  };

  const uploadImage = async () => {
    const profilePhoto = {
      name: new Date() + '_profile',
      uri: img,
      type: 'image/jpeg',
    };
    const formData = new FormData();
    formData.append('profile', profilePhoto);
    const data=toFormData(profilePhoto);
    console.log('formdata: ', data);
    try {
      const res = await api.post(
        '/image/upload/profile',
       {...data},
        {
          headers: {
            Accept: 'application/json',
            "Content-Type": 'multipart/form-data',
            Authorization: 'bearer ' + token,
          },
        },
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const btn_save = () => {
   /* if (img != user.img) {
      uploadImage();
    }*/

    const tempUser = {};
    tempUser.name = name;
    tempUser.email = email;
    tempUser.github = github;
    api
      .put(
        'user/update/' + user._id,
        {data: tempUser},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200 && response.data.success) {
          ToastAndroid.show('Düzenleme kaydedildi.', ToastAndroid.SHORT);
          navigation.goBack();
        }
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('Bir hata oluştu!\n' + err, ToastAndroid.SHORT);
      });
    dispatch(fetchUserData(token));
  };

  return (
    <View style={Styles.container}>
      <Header navigation={navigation} type={0} />
      <View style={Styles.body_container}>
        {/*
          <TouchableOpacity
          style={Styles.text_input_container}
          onPress={launch_image_library}>
          {img != '' ? (
            <Image
              style={Styles.image}
              source={{uri: img}}
              resizeMethod="scale"
            />
          ) : (
            <Image style={Styles.image} />
          )}
          </TouchableOpacity>*/}
          <Text style={Styles.title}>Profili Düzenle</Text>
        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>İsim</Text>
          <TextInput
            style={Styles.text_input}
            onChangeText={text => setName(text)}
            value={name}
            placeholder="İsminiz"
          />
        </View>
        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>E-mail</Text>
          <TextInput
            style={Styles.text_input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="E-mail"
          />
        </View>
        <View style={Styles.text_input_container}>
          <Text style={Styles.text}>Github</Text>
          <TextInput
            style={Styles.text_input}
            value={github}
            placeholder="Github"
            onChangeText={text => setGithub(text)}
          />
        </View>
        <View style={Styles.btns_container}>
          <TouchableOpacity
            style={Styles.btn_cancel_container}
            onPress={btn_cancel}>
            <Text style={Styles.btn_text}>İptal Et</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.btn_save_container}
            onPress={btn_save}>
            <Text style={Styles.btn_text}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
