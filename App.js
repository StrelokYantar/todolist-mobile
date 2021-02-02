import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {

  const [taskInput, setTaskInput] = useState('')
  const [tasks, steTasks] = useState([
    {id: 1, title: "Faire la dance du chameau"},
    {id: 1, title: "Dire Bonjour à Matthieu et Bastien"},
    {id: 1, title: "Demander à Daishi de nous faire un dessin"}
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo Liste</Text>
      <TextInput style={styles.input}
        value={taskInput} onChangeText={txt => setTaskInput(txt)} />

      <View style={styles.main}>
        {tasks.map(task => {
          return <Text key={task.id} style={styles.task}>{task.title}</Text>
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.Create({
  container: {
    flex: 1,
    backgroundColor: '#bcbcbc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center'
  },
  main: {
    marginTop: 20,
    width: 300,
  },
  task: {
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  title: {
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
})