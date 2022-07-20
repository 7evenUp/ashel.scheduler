import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  isLight: boolean
}

const initialState: ThemeState = {
  isLight: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isLight = !state.isLight
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer