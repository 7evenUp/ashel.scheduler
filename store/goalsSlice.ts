import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type GoalStatusType = 'completed' | 'canceled' | undefined

export type GoalType = {
  id: number,
  title: string,
  status: GoalStatusType
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
    add: (state, action: PayloadAction<string>) => {
      const newGoal = {
        title: action.payload,
        status: undefined,
        id: state.value.length ? state.value[state.value.length - 1].id + 1 : 0
      }
      state.value.push(newGoal)
    },
    changeStatus: (state, action: PayloadAction<{id: number, status: GoalStatusType}>) => {
      state.value[action.payload.id].status = action.payload.status
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, changeStatus } = goalsSlice.actions

export default goalsSlice.reducer