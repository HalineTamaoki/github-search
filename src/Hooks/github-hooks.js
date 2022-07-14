import { useContext } from "react";
import { githubContext } from "../Providers/github-provider";

const useGithub = ()=>{
    const {githubState, getUser, getUserRepos, getUserStarred} = useContext(githubContext);

    return {githubState, getUser, getUserRepos, getUserStarred};
};

export default useGithub