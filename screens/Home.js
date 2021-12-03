import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HorizontalBooksListTile, TopTab, VerticalBooksListTile } from '../components';
import { books, COLORS, FONTS, SIZES } from '../constants';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Home = () => {
	const [ textInput, setTextInput ] = useState('');

	return (
		<View style={styles.root} showsVerticalScrollIndicator={false}>
			{/* Top Tab Bar */}
			<TopTab>
				<TouchableOpacity>
					<Ionicons name="menu-outline" size={24} color="black" />
				</TouchableOpacity>
				<View style={styles.right}>
					<TouchableOpacity>
						<FontAwesome5 name="bell" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source={{
								uri:
									'https://images.pexels.com/photos/7222370/pexels-photo-7222370.jpeg?cs=srgb&dl=pexels-alena-darmel-7222370.jpg&fm=jpg'
							}}
							style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
						/>
					</TouchableOpacity>
				</View>
			</TopTab>

			{/* Text Input */}
			<View style={styles.textInputArea}>
				<FontAwesome name="search" size={20} color="black" />
				<TextInput
					value={textInput}
					placeholder={'Title, author or topics'}
					style={styles.textInput}
					onChangeText={setTextInput}
					fontStyle={{ ...FONTS.body3 }}
				/>
			</View>

			<View>
				<Text style={{ marginTop: SIZES.padding2 * 2, fontWeight: '900', ...FONTS.body2 }}>New & Trending</Text>
				<FlatList
					data={books}
					contentContainerStyle={{
						marginTop: SIZES.padding2 * 1.5,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 4
						},
						shadowOpacity: 0.53,
						shadowRadius: 13.97,

						elevation: 12
					}}
					keyExtractor={(item) => `${item.key}`}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => <HorizontalBooksListTile item={item} index={index} />}
				/>
			</View>
			<Text style={{ marginVertical: SIZES.padding2 * 2, fontWeight: '900', ...FONTS.body2 }}>Audiobooks</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				{books.map((book, index) => <VerticalBooksListTile book={book} index={index} />)}
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		paddingHorizontal: SIZES.padding2 * 2,
		paddingTop: SIZES.padding * 7,
		flex: 1,
		backgroundColor: COLORS.tertiary,
		marginBottom: 80,
		zIndex: 1,
		borderBottomEndRadius: 35,
		borderBottomStartRadius: 35
	},
	right: { flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between' },
	textInputArea: {
		marginTop: SIZES.padding2,
		paddingVertical: SIZES.padding,
		paddingHorizontal: SIZES.padding2,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.radius,
		flexDirection: 'row',
		alignItems: 'center'
	},
	textInput: {
		marginLeft: SIZES.padding2 * 4
	}
});
