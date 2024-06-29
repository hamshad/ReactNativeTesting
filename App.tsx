import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TouchableOpacity
          onPress={() => console.log('Hello World')}
          style={{
            padding: 24,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text accessibilityRole="text" style={styles.sectionTitle}>
            The Basics
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
