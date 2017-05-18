import React, { Component } from 'react';
import styled from 'styled-components/native';
import BarnList from './src/BarnList';
import NavLink from './src/NavLink';
import { AppRegistry, Text, View, ListView } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import {
  BarnListView,
  BarnListNavView,
  BarnListNavViewList,
  BarnListNavViewListButton,
  ButtonText
} from './src/styledcomponents';

export default class BarnaclesNative extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <BarnList endpoint="/top" {...props} />}
            />
            <Route
              path="/recent"
              render={props => <BarnList endpoint="/recent" {...props} />}
            />
            <Route
              path="/all"
              render={props => <BarnList endpoint="" {...props} />}
            />
          </Switch>
          <BarnListNavView>
            <BarnListNavViewList>
              <NavLink to="/">
                <ButtonText>Top</ButtonText>
              </NavLink>
              <NavLink to="/recent">
                <ButtonText>Recent</ButtonText>
              </NavLink>
              <NavLink to="/all">
                <ButtonText>All</ButtonText>
              </NavLink>
            </BarnListNavViewList>
          </BarnListNavView>
        </View>
      </NativeRouter>
    );
  }
}

AppRegistry.registerComponent('BarnaclesNative', () => BarnaclesNative);
