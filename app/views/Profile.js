import React from 'react';
import { 
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { showInfo} from '../store/profileSlice';
import myAvatar from '../img/myAvatar.png';
import { store } from '../store/store'


const Profile = ({ navigation, route }) => {
  const filledPhone = route.params?.phone;
  const filledDescription = route.params?.description;
  const dispatch = useDispatch()
  const [phone, setPhone] = useState(route.params.initialState?.phone)
  const [description, setDescription] = useState(route.params.initialState?.description)
  
  const handleSave = () => {
    const myInfo = {
      phone: phone,
      description: description
    }
    dispatch(showInfo(myInfo));
    navigation.goBack();
  }

  return (
    <ScrollView>
      <Image 
        source={myAvatar}
        style= {styles.image}
      />
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.caption}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder={'Phone'}
        keyboardType="numeric"
      />
      <Text style={styles.caption}>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder={'Something about you'}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={handleSave}>
          Save info
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#435460',
    textAlign: 'center',
  },
  image: {
    marginTop: 30,
    marginBottom: 20,
    resizeMode: 'cover',
    width: 140,
    height: 140,
    borderRadius: 999,
    alignSelf: 'center',
    backgroundColor: '#d2d2d2',
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
    color: '#FFFFFF',
    fontSize: 14,
    height: 50
  },
  button: {
    position: 'absolute',
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
    backgroundColor: '#007AFF',
  },
  
});

export default Profile;