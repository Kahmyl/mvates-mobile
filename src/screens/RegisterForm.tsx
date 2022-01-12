import React from 'react'
import { Container, Input, StyledButton, ErrorText } from '../utils/global';
import { Formik } from 'formik';
import { View } from 'react-native';
import { registerSchema } from '../Schema'
import FlatButton from '../shared/button';


const RegisterForm = () => {
    return(
      <Container>
        <Formik
          initialValues={{email: '', password: '', name: ''}}
          validationSchema={registerSchema}
          onSubmit={(values) =>{
            console.log(values)
          }}
        >
          {({handleChange, handleSubmit, isSubmitting, values, errors, touched, handleBlur}) => (
            <View>
                <Input
                  placeholder='Name'
                  onChangeText={handleChange('name')}
                  value={values.name}
                  onBlur={handleBlur('name')}
                />
                <ErrorText>{touched.name && errors.name}</ErrorText>

                <Input
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                />
                <ErrorText>{touched.email &&errors.email}</ErrorText>

                <Input
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  textContentType='password'
                  secureTextEntry={true}
                />
                <ErrorText>{touched.password && errors.password}</ErrorText>

                <FlatButton text='Register' onPress={handleSubmit}/>
            </View>
          )}
        </Formik>
      </Container>
    )
}

export default RegisterForm