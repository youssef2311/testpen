// import React, { Component } from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import { connect } from 'react-redux';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default class _Chatscreen extends React.Component {

//     render() {
//         return (
//             <SafeAreaView>
//           <Container>
//             <Header>
//               <Left>       
//                 <Button transparent  >                
//                   <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('ParentChat')}  />                
//                </Button>
//               </Left>
//               <Body>
//                 <Title>you can CHAT!</Title>
//               </Body>
//               <Right>
//                 <Button transparent>
//                   <Icon name='search' onPress={() => this.props.navigation.navigate('')} />
//                 </Button>
//                 <Button transparent>
//                   <Icon name='call' onPress={() => this.props.navigation.navigate('Voiceparent')} />
//                 </Button>
//                 <Button transparent>
//                   <Icon name='videocam'onPress={() => this.props.navigation.navigate('Videoparent')} />
//                 </Button>
//               </Right>
//             </Header>
//           </Container>
//           </SafeAreaView>
//         );
//       }
//     }



import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet, Container, Header, Left, Body, Right,  Icon, Title} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function _Chatscreen() {
   

  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developper',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
   
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      />
              
        
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Chatscreen = connect(mapStateToProps)(
    _Chatscreen
)
   
export { Chatscreen };