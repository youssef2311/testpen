import React, {useState, useLayoutEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import {signOut,signIn,signUp} from '../../redux/actions/UserActions';
import { SignIn } from '../auth/signIn';
import { SignUp } from '../auth/signUp';
import  {baseURL} from '../../APIs/baseAPI';


export default function _Kidschat() {
   
  
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developperrrrrrrrrrrrrrrrrrr',
  //       createdAt: new Date,

      
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
          
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Hello world',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);


//api.post
  useLayoutEffect(() => {
    const unsubscribe =  baseURL.collection('chat').orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
    snapshot.docs.map(doc => ({
    _id: doc.data()._id,
    createdAt: doc.data().createdAt.toDate(),
    text: doc.data().text,
    user: doc.data().user,
    }))
    ));

    return unsubscribe
    }, [])

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
      _id,
      createdAt,
      text,
      user,
      } = messages[0]
      //api.get
     baseURL.collection('chat').add({
      _id,
      createdAt,
      text,
      user,
    })
      }, [])

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
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      //users
      user={{
        id: signIn?.currentUser?.email,
        name: signIn?.currentUser?.displayName,
        avatar: signIn?.currentUser?.photoURL
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
  
  const Kidschat = connect(mapStateToProps)(
    _Kidschat
  )
  
  export { Kidschat };



// import React, {useState, useEffect, useCallback} from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
//  import { connect } from 'react-redux'
//  import { SafeAreaView } from 'react-native-safe-area-context';

//  export default class _Kidschat extends React.Component {
//      render() {
//       return (
//         <SafeAreaView>
//       <Container>
//         <Header>
//           <Left>       
//             <Button transparent  >                
//               <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Connected')}  />                
//            </Button>
//           </Left>
//           <Body>
//             <Title>you can CHAT!</Title>
//           </Body>
//           <Right>
//             <Button transparent>
//               <Icon name='search' onPress={() => this.props.navigation.navigate('')} />
//             </Button>
//             <Button transparent>
//               <Icon name='call' onPress={() => this.props.navigation.navigate('')} />
//             </Button>
//             <Button transparent>
//               <Icon name='videocam'onPress={() => this.props.navigation.navigate('')} />
//             </Button>
//           </Right>
//         </Header>
//       </Container>
//       </SafeAreaView>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//     userReducer: state.userReducer
//   })
  
//   const Kidschat = connect(mapStateToProps)(
//     _Kidschat
//   )
  
//   export { Kidschat };















//   import { connect } from 'react-redux'
// import { GiftedChat } from 'react-gifted-chat';
// import React, {useState,} from 'react';

//   export default function _Kidschat() {
//   const [messages, setMessages] = useState([

//  {
//   _id: 0,
//   text: 'New Chat created.',
//   createdAt: new Date().getTime(),
//   system: true
// },
// // example of chat message
// {
//   _id: 1,
//   text: 'Henlo!',
//   createdAt: new Date().getTime(),
//   user: {
//     _id: 2,
//     name: 'Test User'
//   }
// }
// ]);

// // helper method that is sends a message
// function handleSend(newMessage = []) {
// setMessages(GiftedChat.append(messages, newMessage));
// }

// return (
// <GiftedChat
//   messages={messages}
//   onSend={newMessage => handleSend(newMessage)}
//   user={{ _id: 1 }}
// />
// );
// }

// const mapStateToProps = (state) => ({
//     userReducer: state.userReducer
//   })
  
//   const Kidschat = connect(mapStateToProps)(
//     _Kidschat
//   )
  
//   export { Kidschat };
