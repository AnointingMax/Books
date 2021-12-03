import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { EvilIcons } from '@expo/vector-icons';

const VerticalBooksListTile = ({ book, index }) => {
	return (
		<TouchableOpacity style={styles.wrapper(index)}>
			<View style={styles.wrapper(index)}>
				<Image source={{ uri: book.image }} resizeMode="cover" style={styles.image} />
				<View>
					<Text style={[ styles.text, { ...FONTS.body3 } ]}>{book.title}</Text>
					<Text style={[ styles.text, { color: COLORS.gray, ...FONTS.body5 } ]}>{book.author}</Text>
					<Text style={[ styles.text, { alignItems: 'flex-end', ...FONTS.body6 } ]}>
						{book.rating.stars} stars | {book.rating.number} Ratings
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default VerticalBooksListTile;

const styles = StyleSheet.create({
	wrapper: (index) => ({
		marginTop: index === 0 ? 0 : 10,
		flexDirection: 'row',
		alignItems: 'center'
	}),
	image: { width: 100, height: 100, borderRadius: 50, marginRight: 15 },
	text: {
		marginBottom: 1
	}
});
