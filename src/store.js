import { configureStore } from '@reduxjs/toolkit'
import Shanto from './Slices/Shanto'

export default configureStore({
  reducer: {
    prity: Shanto,
  },
})
