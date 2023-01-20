import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, TextInput} from 'react-native';
import Style from './AddTeam.style.js';
import api from '../../../api.js';
import {useSelector} from 'react-redux';

const Team = () => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addTeam = () => {
    api
      .post(
        '/team/add',
        {title: title, content: content, ownerId: userId},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200) {
          console.log(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={Style.container}>
      <View style={Style.inner_container}>
        <View style={Style.body}>
          <Text style={Style.top}>Ekip Oluştur</Text>
          <View style={Style.input_container}>
            <TextInput
              style={Style.text_input}
              placeholder="Başlık"
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View style={Style.content_container}>
            <TextInput
              editable
              multiline
              numberOfLines={10}
              maxLength={40}
              style={Style.text_input}
              placeholder="Açıklama"
              onChangeText={text => setContent(text)}
            />
          </View>
          <TouchableOpacity style={Style.btn_container} onPress={addTeam}>
            <Text style={Style.btn_text}>Oluştur</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Team;
