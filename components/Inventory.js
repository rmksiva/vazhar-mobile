import React, { Component, PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { DataStore, DataStoreType, User } from 'kinvey-react-native-sdk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class InventoryItem extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

type Props = {};
export default class Inventory extends Component<Props> {
  state = { items: [] };

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({ item }) => (
    <InventoryItem
      id={item._id}
      title={item.name}
    />
  );

  async componentDidMount() {
    await User.login('siva', '1234').then(res=> console.log("Login Suceess",res), err => console.log("err",err) );
    const collection = DataStore.collection('Inventory', DataStoreType.Network);
    const items = await collection.find().toPromise();
    console.log("Items",items);
    this.setState({ items });
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        // <View style={styles.container}>
          <FlatList
            data={this.state.items}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            style={styles.item}
          />
       // </View>
      );
    }

    return (null);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})