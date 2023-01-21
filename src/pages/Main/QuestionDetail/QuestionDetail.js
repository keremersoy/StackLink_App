import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, FlatList,TouchableOpacity} from 'react-native';
import Style from './QuestionDetail.style';
import api from '../../../api.js';
import {useSelector,useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Reply from '../../../components/Reply';
import {fetchReplyList} from '../../../redux/reply';
import Header from '../../../components/Header';

const QuestionDetail = (props) => {
  const {question} = props.route.params;
  const {navigation} = props;
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.user.userId);  
  
  const replies = useSelector(state => state.reply.replies);
  const dispatch = useDispatch();

  const [img, setImg] = useState(question.img);
  const [title, setTitle] = useState(question.title);
  const [content, setContent] = useState(question.content);
  const [reply, setReply] = useState('');

  useEffect(() => {
    dispatch(fetchReplyList({token,id:question._id}));
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
          setReply("");
        }
      })
      .catch(err => {
        console.log(err);
      });
      dispatch(fetchReplyList({token,id:question._id}));
  };

  return (
    <View style={Style.container}>
    <Header navigation={navigation} type={0} />
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
            data={replies.list}
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
