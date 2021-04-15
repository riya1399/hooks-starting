import React,{useContext }from 'react';
import Auth from './components/Auth'
import IngredientList from './components/Ingredients/IngredientList';
import Ingredients from './components/Ingredients/Ingredients';

import {AuthContext} from './context/auth-context'
const App = props => {
  const authContext=useContext(AuthContext)
  let content=<Auth/>
  if(authContext.isAuth){
    content=<Ingredients/>
   
  }
  return <Auth/>
};

export default App;
