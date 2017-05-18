import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const PapayaView = styled.View`
  background-color: papayawhip;
  flex: 1;
`;

export const BarnActivityIndicator = styled.ActivityIndicator`
  margin-top: 20;
  background-color: white;
  flex: 0.92;
`;

export const BarnListView = styled.ListView`
  background-color: white;
  flex: 0.92;
  margin-top: 20;
  padding: 0 10;
`;

export const BarnViewDivider = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const BarnListItemLeft = styled.View`
  flex: 0.9;
  padding: 10 0;
`;

export const BarnListItemTouchable = styled.TouchableOpacity`

`;

export const BarnListItemScore = styled.Text`
  color: papayawhip;
  font-size: 12;
  background-color: tomato;
  padding: 3 5;
  border-radius: 10;
  text-align: center;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 1 0;
`;

export const BarnListTagsView = styled.View`
  flex-direction: row;
  flex: 0.9;
  flex-wrap: wrap;
`;

export const BarnListItemTag = styled.Text`
  background-color: papayawhip;
  color: #D699A1;
  padding: 3 4;
  margin-top: 4;
  margin-right: 4;
  font-size: 14;
  border-radius: 10;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 1 0;
`;

export const BarnListItemRight = styled.TouchableOpacity`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`;

export const BarnListItemAuthor = styled.Text`
  font-size: 12;
  color: #D699A1;
`;

export const BarnListItemTitle = styled.Text`
  font-size: 18;
  color: tomato;
  text-shadow-color: papayawhip;
  text-shadow-radius: .8;
  text-shadow-offset: 1 0;
`;

export const BarnListItemSubTitle = styled.Text`
  font-size: 12;
  color: grey;
  text-shadow-color: papayawhip;
  text-shadow-radius: .8;
  text-shadow-offset: 1 0;
`;

export const BarnListNavView = styled.View`
  background-color: papayawhip;
  flex: 0.08;
  padding: 2;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 2 0;
`;

export const BarnListNavViewList = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BarnListNavViewListButton = styled(Link)`
  padding: 10 20;
  border-radius: 2;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 1 0;
  ${props => props.isExact && `
    background-color: #ffffff!important;`}
`;

export const ButtonText = styled.Text`
  color: tomato;
`;
