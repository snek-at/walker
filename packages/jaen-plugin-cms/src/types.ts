import {InitValueType} from './fields/StreamField/types'

export type StreamBlockIdentifier = {
  initValue: InitValueType['string']
  fieldName: string
  block?: {typeName: string; position: number}
}

export type FieldIdentifier = {
  initValue: any
  fieldName: string
  block?: {typeName: string; position: number; blockFieldName: string}
}
