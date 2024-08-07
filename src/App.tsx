import React from 'react';
import { Navigatior } from './navigations/StackNavigation';
import { UserProvider } from './context/loggedInUser';


function App(): React.JSX.Element {

  return (
    <UserProvider>
      <Navigatior/>
    </UserProvider>
  );
}


export default App;
