import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState('');

  const [tasks, setTasks] = useState([]);

  // CREATE
  const handleAddTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  // UPDATE
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // DELETE
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={headerStyles.header}>
        <Text style={headerStyles.title}>TaskFlow</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <MaterialIcons
            name="add"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* READ */}
      {tasks.map((item) => (
        <View key={item.id} style={styles.taskRow}>
          <TouchableOpacity
            onPress={() => handleToggleTask(item.id)}
          >
            <MaterialIcons
              name={
                item.completed
                  ? 'check-box'
                  : 'check-box-outline-blank'
              }
              size={24}
              color={
                item.completed
                  ? '#2E5BBA'
                  : '#5A6472'
              }
            />
          </TouchableOpacity>

          <Text
            style={[
              styles.taskText,
              item.completed && styles.completedTask,
            ]}
          >
            {item.title}
          </Text>

          <TouchableOpacity
            onPress={() => handleDeleteTask(item.id)}
          >
            <MaterialIcons
              name="delete"
              size={22}
              color="#E53935"
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F2A44',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginRight: 10,
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2E5BBA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#1F2A44',
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

