import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Styles from './EditProfile.style';
import api from '../../../api.js';
import Header from '../../../components/Header';
//TODO: foto ekleme işlemleri
const EditProfile = (props) => {
  const token = useSelector(state => state.user.token);

  const {user} = props.route.params;
  const {navigation}=props;
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [github, setGithub] = useState(user?.github);

  const btn_cancel = () => {
    navigation.goBack();
  };
  const btn_save = () => {
    const tempUser={};
    tempUser.name=name;
    tempUser.email=email;
    tempUser.github=github;
    api
      .put(
        'user/update/'+user._id,
        {data:tempUser},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200 && response.data.success) {
          navigation.goBack();
        }
      })
      .catch(err => {
        console.log(err);
      });

  };

  return (
    <View style={Styles.container}>
    <Header navigation={navigation} type={0}/>
      <View style={Styles.body_container}>
        <TouchableOpacity style={Styles.text_input_container}>
          <Image style={Styles.image} />
        </TouchableOpacity>
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
