import { Text, View,TextInput,StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";



export default function SearchBar({term,onChangeTerm,onSubmitTerm}){
    
    return(
        <View>
            <View style={styles.inputBackground}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput style={styles.input} value={term} placeholder="Ara" onEndEditing={onSubmitTerm}  onChangeText={onChangeTerm} autoCorrect={false} autoCapitalize='none' />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
       flex:1, 
       fontSize:15
    },
    
    inputBackground:{
        flexDirection:'row',
        padding:10,
        gap:5,
        backgroundColor:'lightgray',
        margin:5,
        borderRadius:10
    }
})
