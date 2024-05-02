import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Platform, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const WorkoutScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [notificationToken, setNotificationToken] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [sound, setSound] = useState();

  useEffect(() => {
    // Request permission for notifications
    registerForPushNotificationsAsync().then(token => setNotificationToken(token));
    // Load the beep sound
    loadSound();
    return () => {
      // Cleanup the sound when unmounting
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    // Permission handling code
  };

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/beep.wav')
    );
    setSound(sound);
  };

  const playSound = async () => {
    try {
      await sound.replayAsync();
    } catch (error) {
      console.log('Error playing sound: ', error);
    }
  };

  const startTimer = () => {
    setTimerRunning(true);
    setTimerInterval(setInterval(updateTimer, 1000)); // Update timer every second
    playSound();
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(timerInterval);
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  const updateTimer = () => {
    setElapsedTime(prevTime => prevTime + 1);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const scheduleNotification = async (selectedDate) => {
    // Schedule notification code
     await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Workout Reminder',
            body: 'Don\'t forget to workout today!',
            data: { data: 'goes here' },
          },
          trigger: { date: new Date(selectedDate + 'T08:00:00'), repeats: true }, // Set the time for the reminder
        });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Workout Screen</Text>
      <TouchableOpacity onPress={() => timerRunning ? stopTimer() : startTimer()} style={styles.timerButton}>
        <Text>{timerRunning ? 'Stop Timer' : 'Start Timer'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetTimer}>
        <Ionicons name="refresh-circle" size={24} color="blue" style={styles.refreshIcon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ProgressTrackingScreen')}>
        <Text style={styles.link}>Track Progress</Text>
      </TouchableOpacity>
      <Calendar
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
      <Button
        title="Schedule Workout"
        onPress={() => {
          scheduleNotification(selectedDate);
          alert('Workout scheduled for ' + selectedDate);
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerButton: {
    fontSize: 18,
    marginBottom: 10,
    color: '#007BFF',
    backgroundColor: '#00FF00',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, // Outer border width
    borderColor: 'black', // Outer border color
    borderStyle: 'solid', // Outer border style
    padding: 10, // Padding to add some space around the text
  },
  refreshIcon: {
    marginTop: 10,
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 10,
    justifyContent: 'center',
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default WorkoutScreen;




//import React, { useState, useEffect } from 'react';
//import { View, Text, Button, TouchableOpacity, Platform, StyleSheet } from 'react-native';
//import { Calendar } from 'react-native-calendars';
//import * as Notifications from 'expo-notifications';
//import Constants from 'expo-constants';
//import { Audio } from 'expo-av';
//
//const WorkoutScreen = ({ navigation }) => {
//  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//  const [notificationToken, setNotificationToken] = useState(null);
//  const [timerRunning, setTimerRunning] = useState(false);
//  const [elapsedTime, setElapsedTime] = useState(0);
//  const [timerInterval, setTimerInterval] = useState(null);
//  const [sound, setSound] = useState();
//
//  useEffect(() => {
//    // Request permission for notifications
//    registerForPushNotificationsAsync().then(token => setNotificationToken(token));
//    // Load the beep sound
//    loadSound();
//    return () => {
//      // Cleanup the sound when unmounting
//      if (sound) {
//        sound.unloadAsync();
//      }
//    };
//  }, []);
//
//  const registerForPushNotificationsAsync = async () => {
//    // Permission handling code
//  };
//
//  const loadSound = async () => {
//    const { sound } = await Audio.Sound.createAsync(
//      require('../assets/beep.wav')
//    );
//    setSound(sound);
//  };
//
//  const playSound = async () => {
//    try {
//      await sound.replayAsync();
//    } catch (error) {
//      console.log('Error playing sound: ', error);
//    }
//  };
//
//  const startTimer = () => {
//    setTimerRunning(true);
//    setTimerInterval(setInterval(updateTimer, 1000)); // Update timer every second
//    playSound();
//  };
//
//  const stopTimer = () => {
//    setTimerRunning(false);
//    clearInterval(timerInterval);
//  };
//
//  const updateTimer = () => {
//    setElapsedTime(prevTime => prevTime + 1);
//  };
//
//  const formatTime = (timeInSeconds) => {
//    const hours = Math.floor(timeInSeconds / 3600);
//    const minutes = Math.floor((timeInSeconds % 3600) / 60);
//    const seconds = timeInSeconds % 60;
//    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//  };
//
//  const scheduleNotification = async (selectedDate) => {
//    // Schedule notification code
//     await Notifications.scheduleNotificationAsync({
//          content: {
//            title: 'Workout Reminder',
//            body: 'Don\'t forget to workout today!',
//            data: { data: 'goes here' },
//          },
//          trigger: { date: new Date(selectedDate + 'T08:00:00'), repeats: true }, // Set the time for the reminder
//        });
//  };
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Workout Screen</Text>
//      <TouchableOpacity onPress={() => timerRunning ? stopTimer() : startTimer()} style={styles.timerButton}>
//        <Text>{timerRunning ? 'Stop Timer' : 'Start Timer'}</Text>
//      </TouchableOpacity>
//
//      <TouchableOpacity onPress={() => navigation.navigate('ProgressTrackingScreen')}>
//        <Text style={styles.link}>Track Progress</Text>
//      </TouchableOpacity>
//      <Calendar
//        current={selectedDate}
//        onDayPress={(day) => setSelectedDate(day.dateString)}
//      />
//      <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
//      <Button
//        title="Schedule Workout"
//        onPress={() => {
//          scheduleNotification(selectedDate);
//          alert('Workout scheduled for ' + selectedDate);
//        }}
//      />
//      <Button
//        title="Go to Home"
//        onPress={() => navigation.navigate('Home')}
//      />
//      <Button
//        title="Go to Profile"
//        onPress={() => navigation.navigate('Profile')}
//      />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//  },
//  timerButton: {
//    fontSize: 18,
//    marginBottom: 10,
//    color: '#007BFF',
//    backgroundColor: '#00FF00',
//    height: 50,
//    borderRadius: 10,
//    alignItems: 'center',
//    justifyContent: 'center',
//    border: 2,
//     borderWidth: 2, // Outer border width
//        borderColor: 'black', // Outer border color
//        borderStyle: 'solid', // Outer border style
//        padding: 10, // Padding to add some space around the text
//  },
//  link: {
//    fontSize: 16,
//    color: '#007BFF',
//    marginBottom: 10,
//    justifyContent: 'center',
//  },
//  timer: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginTop: 20,
//  },
//});
//
//export default WorkoutScreen;


//import React, { useState, useEffect } from 'react';
//import { View, Text, Button, TouchableOpacity, Platform } from 'react-native';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//import * as Notifications from 'expo-notifications';
//import Constants from 'expo-constants';
//import TimerScreen from "./TimerScreen";
//import { createStackNavigator } from '@react-navigation/stack';
//
//const Stack = createStackNavigator();
//
//
//const WorkoutScreen = ({ navigation }) => {
//  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//  const [notificationToken, setNotificationToken] = useState(null);
//
//  useEffect(() => {
//    // Request permission for notifications
//    registerForPushNotificationsAsync().then(token => setNotificationToken(token));
//  }, []);
//
//  const registerForPushNotificationsAsync = async () => {
//    let token;
//    if (Constants.isDevice) {
//      const { status: existingStatus } = await Notifications.getPermissionsAsync();
//      let finalStatus = existingStatus;
//      if (existingStatus !== 'granted') {
//        const { status } = await Notifications.requestPermissionsAsync();
//        finalStatus = status;
//      }
//      if (finalStatus !== 'granted') {
//        alert('Failed to get push token for push notification!');
//        return;
//      }
//      token = (await Notifications.getExpoPushTokenAsync()).data;
//    } else {
//      alert('Must use physical device for Push Notifications');
//    }
//
//    if (Platform.OS === 'android') {
//      Notifications.setNotificationChannelAsync('default', {
//        name: 'default',
//        importance: Notifications.AndroidImportance.MAX,
//        vibrationPattern: [0, 250, 250, 250],
//        lightColor: '#FF231F7C',
//      });
//    }
//
//    return token;
//  };
//
//  const scheduleNotification = async (selectedDate) => {
//    await Notifications.scheduleNotificationAsync({
//      content: {
//        title: 'Workout Reminder',
//        body: 'Don\'t forget to workout today!',
//        data: { data: 'goes here' },
//      },
//      trigger: { date: new Date(selectedDate + 'T08:00:00'), repeats: true }, // Set the time for the reminder
//    });
//  };
//
//
//  return (
//    <View>
//      <Text>Workout Screen</Text>
//      <TouchableOpacity onPress={() => navigation.navigate('TimerScreen')}>
//        <Text>Start Timer</Text>
//      </TouchableOpacity>
//      <TouchableOpacity onPress={() => navigation.navigate('ProgressTrackingScreen')}>
//        <Text>Track Progress</Text>
//      </TouchableOpacity>
//      <Calendar
//        current={selectedDate}
//        onDayPress={(day) => setSelectedDate(day.dateString)}
//      />
//      <Button
//        title="Schedule Workout"
//        onPress={() => {
//          scheduleNotification(selectedDate);
//          alert('Workout scheduled for ' + selectedDate);
//        }}
//      />
//      <Button
//        title="Go to Home"
//        onPress={() => navigation.navigate('Home')}
//      />
//      <Button
//        title="Go to Profile"
//        onPress={() => navigation.navigate('Profile')}
//      />
//    </View>
//  );
//}
//
//export default WorkoutScreen;


// WorkoutScreen.js
//import React from 'react';
//import { View, Text, Button } from 'react-native';
//
//const WorkoutScreen = ({ navigation }) => {
//  return (
//    <View>
//      <Text>Workout Screen</Text>
//      <Button
//        title="Go to Home"
//        onPress={() => navigation.navigate('Home')}
//      />
//      <Button
//        title="Go to Profile"
//        onPress={() => navigation.navigate('Profile')}
//      />
//    </View>
//  );
//}
//
//export default WorkoutScreen;
