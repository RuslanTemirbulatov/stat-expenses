import styled from "styled-components";

const css = {
    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #202634;
        padding: 0 30px;
        a {
            text-decoration: none;
            color: #202634;
        }
    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #e5e5e5;
    `,
    HeaderCSS: {
        Logo: styled.div`
            font-size: 30px;
            color: #B0F347;
        `,
        MenuContainer: styled.div`
             display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
        `
    }
}


export default css;