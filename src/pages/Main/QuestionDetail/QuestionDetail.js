import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, FlatList,TouchableOpacity} from 'react-native';
import Style from './QuestionDetail.style';
import api from '../../../api.js';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Reply from '../../../components/Reply';

const QuestionDetail = props => {
  const {question} = props.route.params;
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);

  const [img, setImg] = useState(question.img);
  const [title, setTitle] = useState(question.title);
  const [content, setContent] = useState(question.content);
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState('');

  useEffect(() => {
    api
      .get('reply/get/' + question._id, {
        headers: {
          Authorization: 'bearer ' + token,
        },
      })
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setReplyList(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const keyExtractor = (item, index) => {
    return item._id || index * Math.random();
  };
  const renderItem = ({item}) => {
    return (
      <View>
        <Reply item={item} />
      </View>
    );
  };
  const send_reply = () => {
    console.log(userId,"-",question._id,token,reply);
    api
      .post(
        'reply/add',
        {content: reply, userId: userId, parentId: question._id},
        {
          headers: {
            Authorization: 'bearer ' + token,
          },
        },
      )
      .then(response => {
        if (response.status == 200 && response.data.success) {
          setReplyList(replyList.concat(response.data.data));
          setReply("");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={Style.container}>
      <View style={Style.inner_container}>
        <View style={Style.question_container}>
          {img ? <Image style={Style.image} /> : ''}
          <View style={Style.title_container}>
            <Text style={Style.title}>{title}</Text>
          </View>
          <View style={Style.content_container}>
            <Text style={Style.content}>{content}</Text>
          </View>
        </View>
        <View style={Style.answer_container}>
          <View style={Style.answer_title_container}>
            <Text style={Style.answer_title}>Cevaplar</Text>
          </View>
          <FlatList
            style={Style.reply_container}
            keyExtractor={keyExtractor}
            data={replyList}
            renderItem={renderItem}
          />
        </View>
        <View style={Style.send_reply_container}>
          <View style={Style.input_container}>
            <TextInput
              style={Style.text_input}
              placeholder="Cevap"
              value={reply}
              onChangeText={text => setReply(text)}
            />
          </View>
          <TouchableOpacity style={Style.btn_send} onPress={send_reply}>
            <Icon name="send" size={25}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuestionDetail;
