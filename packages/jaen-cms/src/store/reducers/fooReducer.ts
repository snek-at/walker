import {createReducer} from '@reduxjs/toolkit'
import {count} from '../actions/fooActions'

const fooReducer = createReducer(
  {test: 'test', count: 0},
  {
    [count.type]: (state, _payload) => {
      //   console.log(state, payload);
      state.count++
    }
  }
)

export default fooReducer
