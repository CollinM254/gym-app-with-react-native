import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Image, Animated  } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const HomeScreen = ({ navigation }) => {
  const [showMoreImportance, setShowMoreImportance] = useState(false);
  const [typedText, setTypedText] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Play the video automatically when the component mounts
    video.playAsync();
    // Start the typing animation
//    startTypingAnimation();
  }, []);

  const toggleShowMoreImportance = () => {
    setShowMoreImportance(!showMoreImportance);
  };

  const startTypingAnimation = () => {
    const textToType = 'Welcome to GymApp. Your health matters.';
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(prevText => prevText + textToType[index]);
      index++;
      if (index === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    // Trigger the animation after typing finishes
    Animated.timing(animatedValue, {
      toValue: 1, // Animate to the end value
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Enable native driver for better performance
    }).start(); // Start the animation
  };

  const handleScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: true }
    );

    const handleButtonClick = () => {
      // Navigate to the profile screen
      navigation.navigate('Profile');
    };

    useEffect(() => {
      let timeout;
      const fadeIn = () => {
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };
      const fadeOut = () => {
        Animated.timing(buttonOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };
      const onScrollEndDrag = () => {
        fadeIn();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fadeOut();
        }, 3000); // Adjust the duration as needed
      };

      scrollY.addListener(({ value }) => {
        if (value > 0) {
          fadeIn();
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            fadeOut();
          }, 3000); // Adjust the duration as needed
        }
      });

      return () => {
        scrollY.removeAllListeners();
      };
    }, []);


        return (
          <Animated.ScrollView
             onScroll={handleScroll}
             scrollEventThrottle={16}>
            <ImageBackground
              source={require('../assets/fitness_background.jpeg')}
              style={styles.backgroundImage}
            >
            <Text style={styles.welcomeText}>Welcome to Thai Gym</Text>
            <Text style={styles.welcomeText}>The Home Health Fitness</Text>


              {/* Image and text overlay */}
              <View style={styles.overlayContainer}>
                <Image
                  source={require('../assets/offer.png')} // Adjust the path to your image
                   style={[styles.offerImage, { opacity: 0.7 }]}
                />
                 <Animated.Text style={[styles.animatedText]}>{typedText}</Animated.Text>
                <Text style={styles.offerText}>Limited Offer</Text>
                <Text style={styles.discountText}>30% Discount 🔥🔥</Text>


              </View>

              {/* Video */}
              <Video
                ref={ref => {
                  video = ref;
                }}
                style={styles.video}
                source={{
                  uri: 'https://media.istockphoto.com/id/1186956493/video/digitally-generated-animation-of-human-doing-medical-exam-with-running-sports-fitness.mp4?s=mp4-480x480-is&k=20&c=C_OouEGV98Vhm_iIVKXcBT3_IyFcGpZqGKRZk2OtQPs=',
                }}
                useNativeControls={false} // Disable native controls
                resizeMode={ResizeMode.CONTAIN}
                isLooping // Enable continuous playback
                shouldPlay // Auto play the video
              />

               <View style={styles.importanceContainer}>
                        <Text style={styles.sectionTitle}>Importance of Gym and Fitness</Text>
                        <Text style={styles.reasonsTitle}>1. Physical Health:</Text>
                        <Text style={styles.reasonsText}>
                           Regular exercise, such as those performed in a gym setting, is crucial for maintaining physical health. It helps in controlling weight, reducing the risk of chronic diseases like heart disease, diabetes, and hypertension, and improving overall cardiovascular health.
                        </Text>
                        <Text style={styles.reasonsTitle}>2. Mental Health:</Text>
                        <Text style={styles.reasonsText}>
                           Exercise has numerous mental health benefits. It helps in reducing stress, anxiety, and depression by releasing endorphins, which are chemicals in the brain that act as natural painkillers and mood elevators. Regular exercise can also improve sleep quality and boost self-esteem.
                        </Text>
                        {showMoreImportance ? (
                          <>
                            <Text style={styles.reasonsTitle}>3. Improved Strength and Endurance:</Text>
                            <Text style={styles.reasonsText}>
                              Gym workouts, including strength training and cardio exercises, help in building muscle strength and endurance. This not only enhances physical performance in daily activities but also reduces the risk of injury by strengthening muscles and bones.
                            </Text>
                            <Text style={styles.reasonsTitle}>4. Enhanced Flexibility and Mobility:</Text>
                            <Text style={styles.reasonsText}>
                              Gym exercises often include stretching and flexibility routines, which improve joint flexibility and range of motion. Enhanced flexibility reduces the risk of injuries during physical activities and promotes better posture and body alignment.
                            </Text>
                            <Text style={styles.reasonsTitle}>5. Social Interaction: </Text>
                             <Text style={styles.reasonsText}>
                                           Gyms provide a social environment where individuals can interact with like-minded people, share fitness goals, and participate in group classes or workouts. This social support network can motivate individuals to stick to their exercise routines and make fitness a fun and enjoyable experience.
                                          </Text>
                            <Text style={styles.reasonsTitle}>6. Weight Management:</Text>
                             <Text style={styles.reasonsText}>
                                            Regular exercise, combined with a balanced diet, is essential for managing weight effectively. Gym workouts help in burning calories, building lean muscle mass, and increasing metabolism, which are crucial for achieving and maintaining a healthy weight.
                                          </Text>
                            <Text style={styles.reasonsTitle}>7. Longevity and Quality of Life: </Text>
                             <Text style={styles.reasonsText}>
                                            Studies have shown that regular physical activity, such as gym workouts, is associated with increased longevity and improved quality of life. It reduces the risk of premature death and age-related health problems, allowing individuals to live longer, healthier lives.
                                          </Text>
                            <Text style={styles.reasonsTitle}>8. Disease Prevention: </Text>
                             <Text style={styles.reasonsText}>
                                            Exercise plays a vital role in preventing various chronic diseases, including obesity, type 2 diabetes, osteoporosis, and certain types of cancer. By promoting overall health and well-being, regular gym workouts contribute to disease prevention and promote longevity.
                                          </Text>
                            {/* Add more reasons as needed */}
                            <TouchableOpacity onPress={toggleShowMoreImportance}>
                              <Text style={styles.seeLessButton}>See less</Text>
                            </TouchableOpacity>
                          </>
                        ) : (
                          <TouchableOpacity onPress={toggleShowMoreImportance}>
                            <Text style={styles.seeMoreButton}>See more</Text>
                          </TouchableOpacity>
                        )}
                        <Text style={styles.reasonsTitle}>Why Choose Us?</Text>
                        <Text style={styles.reasonsText}>
                          1. Experienced trainers dedicated to your success.
                        </Text>
                        <Text style={styles.reasonsText}>
                          2. State-of-the-art equipment for effective workouts.
                        </Text>
                        <Text style={styles.reasonsText}>
                          3. Experienced trainers dedicated to your success.
                        </Text>
                        <Text style={styles.reasonsText}>
                          4. Experienced trainers dedicated to your success.
                        </Text>
                        {/* Add more reasons as needed */}
                      </View>
            </ImageBackground>
            <Animated.View style={[styles.buttonContainer, { opacity: buttonOpacity }]}>
                    <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                      <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                  </Animated.View>
          </Animated.ScrollView>
        );
      }

      const styles = StyleSheet.create({
        backgroundImage: {
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        },
        overlayContainer: {
          position: 'absolute',
          top: 90,
          left: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 10,
          padding: 10,
          zIndex: 90,
        },
        offerImage: {
          width: 300,
          height: 100,
          marginBottom: 10,

        },
        offerText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        discountText: {
          color: 'green',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
          animatedText: {
                      color: 'white',
                      marginTop: 0,
                      opacity: 1, // Initial opacity
                    },
        video: {
          width: '100%',
          height: 200,
          borderRadius: 10,
        },
        importanceContainer: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 20,
          marginTop: 20,
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          },
          welcomeText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 50,
          },
          video: {
            width: '100%',
            height: 200,
            borderRadius: 10,
          },
          importanceContainer: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: 20,
            marginTop: 20,
          },
          sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          },
          reasonsTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 10,
            marginBottom: 10,
          },
          reasonsText: {
            fontSize: 16,
            color: 'white',
            marginBottom: 5,
          },
          seeMoreButton: {
            color: 'green',
            textDecorationLine: 'underline',
            marginBottom: 10,
          },
          seeLessButton: {
            color: 'white',
            textDecorationLine: 'underline',
            marginTop: 10,
          },
          buttonContainer: {
              position: 'absolute',
              bottom: 20,
              alignSelf: 'center',
            },
            button: {
              backgroundColor: 'green',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
            },
            buttonText: {
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            },

        // Your existing styles here...
      });

      export default HomeScreen;


