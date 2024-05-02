import React from 'react';
import { View, Text, ScrollView, Button, Linking, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const ExploreScreen = () => {
  const openWhatsAppGroup = () => {
    const whatsappGroupLink = 'https://chat.whatsapp.com/your-group-id';
    Linking.openURL(whatsappGroupLink);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Instructional Videos</Text>
      <View style={styles.videoContainer}>
        {/* Instructional Videos */}
        <Text style={styles.videoTitle}>Video Title 1</Text>
        <Video
          source={{ uri: 'https://player.vimeo.com/progressive_redirect/playback/496670702/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=7abe3bbb322fcb669d087a4ce49fb348b66d7dc29607898ffb6b57980a578370' }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          style={styles.video}
          isLooping={false}
          shouldPlay={false}
        />

        <Text style={styles.videoTitle}>Video Title 2</Text>
        <Video
          source={{ uri: 'https://player.vimeo.com/progressive_redirect/playback/496670702/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=7abe3bbb322fcb669d087a4ce49fb348b66d7dc29607898ffb6b57980a578370' }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          style={styles.video}
          isLooping={false}
          shouldPlay={false}
        />

        <Text style={styles.videoTitle}>Video Title 3</Text>
        <Video
          source={{ uri: 'https://player.vimeo.com/progressive_redirect/playback/496670702/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=7abe3bbb322fcb669d087a4ce49fb348b66d7dc29607898ffb6b57980a578370' }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          style={styles.video}
          isLooping={false}
          shouldPlay={false}
        />
      </View>

      <Text style={styles.sectionTitle}>Types of Gyms and Fitness</Text>
      <Text style={styles.content}>
        1. CrossFit Gym
        {"\n"}2. Yoga Studio
        {"\n"}3. Pilates Studio
        {"\n"}4. Martial Arts Dojo
        {"\n"}5. HIIT (High-Intensity Interval Training) Center
      </Text>

      <Text style={styles.sectionTitle}>Fitness Health Tips</Text>
      <Text style={styles.content}>
        Before Gym:
        {"\n"}1. Stay hydrated by drinking water.
        {"\n"}2. Eat a balanced meal containing carbohydrates and protein.
        {"\n"}3. Warm up properly to prevent injuries.
        {"\n"}4. Get adequate sleep for muscle recovery.
        {"\n"}5. Stretch to improve flexibility.
        {"\n"}
        During Gym:
        {"\n"}1. Listen to your body and rest when needed.
        {"\n"}2. Focus on proper form to avoid injuries.
        {"\n"}3. Stay hydrated by drinking water or sports drinks.
        {"\n"}4. Take breaks between intense workouts.
        {"\n"}5. Pay attention to breathing during exercises.
        {"\n"}
        After Gym:
        {"\n"}1. Cool down with light stretching or walking.
        {"\n"}2. Refuel with a post-workout snack containing protein and carbohydrates.
        {"\n"}3. Hydrate well to replace lost fluids.
        {"\n"}4. Take time to rest and recover.
        {"\n"}5. Reflect on your progress and set new goals.
      </Text>

      <Text style={styles.sectionTitle}>Dos and Don'ts</Text>
      <Text style={styles.content}>
        Dos:
        {"\n"}- Warm up before starting your workout.
        {"\n"}- Use proper equipment and techniques.
        {"\n"}- Stay hydrated throughout your workout.
        {"\n"}- Listen to your body and rest when needed.
        {"\n"}- Focus on form and technique over lifting heavier weights.
        {"\n"}
        Don'ts:
        {"\n"}- Skip warm-up exercises.
        {"\n"}- Push through pain or discomfort.
        {"\n"}- Ignore proper form for heavier weights.
        {"\n"}- Overtrain or exercise excessively.
        {"\n"}- Forget to cool down and stretch after your workout.
      </Text>

      <Button title="Join the Community" onPress={openWhatsAppGroup} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
  videoContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default ExploreScreen;


//import React from 'react';
//import { View, Text, ScrollView, Button, Linking, StyleSheet } from 'react-native';
//import { Video, ResizeMode } from 'expo-av';
//
//
//
//const ExploreScreen = () => {
//  const openWhatsAppGroup = () => {
//
//    const whatsappGroupLink = 'https://chat.whatsapp.com/your-group-id';
//    Linking.openURL(whatsappGroupLink);
//  };
//
//  return (
//    <ScrollView contentContainerStyle={styles.container}>
//      <Text style={styles.sectionTitle}>Instructional Videos</Text>
//      <View style={styles.videoContainer}>
//        {/* Add your instructional videos here */}
//        <Text>Instructional Video 1</Text>
//
//        <Text>Instructional Video 2</Text>
//        <Text>Instructional Video 3</Text>
//      </View>
//
//      <Text style={styles.sectionTitle}>Types of Gyms and Fitness</Text>
//      <Text style={styles.content}>
//        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//        probare, quae sunt a te dicta? Duo Reges: constructio interrete. Ad eos igitur converte te, quaeso.
//      </Text>
//
//      <Text style={styles.sectionTitle}>Fitness Health Tips</Text>
//      <Text style={styles.content}>
//        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//        probare, quae sunt a te dicta? Duo Reges: constructio interrete. Ad eos igitur converte te, quaeso.
//      </Text>
//
//      <Text style={styles.sectionTitle}>Dos and Don'ts</Text>
//      <Text style={styles.content}>
//        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
//        probare, quae sunt a te dicta? Duo Reges: constructio interrete. Ad eos igitur converte te, quaeso.
//      </Text>
//
//      <Button title="Join the Community" onPress={openWhatsAppGroup} />
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 20,
//  },
//  sectionTitle: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    marginTop: 20,
//  },
//  content: {
//    fontSize: 16,
//    marginTop: 10,
//  },
//  videoContainer: {
//    marginTop: 10,
//    marginBottom: 20,
//  },
//});
//
//export default ExploreScreen;
