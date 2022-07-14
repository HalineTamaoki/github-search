import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    width:100%;
    margin-top: 3vh;
    font-size:0.8em;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    margin: 0;
    padding: 4px; 
    display: flex;
`;

WrapperTabList.tabRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 10%;
    border: 1px #afafaf solid;
    padding: 1.3vh;
    user-select: none;
    cursor: pointer;
    margin: 0.2vh;
    background-color: #ccc;

    &:focus{
        outline: none;
    }

    &.is-selected{
        border-bottom: 1px white solid;
        background-color:white;
        font-weight: bold;
    }
`;

export const WrapperTabPanel = styled(TabPanel)`
    padding: 1.3vh;
    display: none;

    &.is-selected{
        display: block;
    }

`;

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
