import React, { Component } from 'react';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { ListView, RefreshControl, Linking } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import {
  StatusBar,
  PapayaView,
  BarnListView,
  BarnViewDivider,
  BarnListItemLeft,
  BarnListItemTouchable,
  BarnListItemScore,
  BarnListTagsView,
  BarnListItemTag,
  BarnListItemRight,
  BarnListItemAuthor,
  BarnListItemTitle,
  BarnListItemSubTitle,
  BarnActivityIndicator
} from './styledcomponents';

export default class BarnList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      refreshing: true,
      canLoadMoreContent: false,
      currentPage: 1,
      isFetching: true
    };

    this.handleClick = this.handleClick.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._loadMoreContentAsync = this._loadMoreContentAsync.bind(this);
  }

  componentWillMount() {
    this._mounted = true;
    fetch(
      `http://barnacles.nullable.tk${this.props.endpoint}/${this.state.currentPage}`
    )
      .then(res => res.json())
      .then(results => {
        if (!this._mounted) return;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(results),
          refreshing: false,
          canLoadMoreContent: true,
          isFetching: false
        });
      })
      .catch(error => console.log(error));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([]),
      canLoadMoreContent: false,
      isFetching: true
    });
    fetch(`http://barnacles.nullable.tk${nextProps.endpoint}/1`)
      .then(res => res.json())
      .then(results => {
        if (!this._mounted) return;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(results),
          canLoadMoreContent: true,
          isFetching: false
        });
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    fetch(`http://barnacles.nullable.tk${this.props.endpoint}/1`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(results),
          refreshing: false,
          currentPage: 1
        });
      })
      .catch(error => console.log(error));
  }

  _loadMoreContentAsync() {
    this.setState({
      refreshing: true,
      canLoadMoreContent: false
    });
    fetch(
      `http://barnacles.nullable.tk${this.props.endpoint}/${this.state.currentPage + 1}`
    )
      .then(res => res.json())
      .then(results => {
        if (!this._mounted) return;
        const data = [...this.state.dataSource._dataBlob.s1, ...results];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          refreshing: false,
          currentPage: this.state.currentPage + 1,
          canLoadMoreContent: results.length > 0
        });
        setTimeout(() => {
          this.setState({ canLoadMoreContent: true });
        }, 5000);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <PapayaView>
        <StatusBar />
        {this.state.isFetching
          ? <BarnActivityIndicator color="tomato" size="large" />
          : <BarnListView
              renderScrollComponent={props => <InfiniteScrollView {...props} />}
              enableEmptySections={true}
              refreshControl={
                <RefreshControl
                  tintColor="tomato"
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
              canLoadMore={this.state.canLoadMoreContent}
              onLoadMoreAsync={this._loadMoreContentAsync}
              distanceToLoadMore={0}
              dataSource={this.state.dataSource}
              renderRow={rowData => (
                <BarnViewDivider>
                  <BarnListItemLeft>
                    <BarnListItemAuthor>@{rowData.author}</BarnListItemAuthor>
                    <BarnListItemTouchable
                      onPress={() => this.handleClick(rowData.url)}>
                      <BarnListItemTitle>
                        {rowData.title}
                      </BarnListItemTitle>
                    </BarnListItemTouchable>

                    <BarnListItemSubTitle>
                      {rowData.domain}
                    </BarnListItemSubTitle>
                    <BarnListTagsView>
                      {rowData.tags.map((tag, index) => {
                        return (
                          <BarnListItemTag key={index}>{tag}</BarnListItemTag>
                        );
                      })}
                    </BarnListTagsView>
                  </BarnListItemLeft>
                  <BarnListItemRight>
                    <BarnListItemScore>{rowData.score}</BarnListItemScore>
                  </BarnListItemRight>
                </BarnViewDivider>
              )}
            />}
      </PapayaView>
    );
  }
}
