import React, { useCallback, useState } from 'react'
import Button from '../UI/Button'
import RadioButton from '../UI/RadioButton'
import ToggleButton from '../UI/ToggleButton'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'

const RegistrationForm = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <p>Регистрация аккаунта</p>
        </S.Title>
        <Input placeholder='Имя' margin='20px 0 0 0' />
        <Input placeholder='Фамилия' margin='10px 0' />
        <RadioButton />
        <Input title='дата рождения' placeholder='ДД.ММ.ГГГГ' margin='20px 0' />
        <Input title='данные для входа в сервис' placeholder='Email' />
        <Input placeholder='Пароль' margin='10px 0' />
        <ToggleButton />
        <Button type='long' text='перейти к оплате' arrow={true} margin='20px 0 30px' />
        <Flex justify='space-between' align='center'>
          <S.Underline>Уже есть аккаунт на Toxin</S.Underline>
          <Button type='white' text='войти' margin='' />
        </Flex>
      </S.Box>
    </S.Container>
  )
}

export default RegistrationForm