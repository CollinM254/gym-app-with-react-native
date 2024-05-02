import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfileStack from './ProfileStack';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileHeaderText}>User Profile</Text>
      <View style={styles.profileInfo}>
        {/* Render your existing profile information here */}
      </View>
      {/* Render the profile stack here */}


           <ProfileStack />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;


//// ProfileScreen.js
//import React from 'react';
//import { View, Text, StyleSheet, Button } from 'react-native';
//
//const ProfileScreen = ({ navigation }) => {
//  return (
//    <View style={styles.container}>
//      <View style={styles.profileHeader}>
//        <Text style={styles.profileHeaderText}>User Profile</Text>
//      </View>
//      <View style={styles.profileInfo}>
//        <Text style={styles.profileInfoText}>Name: John Doe</Text>
//        <Text style={styles.profileInfoText}>Age: 30</Text>
//        <Text style={styles.profileInfoText}>Gender: Male</Text>
//        <Text style={styles.profileInfoText}>Height: 180 cm</Text>
//        <Text style={styles.profileInfoText}>Weight: 75 kg</Text>
//        {/* Add more profile information as needed */}
//      </View>
//      <View style={styles.buttonContainer}>
//        <Button
//          title="Edit Profile"
//          onPress={() => {
//            // Navigate to the profile edit screen
//            // You'll need to implement this screen separately
//            navigation.navigate('EditProfile');
//          }}
//        />
//      </View>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  profileHeader: {
//    marginBottom: 20,
//  },
//  profileHeaderText: {
//    fontSize: 24,
//    fontWeight: 'bold',
//  },
//  profileInfo: {
//    marginBottom: 20,
//    paddingHorizontal: 20,
//  },
//  profileInfoText: {
//    fontSize: 16,
//    marginBottom: 10,
//  },
//  buttonContainer: {
//    width: '80%',
//  },
//});
//
//export default ProfileScreen;
