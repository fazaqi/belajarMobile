import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class Contents extends Component {
  state = {};
  render() {
    return (
      <>
        <Content>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
                  }}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="more" />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072753294%2F960x0.jpg%3Ffit%3Dscale',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button> */}
                <Icon
                  name="hearto"
                  style={{fontSize: 20, marginRight: 10, color: 'red'}}
                  type="AntDesign"
                />
                <Icon
                  name="comment"
                  style={{marginRight: 10}}
                  type="EvilIcons"
                />
                <Icon
                  name="telegram-plane"
                  style={{fontSize: 20}}
                  type="FontAwesome5"
                />
              </Left>
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body> */}
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </>
    );
  }
}

export default Contents;
