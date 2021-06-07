// // import React from 'react';
// // import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
// // import {
// //   Container,
// //   Card,
// //   UserInfo,
// //   UserImgWrapper,
// //   UserImg,
// //   UserInfoText,
// //   UserName,
// //   PostTime,
// //   MessageText,
// //   TextSection,
// // } from './Stylemessage';
// // import { connect } from 'react-redux'
// // // import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// // //     <Ionicons.Button name="call" size={24} color="black" />
// // //    <MaterialIcons.Button name="video-call" size={24} color="black" />


// // const Messages = [
// //   {
// //     id: '1',
// //     userName: 'Jenny Doe',
// //     userImg: require('../../components/assets/users/user-1.jpg'),
// //     messageTime: '4 mins ago',
// //     messageText:
// //       'Hey there, this is my test for a post of my social app in React Native.',
// //   },
// //   {
// //     id: '2',
// //     userName: 'John Doe',
// //     userImg: require('../../components/assets/users/user-2.jpg'),
// //     messageTime: '2 hours ago',
// //     messageText:
// //       'Hey there, this is my test for a post of my social app in React Native.',
// //   },
// //   {
// //     id: '3',
// //     userName: 'Ken William',
// //     userImg: require('../../components/assets/users/user-3.jpg'),
// //     messageTime: '1 hours ago',
// //     messageText:
// //       'Hey there, this is my test for a post of my social app in React Native.',
// //   },
// //   {
// //     id: '4',
// //     userName: 'Selina Paul',
// //     userImg: require('../../components/assets/users/user-4.jpg'),
// //     messageTime: '1 day ago',
// //     messageText:
// //       'Hey there, this is my test for a post of my social app in React Native.',
// //   },
// //   {
// //     id: '5',
// //     userName: 'Christy Alex',
// //     userImg: require('../../components/assets/users/user-5.jpg'),
// //     messageTime: '2 days ago',
// //     messageText:
// //       'Hey there, this is my test for a post of my social app in React Native.',
// //   },
// // ];

// // export default class _Connected extends React.Component {
  
// //   render() {
// //     // onPress={() => this.props.navigation.navigate('ChatScreen')}
// // //onPress={() => navigation.navigate('Chat', {userName: item.userName})}
// //     return (
// //       <Container>
// //         <FlatList 
// //           data={Messages}
// //           keyExtractor={item=>item.id}
// //           renderItem={({item}) => (
// //             <Card onPress={() => this.props.navigation.navigate('ChatScreen')} > 
// //               <UserInfo>
// //                 <UserImgWrapper>
// //                   <UserImg source={item.userImg} />
// //                 </UserImgWrapper>
// //                 <TextSection>
// //                   <UserInfoText>
// //                     <UserName>{item.userName}</UserName>
// //                     <PostTime>{item.messageTime}</PostTime>
// //                   </UserInfoText>
// //                   <MessageText>{item.messageText}</MessageText>
// //                 </TextSection>
// //               </UserInfo>
// //             </Card>
// //           )}
// //         />
// //       </Container>
// //     );
// // };
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, 
// //     alignItems: 'center', 
// //     justifyContent: 'center'
// //   },
// // });
// //  import React from 'react';
// //  import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
// //  import { connect } from 'react-redux'

// //  export default class _Connected extends React.Component {
  
// //      render() {
// //         return (

// //         )}
// import React, { Component} from 'react';
// import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
// import {
//   Container,
//   Card,
//   UserInfo,
//   UserImgWrapper,
//   UserImg,
//   UserInfoText,
//   UserName,
//   PostTime,
//   MessageText,
//   TextSection,
// } from './Stylemessage';
// import { connect } from 'react-redux'
// const Messages = [
//   {
//     id: '1',
//     userName: 'Jenny Doe',
//     userImg: require('../../components/assets/users/user-2.jpg'),
//     messageTime: '4 mins ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '2',
//     userName: 'John Doe',
//     userImg: require('../../components/assets/users/user-2.jpg'),
//     messageTime: '2 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '3',
//     userName: 'Ken William',
//     userImg: require('../../components/assets/users/user-2.jpg'),
//     messageTime: '1 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '4',
//     userName: 'Selina Paul',
//     userImg: require('../../components/assets/users/user-2.jpg'),
//     messageTime: '1 day ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     userImg: require('../../components/assets/users/user-2.jpg'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
// ];

// export default class _Connected extends React.Component {
//   render () {
//     return (
//       <Container>
//         <FlatList 
//           data={Messages}
//           keyExtractor={item=>item.id}
//           renderItem={({item}) => (
//             <Card >
//               <UserInfo>
//                 <UserImgWrapper>
//                   <UserImg source={item.userImg} />
//                 </UserImgWrapper>
//                 <TextSection>
//                   <UserInfoText>
//                     <UserName>{item.userName}</UserName>
//                     <PostTime>{item.messageTime}</PostTime>
//                   </UserInfoText>
//                   <MessageText>{item.messageText}</MessageText>
//                 </TextSection>
//               </UserInfo>
//             </Card>
//           )}
//         />
//       </Container>
//     );
// };
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
// const mapStateToProps = (state) => ({
//   userReducer: state.userReducer
// })

// const Connected = connect(mapStateToProps)(
//   _Connected
// )

//  export { Connected };
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native';
import twilio from './indexx';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { List, ListItem, SearchBar } from "react-native-elements";
export default class _Connected extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calls: [
        { id: 1, name: "Mark Doe", date: "12 jan", time: '11:14 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 2, name: "Clark Man", date: "12 jul", time: '15:58 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
        { id: 3, name: "Jaden Boor", date: "12 aug", time: '12:45 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
        { id: 4, name: "Srick Tree", date: "12 feb", time: '08:32 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 5, name: "John Doe", date: "12 oct", time: '07:45 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, name: "John Doe", date: "12 jan", time: '09:54 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 8, name: "John Doe", date: "12 jul", time: '11:22 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 9, name: "John Doe", date: "12 aug", time: '13:33 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 10, name: "John Doe", date: "12 oct", time: '11:58 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 11, name: "John Doe", date: "12 jan", time: '09:28 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
      ]
    };
  }
  // _onPressButton() {
  //   ()
  // }




  renderItem = ({ item }) => {

    var callIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Circle_arrow_right_font_awesome.svg/768px-Circle_arrow_right_font_awesome.svg.png";

    if (item.video == true) {
      callIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Circle_arrow_right_font_awesome.svg/768px-Circle_arrow_right_font_awesome.svg.png";
    }
    return (

      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </View>
          <View style={styles.end}>
            <Image style={[styles.icon, { marginLeft: 15, marginRight: 5, width: 14, height: 14 }]} source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png" }} />
            <Text style={styles.time}>{item.date} {item.time}</Text>
          </View>
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Kidschat')} >
          <Image style={[styles.icon, { marginRight: 50 }]} source={{ uri: callIcon }} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
  icon: {
    height: 28,
    width: 28,
  }
});

const mapStateToProps = (state) => ({
  userReducer: state.userReducer
})

const Connected = connect(mapStateToProps)(
  _Connected
)

export { Connected };
