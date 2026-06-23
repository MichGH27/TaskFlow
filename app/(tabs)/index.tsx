import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskFlowScreen() {
  return (
    <View style={styles.container}>
      <View style={headerStyles.header}>
        <Text style={headerStyles.title}>TaskFlow</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter Task"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.taskItem}>
        <MaterialIcons
          name="check-box-outline-blank"
          size={24}
          color="#555"
        />
        <Text style={styles.taskText}>Study React Native</Text>
      </View>

      <View style={styles.taskItem}>
        <MaterialIcons
          name="check-box-outline-blank"
          size={24}
          color="#555"
        />
        <Text style={styles.taskText}>Finish Assignment</Text>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
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
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});