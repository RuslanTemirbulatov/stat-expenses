import React, { useEffect, useState, useRef } from 'react';
import Foot from '../views/global/Foot';
import css from '../../styles/form';
import InputComponent from '../comps/InputComponent';
import DataList from '../views/global/local/DataList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { changeViewType, changeValue, changeComment } from '../../redusx-state/reducer/view-type-for-main';
import { useDispatch, useSelector } from 'react-redux';
import HOCInput from '../comps/HOCHeaderInput';

const { FormContainer, Button, Input } = css

const Main = ({action}) => {

    const HOCInputComponent = HOCInput(InputComponent)

    const [placeholder, setPlaceholder] = useState('')

    const dispatch = useDispatch()
    const viewType = useSelector(state => state.viewTypeMain.viewType)
    const viewValue = useSelector(state => state.viewTypeMain.value)
    const viewComment = useSelector(state => state.viewTypeMain.comment)
    const valueInput = useRef()



    const validation = () => {
        if (viewValue.length > 2 && viewType ) {
            console.log("валидация прошла успешно");

            const dataLine = `${viewValue}::${viewType}::${viewComment}`
            action(dataLine)

            dispatch(changeValue(''));
            dispatch(changeViewType('Доход'));
            dispatch(changeComment(''));
        } else {
            console.log("ошибка валидации");
        }
    }
    const setValueFunc = (newValue) => {
        dispatch(changeValue(newValue));

    }
    // const setTypeFunc = (newValue) => {
    //     setType(newValue);
    // }
    // const countSymbols = (maxLength, inputValue) => {
    //     setPlaceholder(maxLength - inputValue.length)
    //     console.log(placeholder);
    // }

    const handleChange = (event) => (
        dispatch(changeViewType(event.target.value))
    )
    const handleChangeValue = (param) => (
        dispatch(changeValue(param))
    )

    const handleChangeComment = (param) => (
        dispatch(changeComment(param))
    )

    const handleChangeCommentRadio = (event) => (
        dispatch(changeComment(event.target.value))
    )
    const setFocus = () => {
        valueInput.current.disabled = false
        valueInput.current.focus()
    }

    return (
        <>
            <FormContainer style={{alignItems: 'flex-start'}}>
                <Button
                    backgroundColor={'rgb(176, 243, 71)'}
                    onClick={setFocus}
                    style={{marginBottom: '12px'}}
                    >Начать заполнение
                </Button>
                <Input
                    ref={valueInput}
                    value={viewValue}
                    type={'text'}
                    placeholder={'Введите сумму транзакции'}
                    maxLength={'100'}
                    disabled
                    onChange={event => {
                        const newValue = event.target.value
                        handleChangeValue(newValue)
                    }}
                    >
                </Input>
                {/* <InputComponent inputValue={viewValue} action={handleChangeValue} placeholder={'Введите сумму транзакции'} maxLength={100}/> */}
                <FormControl style={{marginTop: '9px', marginBottom: '12px'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Введите тип транзакции</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        value={viewType}
                        onChange={handleChange}
                        style={{marginTop: '5px', marginLeft: '6px'}}>
                        <FormControlLabel value="Расход" control={<Radio />} label="Расход" />
                        <FormControlLabel value="Доход" control={<Radio />} label="Доход" />
                    </RadioGroup>
                </FormControl>
                {viewType === 'Доход' && <InputComponent inputValue={viewComment} action={handleChangeComment} placeholder={'Введите комментарий'} maxLength={100}/>}
                    {
                        viewType === 'Расход' && <FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
                        <FormLabel id="demo-radio-buttons-group-label">Введите тип расхода</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            value={viewComment}
                            onChange={handleChangeCommentRadio}
                            style={{marginTop: '5px', marginLeft: '6px'}}>
                            <FormControlLabel value="Покупка продуктов" control={<Radio />} label="Покупка продуктов" />
                            <FormControlLabel value="Покупка одежды" control={<Radio />} label="Покупка одежды" />
                            <FormControlLabel value="Оплата счетов" control={<Radio />} label="Оплата счетов" />
                            <FormControlLabel value="Развлечения" control={<Radio />} label="Развлечения" />
                            <FormControlLabel value="Путешествия" control={<Radio />} label="Путешествия" />
                        </RadioGroup>
                    </FormControl>
                    }
                    {
                        viewType === 'Доход' && <FormControl>

                        <FormLabel id="demo-radio-buttons-group-label">Введите тип расхода</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            value={viewComment}
                            onChange={handleChangeCommentRadio}
                            style={{marginTop: '5px', marginLeft: '6px'}}>
                            <FormControlLabel value="аванс" control={<Radio />} label="Аванс" />
                            <FormControlLabel value="зарплата" control={<Radio />} label="Зарплата" />
                            <FormControlLabel value="премия" control={<Radio />} label="Премия" />
                        </RadioGroup>
                    </FormControl>
                    }
                <Button backgroundColor={
                    viewValue.length < 3 ?
                    "rgb(229, 229, 229)":
                    viewType.length < 3 ? 
                    "rgb(229, 229, 229)" :
                    "rgb(176, 243, 71)"}
                    onClick={validation}>Создать транзакцию</Button>
            </FormContainer>
            <Foot />
        </>
    );
};

export default Main;