import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import ListItem from "../components/ListItem";
import { useSelector, useDispatch } from "react-redux";
import { removeNote } from "../store/noteSlice";
import notetaking from '../../app/img/notetaking.png';

const Home = ({ navigation }) => {

    const { notes } = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const deleteNote = (noteId) => {
        dispatch(removeNote(noteId))
    }
    
    const handleItemSelect = (note) => {
        navigation.navigate('Details', {note: note})
    };

    return (
        <View style={styles.container}>
            <View style={styles.containsTitle}>
                <Text style={styles.appName}>Colour Your Notes</Text>
                <Text style={styles.title}>Welcome!</Text>
            </View>
            <View style={styles.containsButton}>
                <Button
                    style={styles.profileButton}
                    title="Go to profile"
                    onPress={() =>
                        navigation.navigate('Profile', { name: 'Karina' })
                    }
                >
                    Go to profile
                </Button>
            </View>
            <Image 
                source={notetaking}
                style= {styles.image}
            />
            <Text style={styles.yourNotesText}>
                Your Notes
            </Text>
            <View style={styles.containsAddButton}>
            <Button style={styles.addbutton}
                title="+"
                onPress={() => navigation.navigate('Details')}
            >Add
            </Button>
            </View>
            
            <View style={styles.listContainer}>
                <FlatList 
                    data={notes}
                    columnWrapperStyle={{justifyContent: "space-around"}}
                    numColumns={2}
                    renderItem={({item}) => <ListItem 
                        note={item}
                        style={{width: '40%'}}
                        onDelete={deleteNote} 
                        onSelect={handleItemSelect}
                        /> }
                />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    containsTitle: {
        height: 120
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: '#435460',
        textAlign: 'center',
    },
    appName: {
        fontSize: 40,
        fontStyle: 'italic',
        color: '#9C19E0',
        fontWeight: '400',
        textAlign: 'center'
    },
    image: {
        //flex: 1,
        width: 300,
        height: 300,
        alignSelf: 'center',
        resizeMode: 'contain',
        borderRadius: 99
    },
    yourNotesText: {
        fontSize: 26,
        fontStyle: 'italic',
        color: '#3E065F'
    }, 
    listContainer: {
        flex: 1,
    },
    addbutton: {
        position: 'absolute',
        width: 55,
        height: 55,
        left: '80%',
        bottom: 0,
        marginLeft: 30,
        borderRadius: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9D84B7',
    },
    profileButton: {
        width: 125,
        height: 35,
        left: '25%',
        bottom: 0,
        marginLeft: 30,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3D56B2',
    },
    containsButton: {
        color: '#ffffff',
        fontSize: 14,
    },
    containsAddButton: {
        textAlign: 'center',
        fontSize: 35,
        color: '#ffffff'
    },
});

export default Home;