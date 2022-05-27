import React from 'react'
import { Text ,StyleSheet} from 'react-native'
import { Children } from 'react/cjs/react.production.min'

const styles = StyleSheet.create({

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
    }
    
})

export default function StyledText ({text,blod,blue,big,small}) {
    const textStyles = [
        styles.text,
        blod && styles.blod,
        blue && styles.blue,
        big && styles.big,
        small && styles.small
    ]

    return(
        <Text style={textStyles}>
            {children}
        </Text>
 )
}


