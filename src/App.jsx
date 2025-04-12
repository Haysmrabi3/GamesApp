import React from 'react';
import Home from './Components/Home/Home.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut.jsx';
import AllGames from './Components/Games/AllGames.jsx';
import Stores from './Components/Stores/Stores.jsx';
import Category from './Components/Category/Category.jsx';
import Creators from './Components/Creators/Creators.jsx';
import SpecificCreator from './Components/SpecificCreator/SpecificCreator.jsx';
import SpesificStore from './Components/SpesificStore/SpesificStore.jsx';
import GameDetails from './Components/GameDetails/GameDetails.jsx';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx';
import { Provider } from 'react-redux';
import Store from './Redux/Store.js';

const router = createHashRouter([
  {
    path: '',
    element: <LayOut />,
    children: [
      { path: '/', element: <Home /> }, 
      { path: '/Games', element: <AllGames /> },
      { path: '/Stores', element: <Stores /> },
      { path: '/Category', element: <Category /> },
      { path: '/Creators', element: <Creators /> },
      { path: '/SpecificCreator/:id', element: <SpecificCreator /> },
      { path: '/SpesificStore/:id', element: <SpesificStore /> },
      { path: '/GameDetails/:id', element: <GameDetails /> },
      { path: '*', element: <NotFoundPage/> },
    ],
  },
]);

function App() {


  return <>
   <Provider store={Store} >
   <RouterProvider router={router} />
  </Provider>
  </>


}

export default App;