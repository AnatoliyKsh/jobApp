import React from 'react'
import {View, Text, TextInput, Image, FlatList, TouchableOpacity} from 'react-native'
import {useState} from "react";
import {router, useRouter} from "expo-router";
import { icons, SIZES} from "../../../constants";
import styles from './welcome.style'

const jobTypes =["Full-time" , "Part-time", "Contract"];

const Welcome = () => {
    const router = useRouter()
    const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.username}> your Name </Text>
            <Text style={styles.welcomeMessage}> Fuck your self with your job</Text>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput} value="" onChange={()=>{}}
                           placeholder="what do you need!"/>
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
                <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/>
            </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
            <FlatList data={jobTypes} renderItem={({item})=>(
                <TouchableOpacity style={styles.tab(activeJobType, item)}
                onPress={()=>{
                    setActiveJobType(item)
                    router.push(`/search/${item}`)
                }}>

                    <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item}
                      contentContainerStyle={{columnGap: SIZES.small}}
                      horizontal
            />

        </View>


    </View>
  )
}

export default Welcome