import React from 'react'
import * as S from './styled'

function RepositoryItem({name, linkToRepo, fullname}) {
  return (
    <S.WrapperItem>
        <h4>{name}</h4>
        <h5>full name:&nbsp;<span>
        <a href={linkToRepo} target={'_blank'} rel="noreferrer">{fullname}</a></span></h5>
    </S.WrapperItem>
  )
}

export default RepositoryItem