import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Button, Center, Column } from "native-base";

const ListItem = ({ note, onDelete, onSelect }) => {
    
    return (
        <TouchableHighlight onPress={() => onSelect(note)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>My Note {note.id}</Text>
                <Button style={styles.deleteButton}

                    onPress={() => onDelete(note.id)}
                >Delete</Button>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    item: {
        //flex: 1,
        padding: 10,
        height: 60,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(67,84,96,0.15)'
    },
    itemText: {
        fontSize: 18,
        padding: 6,
        backgroundColor: '#FF87CA',
        color: '#3E065F',
        borderRadius: 3
    },
    deleteButton: {
        color: '#ffffff',
        backgroundColor: '#cf361e',
        borderRadius: 45,
        width: 65,
        height: 35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListItem;