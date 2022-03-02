import { filterActions } from './action'

export const initialState = {
  entryDate: '',
  endDate: '',
  guestsAdults: 0,
  guestsKids: 0,
  guestsBabies: 0,
  from: 0,
  to: 150,
  smoking: false,
  pets: false,
  party: false,
  wideHall: false,
  invalidHelper: false,
  bedrooms: 0,
  beds: 0,
  bathrooms: 0,
  breakfast: false,
  table: false,
  babyChair: false,
  babyBed: false,
  tv: false,
  shampoo: false,
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActions.CHANGE_VALUES:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
