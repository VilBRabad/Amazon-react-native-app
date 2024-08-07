import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

type topAdsType = {
    id: string;
    img: string;
}

const topAds: topAdsType[] = [
    {
        id: '1',
        img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0aac6b3b-417f-401a-9544-759f319d6d43.jpg",
    },
    {
        id: '2',
        img: "https://m.media-amazon.com/images/I/61ukF5fPL6L._SR1236,1080_.jpg"
    },
    {
        id: '3',
        img: "https://m.media-amazon.com/images/I/616msR2JaNL._SR1236,1080_.jpg"
    },
    {
        id: '4',
        img: "https://m.media-amazon.com/images/I/61sdcKoM7dL._SR1236,1080_.jpg"
    },
    {
        id: '5',
        img: "https://m.media-amazon.com/images/I/61G2fJ1rNmL._SR1236,1080_.jpg"
    },
    {
        id: '6',
        img: "https://m.media-amazon.com/images/I/615BD6K8t0L._SR1236,1080_.jpg"
    },
    {
        id: '7',
        img: "https://m.media-amazon.com/images/I/819MnJWh3HL._SR1236,1080_.jpg"
    },
]


const SliderImage = () => {

  return (
    <Swiper
      style={styles.wrapper}
      autoplay
      autoplayTimeout={6}
      showsPagination={true}
    >
      {topAds.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image.img }} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 280,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 370,
    resizeMode: "contain",
  },
});

export default SliderImage
