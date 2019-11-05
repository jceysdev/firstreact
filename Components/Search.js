import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class Search extends React.Component {
    render(){
        return(
          <View style={{ marginTop: 20, backgroundColor: red}}>
          <Text>Hello word!</Text>
        <TextInput style={{ marginLeft: 5, marginRight: 5, height: 50, borderColor: 'pink', borderWidth: 1, paddingLeft: 5 }} placeholder='Titre du film'/>
          <Button title='Rechercher' onPress={() => {}}/>
      </View>
        )
    }
}
export default Search
