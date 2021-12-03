import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';

const Bookmark = () => {
	return (
		<View style={styles.root}>
			<Text>Bookmarks</Text>
		</View>
	);
};

export default Bookmark;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		marginBottom: 80,
		zIndex: 1,
		borderBottomEndRadius: 35,
		borderBottomStartRadius: 35
	}
});
