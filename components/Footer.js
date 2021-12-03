import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AppContext } from '../context/AppContext';

const Footer = () => {
	const { tab, setTab } = useContext(AppContext);
	return (
		<View style={styles.footerStyle}>
			<TouchableOpacity onPress={() => setTab(1)}>
				<MaterialCommunityIcons name="bookshelf" size={24} color={tab === 1 ? COLORS.black : COLORS.white} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setTab(2)}>
				<Ionicons name="ios-bookmark-outline" size={24} color={tab === 2 ? COLORS.black : COLORS.white} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setTab(3)}>
				<FontAwesome5 name="headphones" size={24} color={tab === 3 ? COLORS.black : COLORS.white} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setTab(4)}>
				<MaterialCommunityIcons
					name="shopping-outline"
					size={24}
					color={tab === 4 ? COLORS.black : COLORS.white}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
	footerStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: COLORS.primary,
		flexDirection: 'row',
		height: 110,
		justifyContent: 'space-around',
		paddingTop: 45
	}
});
