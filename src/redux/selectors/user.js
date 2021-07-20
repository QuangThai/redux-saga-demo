import { createSelector } from 'reselect'
import { initialState } from '../reducers/users'

/**
 * Direct selector to the app state domain
 */

const selectUserDomain = (state) => state.users || initialState

const makeSelectUsers = () =>
  createSelector(selectUserDomain, (substate) => substate.users)

const makeSelectStatusFlags = () =>
  createSelector(selectUserDomain, (substate) => substate.statusFlags)

export { makeSelectUsers, makeSelectStatusFlags }
