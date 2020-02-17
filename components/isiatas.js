import React from 'react';
import {Card, CardItem, Thumbnail, Text} from 'native-base';

const IsiAtas = ({nama, foto}) => {
  return (
    <Card style={{height: 95, marginRight: -20}} transparent>
      <CardItem style={{flexDirection: 'column'}}>
        <Thumbnail
          source={{
            uri: foto,
          }}
        />
        <Text style={{fontSize: 15}}>{nama}</Text>
      </CardItem>
    </Card>
  );
};

export default IsiAtas;
