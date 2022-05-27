import React from "react"
import { View,Text, StyleSheet } from "react-native"

const RepositoryStats = (props) => (
        <View style={{flexDirection:'row' , justifyContent:'space-around'}}>
            <View>
                <Text style={styles.small.blod }>Clases: {props.clases}</Text>
            </View>
            <View>
                <Text style={styles.small.blod }>Desafios: {props.desafios}</Text>
            </View>
            <View>
                <Text style={styles.small.blod}>Documentacion: {props.documentacion}</Text>
            </View>
        </View>

)
const RepositoryItems = (props) => (
    <View key={props.id} style={styles.container }>
                <Text style={styles.color }>Nombre:{props.fullName}</Text>
                <Text style={styles.text }>Descripcion: {props.description}</Text>
                <Text style={styles.big.blod }>Lenguaje: {props.language}</Text>
                <RepositoryStats {...props}/>
            </View>   
)
export default RepositoryItems;


const styles = StyleSheet.create({
    container: {
        padding: 20,
         paddingBottom: 5,
          paddingTop: 5 
    },
    text:{
        fontSize: 12,
        color: 'grey',

    },
    blod:{
        fontWeight: 'bold',
    },
    blue:{
        color: '#09f',
    },
    big:{
        fontSize: 20,
    },
    small:{
        fontSize: 12,
    },   
    color:{
       color: '#066',
        

    }
    
})

const CambiarColor = () => {
    switch (props.fullName) {
        case 'react':
            return { color: '#00d' }
        case 'vue':
            return { color: '#60b' }
        case 'angular': 
            return { color: '#d06' }
        case 'Javascript':
            return { color: '#f09' }
        case 'Html':    
            return { color: '#066' }
        case 'Css':
            return { color: '#099' }
        default:
            return { color: '#000' }    

    }
}
