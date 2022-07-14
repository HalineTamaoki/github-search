import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    margin-bottom: 3vh;
    width: 100%;

    input{
        border: 1px #afafaf solid;
        border-radius: 0.5rem;
        font-size: 1em;
        padding: 1.3vh;
        width: 60%;
        margin-right: 1vh;
    }

    button{
        border: 1px #afafaf solid;
        border-radius: 0.5rem;
        background-color: #ccc;
        font-size: 1em;
        padding: 1.3vh 2vh;

    &:hover{
        box-shadow: 3px 2px 10px #afafaf;
        background-color: #afafaf;
        font-size: 0.95em;
    }
    }
`;