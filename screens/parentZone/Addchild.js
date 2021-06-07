// import React from 'react';
// import { View, Text, Image, Platform, StatusBar } from 'react-native';
// import CompleteFlatList from 'react-native-complete-flatlist';
// import { connect } from 'react-redux'



// const data = [
//     { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
//     { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
//     { name: 'okay', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'okay', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'okay', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'test', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'test', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'test', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'nicework', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'nicework', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     { name: 'ggwp', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
//     {
//       name: 'Muhyiddeen',
//       status: 'Blocked',
//       time: '10:10 PM',
//       date: '9 Feb 2018',
//     },
//   ];
  
// export default class _Addchild extends React.Component {
//     cell = ({data,index}) => {
//         const item = data.cleanData ? data.cleanData : data
    
//         console.log(data.cleanData)
//         console.log('data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data')
    
//         console.log('this is index number : '+index)
    
//         console.log(item+' this is original data')
    
//         return <Text>{data.name}</Text>;
//       }
    
//       render() {
//         const { navigation } = this.props;
//         return (
//           <CompleteFlatList
//           searchKey={['name', 'status', 'time', 'date']}
//           highlightColor="yellow"
//           pullToRefreshCallback={() => {
//             alert('refreshing');
//           }}
//           data={data}
//           ref={c => this.completeFlatList = c}
//           renderSeparator={null}
//           renderItem={this.cell}
//           onEndReached={() => console.log("reach end")}
//           onEndReachedThreshold={0}
//         />
//         );
//       }
//     }

// const mapStateToProps = (state) => ({
//     userReducer: state.userReducer
// })

// const Addchild = connect(mapStateToProps)(
//     _Addchild
// )
//  export {Addchild};


import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import Addchildfooter from './Addchildfooter';
import Addchildheader from './Addchildheader';
import Addchildconfig from './Addchildconfig';

export default class _Addchild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            note: ''
        } }

        async componentDidMount() {

            const notes = await AsyncStorage.getItem('notes');
            if (notes && notes.length > 0) {
                this.setState({
                    notes: JSON.parse(notes)
                })
            }
    
        }

        updateAsyncStorage(notes) {

            return new Promise( async(resolve, reject) => {
    
                try {
    
                    await AsyncStorage.removeItem('notes');
                    await AsyncStorage.setItem('notes', JSON.stringify(notes));
                    return resolve(true);
    
                } catch(e) {
                    return reject(e);
                }
    
            });
    
        }

        cloneNotes() {
            return [...this.state.notes];
        }

        async addNote() {

            if (this.state.note.length <= 0)
                return;
    
            try {
    
                const notes = this.cloneNotes();
                notes.push(this.state.note);
    
                await this.updateAsyncStorage(notes);
    
                this.setState({
                    notes: notes,
                    note: ''
                });
    
            }
    
            catch(e) {
    
                // notes could not be updated
                alert(e);
    
            }
    
        }

        async removeNote(i) {

            try {
    
                const notes = this.cloneNotes();
                notes.splice(i, 1);
    
                await this.updateAsyncStorage(notes);
                this.setState({ notes: notes });
    
            }
    
            catch(e) {
    
                // Note could not be deleted
                alert(e);
    
            }
    
        }


        renderNotes() {

            return this.state.notes.map((note, i) => {
                return (
                    <TouchableOpacity 
                        key={i} style={styles.note} 
                        onPress={ () => this.removeNote(i) }
                    >
                        <Text style={styles.noteText}>{note}</Text>
                    </TouchableOpacity>
                );
            });
    
        }
    
        render() {

            return (
                <View style={styles.container}>
    
                    <Addchildheader title={Config.title} />
    
                    <ScrollView style={styles.scrollView}>
                        {this.renderNotes()}
                    </ScrollView>
    
                    <Addchildfooter
                        onChangeText={ (note) => this.setState({note})  }
                        inputValue={this.state.note}
                        onNoteAdd={ () => this.addNote() }
                    />
    
                </View>
            );
    
        }
    
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative'
        },
        scrollView: {
            maxHeight: '82%',
            marginBottom: 100,
            backgroundColor: '#fff'
        },
        note: {
            margin: 20,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            backgroundColor: '#f9f9f9',
            borderColor: '#ddd',
            borderRadius: 10,
        },
        noteText: {
            fontSize: 14,
            padding: 20,
        }
    });



const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Addchild = connect(mapStateToProps)(
    _Addchild
)
 export {Addchild};