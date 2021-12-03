import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import useFonts hook
import { useFonts } from '@use-expo/font';
import { Footer } from './components';
import { AppContext } from './context/AppContext';
import { Audio, Bookmark, Home, Shop } from './screens';

const customFonts = {
	'Montserrat-Regular': require('./assets/fonts/regular.ttf'),
	'Montserrat-SemiBold': require('./assets/fonts/semibold.ttf'),
	'Libre-Regular': require('./assets/fonts/libre-regular.ttf')
};

export default function App() {
	const [ isLoaded ] = useFonts(customFonts);
	const [ tab, setTab ] = useState(1);

	const providerValue = useMemo(() => ({ tab, setTab }), [ tab, setTab ]);

	if (!isLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<AppContext.Provider value={providerValue}>
				<View style={styles.container}>
					{tab === 1 ? <Home /> : tab === 2 ? <Bookmark /> : tab === 3 ? <Audio /> : <Shop />}
					<Footer />
				</View>
			</AppContext.Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
