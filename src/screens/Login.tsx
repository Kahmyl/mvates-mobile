import React from 'react'
import { Container } from '../utils/global';
import LoginForm from './LoginForm';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Login = () => {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <LoginForm/>
        </Container>
      </TouchableWithoutFeedback>
    )
}

export default Login