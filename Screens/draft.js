import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
