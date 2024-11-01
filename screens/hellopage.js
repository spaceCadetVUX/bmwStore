import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Video from 'react-native-video';
import styles from './home'; // Importing styles from home.ts

const HomePage = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Interpolating header background color
  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],
    extrapolate: 'clamp',
  });

  // Interpolating header scale
  const headerScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.6],
    extrapolate: 'clamp',
  });

  // Rotate animation for the logo
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    Animated.timing(rotateAnim, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />

      {/* Animated Header with Scaling Effect */}
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor,
            transform: [{ scale: headerScale }],
          },
        ]}
      >
        {/* Logo with Animation */}
        <TouchableOpacity onPress={toggleMenu}>
          <Animated.Image 
            source={{ uri: 'https://d35wmn7bemzfye.cloudfront.net/c344b10130d0ceb7a289b1a4816828400708c59f/1724832929/images/logo-white.png' }} 
            style={[styles.logo, { transform: [{ rotate }] }]} 
          />
        </TouchableOpacity>

        {/* User Icon */}
        <FontAwesome name="shopping-cart" size={40} color="#000" style={styles.userIcon} />

      </Animated.View>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <View style={styles.headerMenu}>
          <TouchableOpacity><Text style={styles.menuText}>HomePage</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuText}>All Models</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuText}>Book A Test Drive</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuText}>Dealer System</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.menuText}>More BMW</Text></TouchableOpacity>
        </View>
      )}

      {/* Scrollable Content */}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={15}
      >
        {/* Background Image */}

        <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />
                <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />
                <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />
                        <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />
                        <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />
                        <Image 
          source={{ uri: 'https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_1080/auto-titan/19f54ee8ab6bdf300a6396b437fd70ab/spread_the_driving_joy_1920x1080_en.png' }} 
          style={styles.backgroundImage} 
        />

        {/* Additional images as needed */}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BrowseCars')}>
            <Text style={styles.buttonText}>Browse Cars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomePage;
