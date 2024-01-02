import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
	task: { name: string; completed: boolean };
	onRemove: () => void;
	onComplete: () => void;
};

export function Task({ task, onRemove, onComplete }: Props) {
	return (
		<View style={styles.container}>
			<Text style={[styles.name, task.completed && styles.completedText]}>
				{task.name}
			</Text>

			{!task.completed && (
				<TouchableOpacity
					style={[styles.btn, styles.btnComplete]}
					onPress={onComplete}
				>
					<Ionicons name="checkmark" size={24} color="white" />
				</TouchableOpacity>
			)}

			<TouchableOpacity
				style={[styles.btn, styles.btnRemove]}
				onPress={onRemove}
			>
				<Ionicons name="trash" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
}
