import React from 'react';
import useGithub from '../../Hooks/github-hooks';
import * as S from './styled'

function Profile() {

  const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar_url} alt='avatar of user'/>
        <div>
        <S.Wrapper>
        <S.Name>{githubState.user.name}</S.Name>
        </S.Wrapper>
        <S.Wrapper>
          <h4>Username:&nbsp;</h4>
          <span>{githubState.user.login}</span>
        </S.Wrapper>
        <S.Wrapper>
          <h4>GitHub:&nbsp;</h4>
          <a href={githubState.user.html_url} target={'_blank'} rel='noreferrer'>{githubState.user.html_url}</a>
        </S.Wrapper>
        <S.Wrapper>
          <S.WrapperRegister>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </S.WrapperRegister>
          <S.WrapperRegister>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </S.WrapperRegister>
          <S.WrapperRegister>
            <h4>Public Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </S.WrapperRegister>
          <S.WrapperRegister>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </S.WrapperRegister>
        </S.Wrapper>
        </div>
    </S.Wrapper>
  );
};

export default Profile