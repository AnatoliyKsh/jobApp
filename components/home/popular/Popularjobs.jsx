import React from 'react'
import { View, Text, TouchableOpacity,FlatList, ActivityIndicator } from 'react-native'
import { useState} from "react";
import {router, useRouter} from "expo-router";
import {COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import styles from './popularjobs.style'

const Popularjobs = () => {
    const router  = useRouter();
   const {data, isLoading, error} = useFetch
   ('search',{
       query: 'React developer',
       num_pages: 1
   })
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}> Popular jobs</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size={"large"} color={COLORS.primary}/>
            ) : error ?(
                    <Text> Someting worong, sorry</Text>) :(
                <FlatList data={[1,2,4,5,]} renderItem={({item})=>(
                    <PopularJobCard item ={item}/>
                )}
                          keyExtractor={item=>item?.job_id}
                          contentContainerStyle={{columnGap:SIZES.medium}}
                          horizontal
                    />)}
        </View>
    </View>
  )
}

export default Popularjobs