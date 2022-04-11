//Import Statemets
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
const WordCounter = React.forwardRef((props, ref) => {
    const [txt, settxt] = useState(props.children.toString())
    const [wordcount, setWordcount] = useState(0);
    const [charcount, setcharcount] = useState(0);
    const [digitcount, setdigitcount] = useState(0);
    const {isWord,isDigit, isChar}=props;
    useEffect(() => {
        findTotalDigitCount()
        findTotalWordCount()
        findTotalCharCount()
    }, [txt])
    const findTotalDigitCount = () => {
        //Used the Ragular Expression to count the Digits
        let digitsArr = txt.match(/\d+/g);
        if(!digitsArr) {
            setdigitcount(0);
        }
        if (digitsArr) {
            setdigitcount(digitsArr.join("").length)
        }
    }
    const findTotalCharCount = () => {
        //Used the Ragular Expression to count the Character
        let word_count = txt.split(/\s+/)
        let joinWord=word_count.join('').trim().length
        if (txt.length<=0) {
            setcharcount(0);
        }else{
            setcharcount(joinWord-digitcount)
        }
    }
    const findTotalWordCount = () => {
        //Used the Ragular Expression to count the Words
        let word_count = txt.split(/\s+/)
        if (word_count[0]=="") {
            setWordcount(0);
        }else {
            setWordcount(word_count.length);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <Text style={styles.paragraph}>Paragraph</Text>
                <View style={styles.underline} />
                <View style={styles.uneditText}>
                    <TextInput multiline value={txt.toLowerCase()}  style={{fontFamily:'Poppins-Regular'}} editable={false}></TextInput>
                </View>
                <View style={styles.underline} />
                <View style={styles.View2}>
                    <View style={styles.View1_SubView3}>
                        <Text style={styles.char_style}>Char:{isChar? charcount:0}</Text>
                        <Text style={styles.word_style}>Words:{isWord ? wordcount:0}</Text>
                        <Text style={styles.digit_style}>Digits:{isDigit ?digitcount:0}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.editable_text_style}>
                <TextInput
                    placeholder="Enter Text"
                    multiline={true}
                    ref={ref} value={txt} onChangeText={(text) => settxt(text)}
                ></TextInput>
            </View>
        </View>
    )

});
const CounterComponent = () => {
    const ref = React.createRef();
    return (
        <WordCounter ref={ref} isWord={true} isDigit={false} isChar={true}>
            {'Hello \n12345 \nThe quick brown fox jumps over the lazy dog'}
        </WordCounter>

    )
}

export default CounterComponent
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    underline: {
        borderWidth: 0.3,
        borderColor: "#000000",
        width: '80%',
        alignSelf: 'center',
        marginTop: 5
    },
    View1: {
        width: 315,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.19,
        shadowRadius: 0,
        marginTop: 144,
        marginLeft: 27,
        borderRadius:20
    },
    paragraph: {
        color: "#121212",
        height: 20,
        width: 76,
        marginTop: 11,
        marginLeft: 20
    },
    uneditText: {
        color: "#121212",
        width: 276,
        marginTop: 28,
        marginLeft: 20
    },
    View2: {
        width: 286,
        height: 35,
        backgroundColor: "#E6E6E6",
        flexDirection: "row",
        marginLeft: 20
    },
    char_style: {
        color: "#121212",
        width: 80,
        height: 17,
        marginTop: 12
    },
    word_style: {
        color: "#121212",
        marginLeft: 34
    },
    digit_style: {
        color: "#121212",
        width: 62,
        height: 17,
        marginLeft: 33,
        marginTop: 12
    },
    View1_SubView3: {
        height: 29,
        flexDirection: "row",
        flex: 1,
        marginRight: 19,
        marginLeft: 14,
        marginTop: 5
    },
    editable_text_style: {
        color: "#121212",
        height: 145,
        width: 253,
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 52,
        marginLeft: 61
    }
});
