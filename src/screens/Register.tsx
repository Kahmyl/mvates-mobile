import React from 'react'
import { Container, StyledText } from '../utils/global';
import RegisterForm from './RegisterForm';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Register = () => {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RegisterForm/>
        </Container>
      </TouchableWithoutFeedback>
    )
}

export default Register