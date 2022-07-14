import React, {useState, useEffect } from 'react'
import * as S from './styled'
import RepositoryItem from '../Repository-item'
import useGithub from '../../Hooks/github-hooks'

function Repository() {

  const {githubState, getUserRepos, getUserStarred} = useGithub();
  const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if(!!githubState.user.login){
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    sethasUserForSearchRepos(!!githubState.repository)
     
  }, [githubState.user])
  
  return (
    <>
    {hasUserForSearchRepos ? (
      <S.WrapperTabs 
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
      >   
          <S.WrapperTabList>
              <S.WrapperTab>Repository</S.WrapperTab>
              <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repository.map((item) => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name} 
                  linkToRepo={item.html_url} 
                  fullname={item.full_name} 
                  />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem 
                  key={item.id}
                  name={item.name} 
                  linkToRepo={item.html_url} 
                  fullname={item.full_name} 
                  />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
      </S.WrapperTabs>
    ):(<></>)}
    </>
  )
}

export default Repository