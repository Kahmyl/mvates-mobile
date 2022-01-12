import { useEffect, useState, useCallback } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './src/routes'
import { store } from './src/redux';
import { Provider } from 'react-redux'


export default function App() {
  const [isReady, setIsReady] = useState(false);

  const getFonts = useCallback(async () => {
    await Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    });
    setIsReady(true);
  }, [Font]);
  
  useEffect(() => {
    getFonts();
  }, [getFonts]);

  if (!isReady) {
    return <AppLoading />;
  }else{
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
      
    );
  }
}