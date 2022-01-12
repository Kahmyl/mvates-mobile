import React, { useState } from "react";
import { Container, StyledText, StyledButton } from "../utils/global";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
import FlatButton from '../shared/button';


const Vote = ({navigation}: any) => {
  const title = navigation.getParam('title');
  const options =navigation.getParam('options')

  const handleSubmit = () => {

  }
  
  const [selectedValue, setSelectedValue] = useState("--select a value--");
    return(
      <Container>
      <StyledText>{title}</StyledText>
      <View style={styles.container}>
      <Picker
        mode="dialog"
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        { options.map((item: any) => (<Picker.Item key={item._id} label={item.option} value={item._id}/>)) }
      </Picker>
      <StyledButton  title="Submit" />
    </View>
      </Container>
      
    )
}

export default Vote


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
