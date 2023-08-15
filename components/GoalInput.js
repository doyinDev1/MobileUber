import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredtext) {
        setEnteredGoalText(enteredtext)

    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your course Goal'
                    value={enteredGoalText} />
                <View style={styles.buttonConatainer}>
                    <View style={styles.button}>

                        <Button
                            onPress={addGoalHandler}
                            title='Add Goal'
                            color='#5e0acc'
                            />
                    </View>
                    <View style={styles.button}>

                        <Button
                            onPress={props.onCancel}
                            title='Cancel'
                            color='#f32282'
                             />
                    </View>

                </View>

            </View>
        </Modal>
    )
};

export default GoalInput;


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        padding: 6,
        borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '120438',
        width: '100%',
        padding: 8,
        borderRadius: 6,
        padding: 16,
    },
    buttonConatainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }

});
