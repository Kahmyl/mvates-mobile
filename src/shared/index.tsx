import React from "react";
import { StyledHeader, HeaderText, Icon, IconMain, IconAuth, HeaderTitle } from "../utils/global";
import {  View } from "react-native";

export type headType = {
    navigation: any,
    title: string
}

const Header = ({ navigation, title }: headType) => {
    
    const handlePress = () => {
      navigation.openDrawer()
    }

    return(
        <StyledHeader>
            <Icon name='menu' size={28} onPress={handlePress} />
            <HeaderTitle>
                {title === 'Mvates' && <IconMain name='vine' size={20} />}
                {title === 'Login' && <IconAuth name='person' size={20} />}
                {title === 'Register' && <IconAuth name='person' size={20} />}
                <HeaderText>{title}</HeaderText>
            </HeaderTitle>
        </StyledHeader>
    )
}

export default Header