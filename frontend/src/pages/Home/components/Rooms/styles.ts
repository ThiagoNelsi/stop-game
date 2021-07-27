import styled from 'styled-components';

export const Container = styled.div`

    height: 100%;
    border-radius: 6px;
    background-color: #FFF;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;        
    flex: 4;

    h3 {
        font-size: 18pt;
        background-color: #36E57C;
        padding: 10px 20px;
        border-radius: 6px 6px 0 0;
        color: #FFF;
        -webkit-text-stroke: 1px #000;
        display: flex;
        align-items: center;
        span {
            font-size: 12pt;
            margin-left: auto;
        }
    }

    ul {
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 20px;
        list-style-type: none;
    }

    ul li {
        border-top: 10px solid #256EFF;
        border-radius: 6px;
        padding: 10px;
        cursor: pointer;
        margin-bottom: 25px;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }

    ul li p {
        font-weight: bold;
        font-size: 11pt;
        text-transform: uppercase;
        margin-bottom: 5px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }

    ul li .room-columns {
        color: #333;
        font-size: 9pt;
        display: block;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    ul li .players {
        display: flex;
        align-items: center;
        margin-top: 10pt;
        font-weight: bold;
    }

    ul li .players span {
        font-size: 10pt;
        color: #333;
        margin-left: 7px;
    }
`;
