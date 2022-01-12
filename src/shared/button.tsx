import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"

export type buttonType = {
    text: string
    onPress?: any
}

const FlatButton = ({text, onPress}: buttonType) => {
  return(
      <TouchableOpacity onPress={onPress}>
          <ButtonView>
              <ButtonText>{ text }</ButtonText>
          </ButtonView>
      </TouchableOpacity>
  )
}

export default FlatButton

export const ButtonView = styled.View`
 border-radius: 8px;
 padding-vertical: 14px;
 padding-horizontal: 10px;
 background-color: grey;
`

export const ButtonText = styled.Text`
color: white;
font-weight: bold;
text-transform: uppercase;
font-size: 16px;
text-align: center;
`