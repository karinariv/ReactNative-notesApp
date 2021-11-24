import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../store/noteSlice";

const NoteDetails = ( { navigation, route } ) => {
    const selectedNote = route.params?.note
    const dispatch = useDispatch()
    const { notes } = useSelector(state => state.notes)
    const[title, setTitle] = useState(selectedNote ? selectedNote.title : '')
    const[text, setText] = useState(selectedNote ? selectedNote.text : '')
    
    const handleSave = () => {
        if (!selectedNote){
            const newNoteId = !!notes.length
            ? notes[notes.length - 1].id + 1
            : 1
            const newNote = {
                id: newNoteId,
                title: title,
                text: text
            }
            dispatch(addNote(newNote));
        } else if (selectedNote) {
            const noteId = route.params?.note.id
            const note = {
                id: noteId,
                title: title,
                text: text
            }
            dispatch(editNote(note));
        }
        navigation.goBack()
    }

    return (
        <View>
            <Text style={styles.title}>Note Details</Text>
            <Text style={styles.caption}>Title</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Note's title"
            />
            <Text style={styles.caption}>Content</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Write anything you want here"
            />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} onPress={handleSave}>
                    Save
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '300',
        color: '#3E065F',
        textAlign: 'center',
      },
      caption: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: 12,
        marginLeft: 12,
        marginBottom: 4,
      },
      input: {
        height: 40,
        margin: 12,
        marginTop: 0,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        padding: 10,
      },
      buttonContainer: {
        color: '#ffffff',
        fontSize: 14,
    },
    button: {
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
});

export default NoteDetails;