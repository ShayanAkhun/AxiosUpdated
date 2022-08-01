import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import axios from 'axios';
import NewsCard from '../screens/NewsCard';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  async function getNewsFromAPI() {
    try {

      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1',
      );
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <NewsCard item={item} onPress={()=> {navigation.navigate('NewsDisplay',{item})}} />;
        }}
      />
    </View>
  );
};

export default News;
