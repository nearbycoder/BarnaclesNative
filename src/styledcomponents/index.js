import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const PapayaView = styled.View`
  flex: 1;
`;

export const StatusBar = styled.View`
  background-color: #FBFCFF;
  flex: 0.03;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 2 0;
  z-index: 100;
`;

export const BarnActivityIndicator = styled.ActivityIndicator`
  background-color: white;
  flex: 0.91;

`;

export const BarnListView = styled.ListView`
  background-color: #F4F4F9;
  flex: 0.91;
`;

export const BarnViewDivider = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0 10;
  background-color: #F4F4F9;
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
  background-color: #E76F51;
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
  margin-top: 4;
  margin-right: 4;
  color: papayawhip;
  font-size: 12;
  background-color: #2A9D8F;
  padding: 3 5;
  border-radius: 10;
  text-align: center;
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
  color: #586F7C;
`;

export const BarnListItemTitle = styled.Text`
  font-size: 18;
  color: tomato;
`;

export const BarnListItemSubTitle = styled.Text`
  font-size: 12;
  color: grey;
`;

export const BarnListNavView = styled.View`
  background-color: #FBFCFF;
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
  border-radius: 1;
  background-color: #97CDC6!important;
  shadow-color: grey;
  shadow-radius: .8;
  shadow-opacity: .4;
  shadow-offset: 1 0;
  
  ${props => props.isExact && `
    background-color: #2F9C8E!important;
  `}
`;

export const ButtonText = styled.Text`
  color: #F4F4F9;
`;
