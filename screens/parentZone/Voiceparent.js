import React, {useState, useEffect, useCallback} from 'react';
import { TextInput } from 'react-native';
 import { connect } from 'react-redux'

 export default class _Voiceparent extends React.Component {

    render() {
        return (
            <SafeAreaView>
    <Text>voice Call</Text>
          </SafeAreaView>
        );
      }
    }
      
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Voiceparent = connect(mapStateToProps)(
    _Voiceparent
)
   
export { Voiceparent };