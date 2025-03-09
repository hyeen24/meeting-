import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const meeting = () => {
  return (
    <View style={style.container}>
      <Text>Meeting</Text>
    </View>
  )
}

export default meeting


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
