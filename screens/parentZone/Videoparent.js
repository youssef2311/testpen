import React, {useState, useEffect, useCallback} from 'react';
import { Text } from 'react-native';
 import { connect } from 'react-redux'

 export default class _Videoparent extends React.Component {

    render() {
        return (
            <SafeAreaView>
    <Text>Video Call</Text>
          </SafeAreaView>
        );
      }
    }
      
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Videoparent = connect(mapStateToProps)(
    _Videoparent
)
   
export { Videoparent };