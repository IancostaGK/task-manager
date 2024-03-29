import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	eventName: {
		color: "#FDFCFE",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	input: {
		flex: 1,
		backgroundColor: "#1F1E25",
		height: 56,
		borderRadius: 5,
		padding: 16,
		fontSize: 16,
		color: "#FDFCFE",
		marginRight: 8,
	},
	btn: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31CFC7",
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		color: "white",
		fontSize: 24,
	},
	form: {
		width: "100%",
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42,
	},
	listEmptyText: {
		color: "#FFF",
		fontSize: 14,
		textAlign: "center",
	},
});
