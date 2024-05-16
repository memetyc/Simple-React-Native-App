import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Button
} from "react-native";
import React, { useEffect, useState } from "react";
import useDetailResult from "../../hooks/useDetailResult";
import MapView,  {Marker}  from "react-native-maps";

// AIzaSyCTCo2-OqZoqrIvYZxJAGsvhwjARvp8uE8
export default function Detail({ route }) {
  const { id } = route.params;
  const [searchDetailApi, result,errorMessage] = useDetailResult();
  const [location,setLocation] = useState(null)

  useEffect(() => {
    searchDetailApi(id);
  }, []);
  useEffect(()=>{
    setLocation(result.coordinates)
  },[result])

  console.log(errorMessage);
  if(errorMessage !== ''){
    return(
      <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        {errorMessage}
      </Text>
    </View>
    )
   
  }
  const call = () => {
    Linking.openURL(`tel:${result.phone}`);
  };
  const webSite = () => {
    Linking.openURL(`${result.url}`);
  };

  const openMap = () => {
    Linking.openURL(`http://maps.google.com/maps?q=${location.latitude},${location.longitude}`);
  };

  return (
    <View style={styles.container}>
      {result.is_closed ? (
        <View style={styles.isClose}></View>
      ) : (
        <View style={styles.isOpen}></View>
      )}
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Yıldızlı Restoran,{result.review_count} degerlendirme.
      </Text>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <View
        style={{
          height: 200,
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 10,
        }}
      >
        {location && (
            
          <MapView
            style={styles.map}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
          </MapView>
          
        )}
        <TouchableOpacity style={styles.mapButton} onPress={openMap}>
          <Text style={styles.phone}>Haritayı Aç</Text>
        </TouchableOpacity>
       
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={webSite}>
          <Text style={styles.phone}>Web sitesini Ziyaret Et</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={call}>
          <Text style={styles.phone}>Randevu almak için ara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  map: {
    width: "100%",
    height: '75%',
    marginBottom:10
  },
  mapButton:{
    
    padding: 10,
    borderRadius: 5,
    backgroundColor: "orange",
  },
  phone: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    // fontSize:15,
    // marginTop:10
  },
  isOpen: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    position: "absolute",
    borderRadius: "50%",
    right: 0,
  },
  isClose: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: "50%",
    right: 0,
  },
  button: {
    padding: 10,

    borderRadius: 5,
    backgroundColor: "orange",
  },
});
