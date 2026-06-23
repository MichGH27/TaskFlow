import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


export default function TaskFlowScreen() {

  const [task, setTask] = useState('');

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Study React Native',
      completed: false,
    },
    {
      id: '2',
      title: 'Finish Assignment',
      completed: false,
    },
  ]);


  const addTask = () => {

    if (task.trim() === '') {
      return;
    }


    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: task,
        completed: false,
      },
    ]);


    setTask('');

  };


  return (

    <View style={styles.container}>


      <View style={headerStyles.header}>

        <Text style={headerStyles.title}>
          TaskFlow
        </Text>

      </View>



      <View style={styles.inputRow}>


        <TextInput

          placeholder="Enter Task"

          value={task}

          onChangeText={setTask}

          style={styles.input}

        />



        <TouchableOpacity

          style={styles.addButton}

          onPress={addTask}

        >

          <MaterialIcons

            name="add"

            size={24}

            color="white"

          />


        </TouchableOpacity>


      </View>




      {tasks.map((item)=>(

        <View

          key={item.id}

          style={styles.taskRow}

        >

          <MaterialIcons

            name="check-box-outline-blank"

            size={24}

            color="#555"

          />


          <Text style={styles.taskText}>

            {item.title}

          </Text>


        </View>


      ))}


    </View>

  );

}




const headerStyles = StyleSheet.create({

  header: {

    marginBottom: 25,

  },


  title: {

    fontSize: 32,

    fontWeight: 'bold',

  },


});




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

    paddingTop: 70,

    paddingHorizontal: 20,

  },


  inputRow: {

    flexDirection: 'row',

    alignItems: 'center',

  },


  input: {

    flex: 1,

    height: 50,

    borderRadius: 12,

    backgroundColor: '#f5f5f5',

    paddingHorizontal: 15,

    marginRight: 10,

  },


  addButton: {

    width: 50,

    height: 50,

    borderRadius: 12,

    backgroundColor: '#4F46E5',

    justifyContent: 'center',

    alignItems: 'center',

  },


  taskRow: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fafafa',

    padding: 15,

    borderRadius: 12,

    marginTop: 15,

  },


  taskText: {

    marginLeft: 10,

    fontSize: 16,

  },


});