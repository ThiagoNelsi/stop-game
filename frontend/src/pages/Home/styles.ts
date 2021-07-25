import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 5%;

    button:hover {
        box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.479);
        transition: 0.2s;
    }

    button:active {
        background-color: #528cff;
    }

    header {
        margin: 2vh 0;
    }

    header h1 {
        color: #256EFF;
        font-family: 'Hanalei Fill', cursive;
        font-size: 35pt;
        display: flex;
        align-items: center;
    }

    header span {
        font-size: 12pt;
        margin-left: auto;
    }

    input#search {
        margin: 2vh 0;
        border-radius: 6px;
        border: 1px solid rgb(204, 203, 203);
        width: 100%;
        font-size: 12pt;
        padding: 10px;
        color: #333;
    }

    main {
        width: 100%;
        height: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

