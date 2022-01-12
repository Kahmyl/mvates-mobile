import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { loadPolls } from "../redux/actions";
import { RootState }  from "../redux/reducers";
import { Container, StyledText, UserText } from '../utils/global';
import Card from '../shared/card';
import { TouchableOpacity, FlatList } from 'react-native';

const Home = ({ navigation }: any) => {

    const {data} = useSelector((store: RootState) => ({data: store.polls.data}))
    const dispatch = useDispatch();

    const PollList = () => {
      dispatch(loadPolls())
    };

    useEffect(() => {
      PollList();
    }, []);


    return(
      <Container>
        <FlatList
        keyExtractor={(item: any) => item._id}  
        data={data} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Vote', item)}>
            <Card>
              <StyledText>{ item.title }</StyledText>
              <UserText>Vote initiated by {item.user.name}</UserText>
            </Card>
          </TouchableOpacity>
        )} />
      </Container>
    )
}

export default Home