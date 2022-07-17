import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type GoalType = {
  title: string,
  status: 'completed' | 'canceled' | undefined
}

export interface GoalsState {
  value: Array<GoalType>
}

const initialState: GoalsState = {
  value: [],
}

export const goalsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pushGoal: (state, action: PayloadAction<GoalType>) => {
      state.value.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { pushGoal } = goalsSlice.actions

export default goalsSlice.reducer