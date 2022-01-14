import React, {useEffect, useState} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {UserDetails} from './Container';

const Card = () => {
  const {getData, user} = UserDetails.useContainer();

  const [refresh, setRefresh] = useState(false);

  const onRefresh = async () => {
    setRefresh(true);
    await getData();
    setRefresh(false);
  };

  const fetchData = async () => {
    await getData();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user?.length) {
    console.log(JSON.stringify(user, null, 2));
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow: 1}}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <View style={styles.profile}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={{
              uri: user[0]?.picture.large,
            }}
            resizeMode="cover"
          />
        </View>
        <Text
          style={
            styles.name
          }>{`${user[0]?.name?.title} ${user[0]?.name?.first} ${user[0]?.name?.last}`}</Text>
      </View>

      <View style={styles.detailsView}>
        <Text style={styles.detailTitle}>Personal Details</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>Gender: {user[0]?.gender}</Text>
          <Text style={styles.detailsText}>Email: {user[0]?.email}</Text>
          <Text style={styles.detailsText}>Phone: {user[0]?.phone}</Text>
          <Text style={styles.detailsText}>City: {user[0]?.location.city}</Text>
          <Text style={styles.detailsText}>
            Country: {user[0]?.location.country}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    borderRadius: 200 / 2,
    height: 200,
    width: 200,
  },
  name: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    fontWeight: '900',
    margin: 10,
  },
  detailsView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
  },
  detailTitle: {
    fontSize: 28,
    color: '#000',
    fontWeight: '700',
  },
  details: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 18,
    margin: 5,
    color: '#1b1c1b',
  },
});
export default Card;
