import React from 'react'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Button from '../UI/Button'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import { splitNumbers } from '../utils/splitNumbers'
import * as S from './style'
import { initialValues } from '../Sidebar/data'
import { useSelector } from 'react-redux'

const BookingForm = () => {
  const dropdownInitialValues = useSelector((state) => state.filter)

  const luxury = true
  const number = 888
  const price = 9990
  const time = 4

  return (
    <S.Form>
      <S.HeaderSection>
        <S.Title>
          <span>№ </span>
          {number}
          {luxury && <span> люкс</span>}
        </S.Title>
        <S.Subtitle>
          <span>{splitNumbers(price)}₽</span> в сутки
        </S.Subtitle>
      </S.HeaderSection>
      <Calendar filter={false} start={'прибытие'} end={'вызед'} />
      <Dropdown initialValues={dropdownInitialValues.guests} type='guests' title='гости' margin='20px 0' />
      <S.PriceInfo>
        <S.Item>
          <span>
            {splitNumbers(price)}₽ х {time} суток
          </span>
          <span>{splitNumbers(price * time)}₽</span>
        </S.Item>
        <S.Item>
          <span>
            Сбор за услуги: скидка 2179₽ <Info style={{ marginLeft: '5px' }} />
          </span>
          <span>0₽</span>
        </S.Item>
        <S.Item>
          <span>
            Сбор за дополнительные услуги <Info style={{ marginLeft: '5px' }} />
          </span>
          <span>300₽</span>
        </S.Item>
      </S.PriceInfo>
      <S.TotalPrice>
        <span>Итого</span>
        <S.Border />
        <span>38 081₽</span>
      </S.TotalPrice>
      <Button type='long' text='забронировать' arrow={true} />
    </S.Form>
  )
}

export default BookingForm