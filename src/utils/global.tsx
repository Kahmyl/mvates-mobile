import styled from 'styled-components/native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { View } from 'react-native';

export type globalType = {
    children: any
}

export const Container = styled.View`
padding: 28px;
`

export const StyledText = styled.Text`
font-size: 18px;
font-weight: bold;
color: #333;
`

export const StyledButton = styled.Button`
`

export const StyledHeader = styled.View`
width: 100%;
height: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const HeaderText = styled.Text`
font-weight: bold;
font-size: 20px;
color: #333;
letter-spacing: 1px;
`

export const Icon = styled(MaterialIcons)`
  position: absolute;
  left:  10px;
`;

export const IconMain = styled(Entypo)`
  color: blue;
`;

export const IconAuth = styled(MaterialIcons)`
  margin-horizontal: 3px;
`;

export const HeaderTitle = styled.View`
flex-direction: row
align-items: center;
`

export const CardWrapper = ({children}: globalType) => {
    return(
        <View style={{
            borderRadius: 6,
            elevation: 3,
            shadowColor: "#333",
            backgroundColor: "#fff",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            marginHorizontal: 4,
            marginVertical: 6
          }}>{children}</View>
    )
}

export const CardContent = styled.View`
margin-horizontal: 10px;
margin-vertical: 10px;
`

export const Input = styled.TextInput`
border-color: #ddd;
border-width: 1px;
padding: 7px;
font-size: 16px;
border-radius: 6px;
`

export const ErrorText = styled.Text`
color: crimson;
font-weight: bold;
margin-bottom: 10px;
margin-top: 6px;
text-align: center;
`
export const UserText = styled.Text`
font-size: 12px;
color: grey;
`

