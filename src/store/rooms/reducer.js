import { connect, useSelector } from 'react-redux'
import { filterActions } from './action'

export const initialState = {
  entryDate: '',
  endDate: '',
  guestsAdults: '',
  guestsKids: '',
  guestsBabies: '',
  from: '',
  to: '',
  smoking: false,
  pets: false,
  party: false,
  wideHall: false,
  invalidHelper: false,
  bedrooms: 2,
  beds: 2,
  bathrooms: '',
  breackfast: false,
  table: false,
  babyChair: false,
  babyBed: false,
  tv: false,
  shampoo: false,
}

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActions.CHANGE_VALUES:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
