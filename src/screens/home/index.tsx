import { useState } from "react";
import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Task } from "../../components/task";
import { styles } from "./styles";

export function Home() {
	const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>(
		[]
	);
	const [taskName, setTaskName] = useState("");

	function handleAddTask() {
		if (!taskName) return Alert.alert("You must specify a task name");

		if (!!tasks.find(({ name }) => name === taskName)) {
			return Alert.alert("Task already exists");
		}

		setTasks((prevState) => [
			...prevState,
			{ name: taskName, completed: false },
		]);
		setTaskName("");
	}

	function handleRemoveTask(task: string) {
		Alert.alert("Remove Task", `Are you sure you want to remove "${task}"?`, [
			{
				text: "Sim",
				style: "destructive",
				onPress: () =>
					setTasks((prevState) =>
						prevState.filter(({ name }) => name !== task)
					),
			},
			{ text: "No", style: "cancel" },
		]);
	}

	function handleCompleteTask(index: number, task: string) {
		Alert.alert(
			"Complete Task",
			`Are you sure you want to complete "${task}"?`,
			[
				{
					text: "Yes",
					style: "default",
					onPress: () =>
						setTasks((prevState) => {
							const updatedTasks = [...prevState];
							updatedTasks[index] = { ...updatedTasks[index], completed: true };
							return updatedTasks;
						}),
				},
				{ text: "No", style: "cancel" },
			]
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Task Manager</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Task Name"
					placeholderTextColor="#6B6B6B"
					onChangeText={setTaskName}
					value={taskName}
				/>

				<TouchableOpacity style={styles.btn} onPress={handleAddTask}>
					<Text style={styles.btnText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={tasks}
				keyExtractor={({ name }) => name}
				renderItem={({ item, index }) => (
					<Task
						key={item.name}
						task={item}
						onRemove={() => handleRemoveTask(item.name)}
						onComplete={() => handleCompleteTask(index, item.name)}
					/>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>Add your first Task</Text>
				)}
			/>
		</View>
	);
}
