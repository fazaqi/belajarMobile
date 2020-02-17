import React from 'react';
import {Content, Card, CardItem, Thumbnail, Text} from 'native-base';
import IsiAtas from './isiatas';

const data = [
  {
    name: 'Your Story',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Ajay',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Bambang',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Ujang',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Budi',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Budi',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Budi',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
  {
    name: 'Budi',
    foto: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c536.png',
  },
];

const Atas = () => {
  return (
    <>
      <Content horizontal showsHorizontalScrollIndicator={false}>
        {data.map((val, index) => {
          return <IsiAtas key={index} nama={val.name} foto={val.foto} />;
        })}
      </Content>

      {/* <Content horizontal>
        <Card style={{height: 95, marginRight: -1}} transparent>
          <CardItem style={{flexDirection: 'column'}}>
            <Thumbnail
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
            />
            <Text>Your Story</Text>
          </CardItem>
        </Card>
      </Content> */}
    </>
  );
};

export default Atas;
