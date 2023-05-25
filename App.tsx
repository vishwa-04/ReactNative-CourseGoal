/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<script src="http://192.168.10.97:8097" />;
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals([...courseGoals, goalTitle]);
  };
  return (
    <View style={styles.screens}>
      <GoalInput onAdd={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={ele => <GoalItem title={ele.item} />}
      />
    </View>
  );
}

export default App;
