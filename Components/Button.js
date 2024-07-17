import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({nut,OP}) => {
  return (
    <View>
        <TouchableOpacity onPress={OP}>
        <View style={styles.btn}>
      <Text style={{color:'black',fontWeight:'bold'}}>{nut}</Text>
    </View>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
btn:{
    height:35,
    width:100,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
}

})