import { configureStore } from '@reduxjs/toolkit'
import viewTypeMainReducer  from './reducer/view-type-for-main'
import dataReducer from './reducer/data'
import actualyUrl from './reducer/actualyUrl'

export const store = configureStore({
  reducer: {
    viewTypeMain: viewTypeMainReducer,
    dataReducer: dataReducer,
    actualyUrl: actualyUrl,
  },
})