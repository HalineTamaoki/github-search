import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../Hooks/github-hooks';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState(undefined)

  const submitGetUser = ()=>{

    if (!usernameForSearch) return;
    return getUser(usernameForSearch)
  }
  
  return (
    <S.WrapperHeader>
        <input type='text' placeholder='Username' onChange={(event)=>setusernameForSearch(event.target.value)}></input>
        <button type='submit' onClick={submitGetUser}>Search</button>
    </S.WrapperHeader>
  )
}

export default Header