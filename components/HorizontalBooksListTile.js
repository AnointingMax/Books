import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const HorizontalBooksListTile = ({ item, index }) => {
	return (
		<TouchableOpacity style={styles.wrapper(index)}>
			<Image source={{ uri: item.image }} resizeMode="cover" style={styles.image} />
		</TouchableOpacity>
	);
};

export default HorizontalBooksListTile;

const styles = StyleSheet.create({
	wrapper: (index) => ({
		marginLeft: index === 0 ? 0 : 15
	}),
	image: { width: 120, height: 200 }
});
