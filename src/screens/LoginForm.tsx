import React from 'react'
import { Container, Input, StyledButton, ErrorText } from '../utils/global';
import { useDispatch} from "react-redux";
import { Formik } from 'formik';
import { View } from 'react-native';
import { loginSchema } from '../Schema'
import FlatButton from '../shared/button';
import { loginUser } from "../redux/actions";



const LoginForm = () => {
    const dispatch = useDispatch();
    return(
      <Container>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values) =>{
            dispatch(loginUser(values))
          }}
        >
          {({handleChange, handleSubmit, isSubmitting, values, errors, touched, handleBlur}) => (
            <View>
                <Input
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                />
                <ErrorText>{touched.email && errors.email}</ErrorText>

                <Input
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  textContentType='password'
                  secureTextEntry={true}
                />
                <ErrorText>{touched.password && errors.password}</ErrorText>

                <FlatButton text='Login' onPress={handleSubmit}/>
            </View>
          )}
        </Formik>
      </Container>
    )
}

export default LoginForm