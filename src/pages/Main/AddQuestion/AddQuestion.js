import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Style from './AddQuestion.style.js';
import api from '../../../api.js';
import {useSelector,useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {fetchQuestionList} from '../../../redux/question';

const Question = ({navigation}) => {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const dispatch = useDispatch();

  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addQuestion = () => {
    api
      .post(
        '/question/add',
        {img: img, title: title, content: content, userId: userId},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200) {
          setTitle("");
          setContent("");
          dispatch(fetchQuestionList(token))
          navigation.navigate("Home")
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*
  const chooseImage=()=>{
    const options={mediaType:"image"}
    launchImageLibrary(options,(response)=>{
      if(!media.didCancel){
      }
    })
  }*/
  //TODO: Fotoğraf işlemleri
  


  return (
    <View style={Style.container}>
      <View style={Style.inner_container}>
        <View style={Style.body}>
          <Text style={Style.top}>Bir Soru Paylaş</Text>
          <TouchableOpacity >
            <Image style={Style.image} />
          </TouchableOpacity>
          <View style={Style.input_container}>
            <TextInput
              style={Style.text_input}
              placeholder="Başlık"
              value={title}
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View style={Style.content_container}>
            <TextInput
              editable
              multiline
              value={content}
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
