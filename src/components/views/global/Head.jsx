import React, { useState } from 'react'
import css from '../../../styles/styles'
import { useNavigate } from 'react-router-dom'
import HOCButton from '../../comps/HOCHeaderButton'
import ButtonComponent from '../../comps/ButtonComponent'



const HOCButtonComponent = HOCButton(ButtonComponent)
const { HeaderContainer, HeaderCSS } = css


const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0f347',
    cursor: 'pointer',
    marginLeft: '10px'
}

const Head = () => {

    const navigate = useNavigate()
    return (
        <>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <HOCButtonComponent text={'/main'}  onClick={() => {}}>Главная</HOCButtonComponent>
                    <HOCButtonComponent text={'/stat/Доход'}  onClick={() => {}}>Статистика</HOCButtonComponent>
                    <HOCButtonComponent text={'/plan'}  onClick={() => {}}>Планирование</HOCButtonComponent>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </>
    );
};

export default Head;