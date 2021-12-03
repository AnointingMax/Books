import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopTab = ({ children }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: 50,
				width: '100%'
			}}
		>
			{children}
		</View>
	);
};

export default TopTab;
