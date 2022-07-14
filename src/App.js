import React from "react";
import Layout from "./Components/Layout";
import Repository from "./Components/Repository";
import useGithub from './Hooks/github-hooks';
import Profile from './Components/Profile'


function App() {
  const { githubState } = useGithub()
  
  return (
    <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (<p>Loading</p>):(<>
              <Profile />
              <Repository />
            </>)}
          </>
        ):(<p>Please insert a username to search</p>)}
    

    </Layout>
  );
}

export default App;
