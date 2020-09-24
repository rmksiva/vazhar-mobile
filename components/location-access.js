import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';


export default function LocationAccess() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      let loc_str =  [location.coords.latitude,location.coords.longitude].join("+");
      let api_key = "e72cbe87307e4a5887155e8b544e4ea8";
      let api_url = `https://api.opencagedata.com/geocode/v1/json?q=${loc_str}&key=${api_key}`;
      console.log(api_url);
      let res = await axios.get(api_url).then(res=>{
        let resData = res.data.results[0];
        let location_updated =  { latitude : resData.geometry.lat,
            longitude : resData.geometry.lng ,
            displayName : resData.formatted,
            ...resData.components
        
        };

        setLocation(location_updated);
      },err => console.log(err));   
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location.displayName;
  }

  return (
    
      <Text>{text}</Text>
  );
}
