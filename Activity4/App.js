import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  CheckBox,
  View
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
    title: 'Take Breakfast',
    isSelected: false,

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Take Bath',
    isSelected: false,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasda',
    title: 'Go toothbrush',
    isSelected: false,
 },
    
    {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasdasdasda',
    title: 'Start my honda click fully paid',
    isSelected: false,
 },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Prepare to school',
    isSelected: false,
 },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Go School',
    isSelected: false,
 },
       {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Prepare for AMC Subject',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Attending AMC Class',
    isSelected: false,
},
    


  {
    id: '58694a0f-3da1-471f-bd96-145571e29dabaasdawd',
    title: 'Eat Lunch',
    isSelected: false,
 },
           {
    id: '58694a0f-3da1-471f-bd96-145571e29asdawdadawawdba',
    title: 'Prepare for AppDev Subject',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d3',
    title: 'Attending APPDEV Class',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29daa',
    title: 'Go Home',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29daaa',
    title: 'Go to work',
    isSelected: false,
},
      {
    id: '58694a0f-3da1-471f-bd96-145571e29dabasdadasda',
    title: 'Project Alignment with team',
      isSelected: false,
},
  

    {
    id: '58694a0f-3da1-471f-bd96-145571e29ddasdaswdaba',
    title: 'Take a coffee break',
    isSelected: false,
},
      {
    id: '58694a0f-3da1-471f-bd96-145571e29dasdasdawaba',
    title: 'play valorant on my break',
    isSelected: false,
},

   {
    id: '58694a0f-3da1-471f-bd96-145571e29dasdawdasdawaba',
    title: 'Go to back work',
    isSelected: false,
},

    {
    id: '58694a0f-3da1-471f-bd96-145571e29asdawdaba',
    title: 'Finish task on work',
    isSelected: false,
},
 
    {
    id: '58694a0f-3da1-471f-bd96-145571e29daba',
    title: 'Research some react native codes',
    isSelected: false,
},
    {
    id: '58694a0f-3da1-471f-bd96-145571adwasdawe29daba',
    title: 'Eat Dinner',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29asdadswdaba',
    title: 'Video call parents',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145571asdawdawdasdasde29daba',
    title: 'Play mobile games',
    isSelected: false,
},
    {
    id: '58694a0f-3da1-471f-bd96-145571e2ddadad9daba',
    title: 'Take night bath',
    isSelected: false,
},
    {
    id: '58694a0f-3da1-471f-bd96-145571asdasde29daba',
    title: 'Prepare Sleep',
    isSelected: false,
},
  {
    id: '58694a0f-3da1-471f-bd96-145asdasd571e29daba',
    title: 'Go to sleep',
    isSelected: false,
},
]; // add is Selected boolean in 2d array


const COLORS = [
  '#FF5733',  // Red-Orange
  '#33FF57',  // Green
  '#3357FF',  // Blue
  '#FF33A1',  // Pink
  '#FFCD33',  // Yellow
  '#8E44AD',  // Purple
  '#3498DB',  // Light Blue
  '#F39C12',  // Golden Yellow
  '#D35400',  // Orange
  '#2ECC71',  // Emerald Green
  '#9B59B6',  // Amethyst Purple
  '#1ABC9C',  // Turquoise
  '#E74C3C',  // Red
  '#16A085',  // Teal
  '#34495E',  // Dark Blue
  '#F1C40F',  // Sunflower Yellow
  '#2C3E50',  // Dark Navy Blue
  '#E67E22',  // Carrot Orange
  '#7F8C8D',  // Grey
  '#95A5A6',  // Light Grey
  '#2980B9',  // Bright Blue
  '#C0392B',  // Strong Red
  '#16A085',  // Greenish Teal
  '#BDC3C7',  // Light Silver
  '#27AE60',  // Bright Green
  '#8E44AD'   // Purple
];

var count;
const App = () => {
  const [tasks, setTasks] = useState(DATA); // assign initial task collection

 // Toggle task selection (change isSelected Property)
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isSelected: !task.isSelected } : task
    );
    setTasks(updatedTasks);
  };

  
  const doneTasks = tasks.filter(task => task.isSelected).length; // to count all completed task (isSelected to true)

  
  const renderItem = ({item, index}) => { // returning of flatlists items
    const backgroundColor = item.isSelected ? 'blue' : COLORS[index % COLORS.length];
    const color = item.isSelected ? 'white' : 'black';
    return (
       //trigger function toggle tasks if onpress and on value change in touchableopac and checkbox
      <TouchableOpacity onPress={() => toggleTask(item.id)} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.smallText, { color: color }]}>{item.title}</Text>
        <CheckBox
          value={item.isSelected}
          onValueChange={() => toggleTask(item.id)}
        />
      </TouchableOpacity>       
    );

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>"Dennis Todo List"</Text>
          <SafeAreaView  style={styles.item} >
              <Text style={styles.title}>Done: <Text style={{  borderWidth: 0.5, borderColor: 'black',padding: 5, textAlign:'center'}}>{doneTasks} </Text></Text>
              <Text style={styles.title}>Not Done:  <Text style={{  borderWidth: 0.5, borderColor: 'black',padding:5, textAlign:'center'}}>{tasks.length - doneTasks}</Text></Text> 
          </SafeAreaView>

        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={tasks} // instead of returning task by ID return all updated tasks collection
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    // textAlign: "center",

  },
  smallText: {
    fontSize: 18,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
});

export default App;