import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {styles} from '../styles';

function GoalInput(props: any) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
    console.log(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Your Goal"
        style={styles.input}
        onChangeText={enteredText => goalInputHandler(enteredText)}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={e => props.onAdd(enteredGoal)} />
    </View>
  );
}

export default GoalInput;
