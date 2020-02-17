import React, {Component} from 'react';
import {View, Image} from 'react-native';
import gaya from './gaya';
import {Header, Text, Left, Body, Right, Icon, Title} from 'native-base';

class Headers extends Component {
  state = {};
  render() {
    // const {tulisan} = gaya;
    return (
      <Header style={{backgroundColor: 'white'}}>
        <Left>
          <Icon name="camera" type="Feather" />
        </Left>
        <Body style={{marginLeft: -30}}>
          <View>
            <Image
              style={{width: 150, height: 45}}
              source={{
                uri:
                  'https://www.stickpng.com/assets/images/5a4e432a2da5ad73df7efe7a.png',
              }}
            />
          </View>
        </Body>
        <Right>
          <Icon name="telegram-plane" type="FontAwesome5" />
        </Right>
      </Header>
    );
  }
}

export default Headers;
