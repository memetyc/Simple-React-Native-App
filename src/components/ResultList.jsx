import { FlatList, StyleSheet, Text, View,Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native'

export default function ResultList({results,title}) {
    const navigation = useNavigation()

    
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {
      results.length > 0 ?
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={results} renderItem={({item})=>{
        return(
            <TouchableOpacity onPress={()=> navigation.navigate("Detail",{id:item.id})}>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
      }} />
      :<Text style={{fontSize:20,textAlign:'center'}}>Herhangi bir restorant bulunamadı</Text>
    }
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
})