import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Style from './AddQuestion.style.js';
import api from '../../../api.js';
import {useSelector} from 'react-redux';

const Question = () => {
  const token = useSelector(state => state.user.token);

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addQuestion = () => {
    api
      .post(
        '/question/add',
        //TODO:add user id
        {img: img, title: title, content: content},
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
          <Text style={Style.top}>Bir Soru Paylaş</Text>
          <Image style={Style.image} />
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
          <TouchableOpacity style={Style.btn_container} onPress={addQuestion}>
            <Text style={Style.btn_text}>Soruyu Paylaş</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Question;
