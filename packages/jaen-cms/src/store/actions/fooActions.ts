import {createAction} from '@reduxjs/toolkit'

export const count = createAction<number>('foo/count')
