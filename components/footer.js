import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
export default class Futer extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button transparents>
            <Icon style={{color: 'black'}} name="home" />
          </Button>
          <Button>
            <Icon style={{color: 'black'}} name="search" />
          </Button>
          <Button>
            <Icon style={{color: 'black'}} name="add" />
          </Button>
          <Button>
            <Icon style={{color: 'black'}} name="heart" />
          </Button>
          <Button>
            <Icon style={{color: 'black'}} name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
