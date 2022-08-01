import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useDate } from '../hooks/useDate'

const today = useDate()

export type GoalStatusType = 'completed' | 'canceled' | undefined

export type GoalType = {
  id: number,
  title: string,
  status: GoalStatusType
}

export interface GoalsState {
  value: Record<string, Array<GoalType>>
}

const initialState: GoalsState = {
  value: {}
}

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    createNewDay: (state) => {
      state.value[today] = []
    },
    add: (state, action: PayloadAction<string>) => {
      const newGoal = {
        title: action.payload,
        status: undefined,
        id: state.value[today].length ? state.value[today][state.value[today].length - 1].id + 1 : 0
      }
      state.value[today].push(newGoal)
    },
    changeStatus: (state, action: PayloadAction<{id: number, status: GoalStatusType}>) => {
      state.value[today][action.payload.id].status = action.payload.status
    },
    deleteAll: (state) => {
      state.value = {}
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, changeStatus, deleteAll, createNewDay } = goalsSlice.actions

export default goalsSlice.reducer