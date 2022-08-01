import React from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const NewsDisplay = ({route}) => {
  const {item} = route.params;

  const openLink = () => {
    Linking.openURL(item.url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> {item.title}</Text>
      <Text style={styles.author}>{item.author} </Text>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <Text style={styles.description}>{item.description}</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={openLink}>
          <Text>Open Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: width * 0.05,
    marginLeft: 18,
    marginHorizontal: width * 0.02,
    color: 'gray',
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
  button: {
    marginLeft: 18,
    borderRadius: 1,
    borderColor: '#222',
    
  },
});

export default NewsDisplay;
