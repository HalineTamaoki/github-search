import React, { createContext, useCallback, useState} from 'react'
import api from '../Services/api'

export const githubContext = createContext({
    loading: false,
    user: {},
    repository: [],
    starred: [],
})

function GithubProvider({ children }) {
    const [githubState, setgithubState] = useState({
        hasUser: false,

        loading: false,

        user:{
          id: undefined,
          login: undefined,
          name: undefined,
          html_url: undefined,
          followers: 0,
          following: 0,
          public_gists: 0,
          public_repos: 0,
          avatar_url: undefined   
        },
        repository: [],
        starred: [],
    });
    
    const getUser = async ( username ) =>{

        setgithubState(prevState=>({...prevState,
            loading: !prevState.loading,
        }))


        api.get(`users/${username}`).then( ({data}) => {
            setgithubState(prevState=>({...prevState,
                hasUser:true,
                user: {
                    id:data.id,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    avatar_url: data.avatar_url,
            }}))
            
        }).finally(()=>{
            setgithubState(prevState=>({...prevState,
                loading: !prevState.loading,
            }))
        })
        
    }

    const getUserRepos = (username) =>{


        api.get(`users/${username}/repos`).then( ({data}) => {
            setgithubState(prevState=>({...prevState,
                repository: data,
            }))
            
        })
        
    }

    const getUserStarred = (username) =>{


        api.get(`users/${username}/starred`).then( ({data}) => {
            setgithubState(prevState=>({...prevState,
                starred: data,
            }))
            
        })
        
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    }

    return (
        <githubContext.Provider value={contextValue}>{ children }</githubContext.Provider>
    )
}

export default GithubProvider