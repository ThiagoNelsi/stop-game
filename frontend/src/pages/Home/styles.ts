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
        z-index: 1;
        width: 100%;
        position: relative;
        margin-bottom: 80px;
        margin-top: 20px;
    }

    header h1 {
        color: #256EFF;
        font-family: 'Hanalei Fill', cursive;
        font-size: 35pt;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        div span {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    header div {
        font-size: 12pt;
        margin-left: auto;
        span {
            margin-left: 50px;
        }
    }
    
    .input-container {
        width: 100%;
        height: fit-content;
        margin: 0;
        margin-top: 10px;
        padding: 0;
        max-height: 500px;
        background: #FFF;
        border: 1px solid rgb(204, 203, 203);
        border-radius: 6px;
        overflow-x: auto;
        position: absolute;
    }
    
    .search-results {
        border-top: 1px solid #ccc;
        padding: 10px;
        padding-top: 0;
        position: relative;
        div {
            width: 100%;
            padding: 10px;
            :hover {
                cursor: pointer;
                background: #f1f1f1;
            }
            span {
                margin: 10px 0;
                color: #555;
                display: flex;
                align-items: center;
            }
            h3 {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                svg {
                    color: #333;
                    font-weight: 400;
                    margin-right: 10px;
                    display: flex;
                    align-items: center;
                }
            }
        }

        div + div {
            border-top: 1px solid rgb(204, 203, 203);
        }

    }

    input#search {
        margin: 0;
        border-radius: 6px;
        border: 0;
        width: 100%;
        font-size: 12pt;
        padding: 10px 20px;
        color: #333;
    }

    input:focus {
        outline: none;
    }

    main {
        width: 100%;
        height: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        top: 20vh;
        gap: 5%;
    }
`;

