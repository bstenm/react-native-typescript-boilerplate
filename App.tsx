import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface iHomeProps {};
interface iHomeState {};

export default class App extends React.Component<iHomeProps, iHomeState> {
      render() {
            return (
                  <View style={styles.container}>
                        <Text>Welcome!</Text>
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
});
