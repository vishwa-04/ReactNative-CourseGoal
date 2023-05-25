import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles';
function GoalItem(props: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <View>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
      <View>
        <Button title="Delete" />
      </View>
    </View>
  );
}

export default GoalItem;
