import React from 'react';
import Header from '../Header/Header';
import Artical from '../Artical/Artical';
import RecentGames from '../RecentGames/RecentGames';
import Team from '../Team/Team';
import { Helmet } from 'react-helmet';



function Home() {



  return <>
  <Helmet>
     <title>Home</title>
  </Helmet>
  <Header />
  <Artical/>
  <RecentGames/>
  <Team/>
  </>
}

export default Home;