import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component<{}, {}> {
      render() {
            const m = {
                  truc: 'bidule'
            };
            return (
                  <View style={styles.container}>
                        <Text d={m}>Welcome!</Text>
                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            alignItems: 'center',
            backgroundColor: '#fff',
            flex: 1,
            justifyContent: 'center',
      },
});
