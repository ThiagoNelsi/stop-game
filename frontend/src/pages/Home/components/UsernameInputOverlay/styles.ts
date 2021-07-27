import styled from 'styled-components';

interface IContainer {
    visible: boolean;
}

export const Container = styled.form<IContainer>`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.445);
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .overlay-box {
        width: 500px;
        height: fit-content;
        background-color: #FFF;
        padding: 30px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .overlay-box h1, .overlay-box input {
        margin-bottom: 20px;
    }

    .overlay-box input {
        border: 1px solid #999;
        box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
        font-size: 15pt;
        border-radius: 6px;
        padding: 5px;
    }

    .overlay-box button {
        font-size: 15pt;
        color: #FFF;
        border: 0;
        padding: 5px 15px;
        background-color:  #256EFF;
        cursor: pointer;
    }
`;