import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TelaLogin from "./src/telas/TelaLogin";
import TelaDetalhes from "./src/telas/TelaDetalhes";
import TelaPesquisa from "./src/telas/TelaPesquisa";

const Stack = createStackNavigator()

const App = () =>{

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TelaLogin'
          component={TelaLogin}
          options={{headerShown:false}}
        />
        <Stack.Screen name='TelaDetalhes' component={TelaDetalhes}
          options={{headerShown:false}}
        />
        <Stack.Screen name='TelaPesquisa' component={TelaPesquisa}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App