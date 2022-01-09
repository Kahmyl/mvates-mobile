import React from 'react'
import { Container, StyledText, StyledButton } from '../utils/global';

const Home = ({ navigation }: any) => {
    
    const pressHandler = () => {
        navigation.navigate('Vote')
    }

    return(
      <Container>
        <StyledText>Home Screen</StyledText>
        <StyledButton title="Vote" onPress={pressHandler}/>
      </Container>
    )
}

export default Home