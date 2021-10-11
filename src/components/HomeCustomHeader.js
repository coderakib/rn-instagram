import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Styles } from "../config";

const HomeCustomHeader = ({ messagePress }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.icon}
				resizeMode="contain"
				source={require("../../assets/images/header-logo.png")}
			/>
			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconContainer}>
					<FontAwesome name="plus-square-o" size={26} color={Colors.light} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} onPress={messagePress}>
					<MaterialCommunityIcons
						name="facebook-messenger"
						size={25}
						color={Colors.light}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeCustomHeader;

const styles = StyleSheet.create({
	container: {
		height: 55,
		backgroundColor: Colors.dark,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 0,
		width: "100%",
		paddingHorizontal: 10,
	},
	headerIcons: {
		flexDirection: "row",
	},
	iconContainer: {
		marginHorizontal: 11,
	},
	icon: {
		width: 115,
		height: 50,
	},
});