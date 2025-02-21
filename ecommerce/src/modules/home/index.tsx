import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHooks';
import {getHomeContent} from './api/actions';

const Home = () => {
  const dispatch = useAppDispatch();
  const {data, loading, error} = useAppSelector(state => state.home);

  useEffect(() => {
    dispatch(getHomeContent(1));
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(loading)}</Text>
      <Text>{JSON.stringify(error)}</Text>
    </View>
  );
};

export default Home;
