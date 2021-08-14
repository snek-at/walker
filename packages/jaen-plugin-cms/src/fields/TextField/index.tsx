import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import Editor from '../../Editor'
import {useAppDispatch, useAppSelector} from '../../store'
import {
  registerPageField,
  unregisterPageField,
  updatePageField
} from '../../store/actions/pagesActions'
import {pageFieldContentSelector} from '../../store/selectors/pages'
import {FieldUpdateDetails} from '../../store/types/pages'
import {TextBlock} from '../../store/types/pages/blocks'
import {FieldIdentifier} from '../../types'

interface TextFieldProps extends FieldIdentifier {
  initValue: string
}

const TextField: React.FC<TextFieldProps> = ({initValue, ...field}) => {
  const dispatch = useAppDispatch()
  const isEditing = true
  const path = '/'

  const {fieldName, block} = field

  const register = () => dispatch(registerPageField({path, field}))
  const unregister = () => dispatch(unregisterPageField({path, field}))

  const content = useSelector(pageFieldContentSelector(path, fieldName, block))
  const updatedValue = (content as TextBlock)?.text
  const isRegistered = updatedValue !== undefined

  const value = isRegistered ? updatedValue : initValue

  const handleOnChange = (data: string) => {
    if (!isRegistered && data !== initValue) {
      register()
    }

    if (data === initValue) {
      unregister()
    } else {
      let fieldDetails: FieldUpdateDetails
      console.log(data)

      if (block) {
        fieldDetails = {
          _type: 'BlocksField',
          blockFieldName: block.blockFieldName,
          blockPosition: block.position,
          fieldName,
          block: {
            _type: 'TextBlock',
            text: data
          }
        }
      } else {
        fieldDetails = {
          _type: 'PlainField',
          fieldName,
          block: {
            _type: 'TextBlock',
            text: data
          }
        }
      }

      dispatch(
        updatePageField({
          path,
          fieldDetails
        })
      )
    }
  }

  return (
    <>
      <Editor data={value} editing={isEditing} onChange={handleOnChange} />
    </>
  )
}

export default TextField
