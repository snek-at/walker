import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import Editor from '../../Editor'
import {useAppDispatch, useAppSelector} from '../../store'
import {
  registerPageField,
  unregisterPageField,
  updatePageField
} from '../../store/actions/siteActions'
import {pageFieldContentSelector} from '../../store/selectors/pages'
import {TextBlock} from '../../store/types/pages/blocks'
import {FieldIdentifier, FieldUpdateDetails} from '../../types'

interface TextFieldProps extends FieldIdentifier {
  rtf?: boolean
  toolbar?: 'inline' | 'balloon'
}

const TextField: React.FC<TextFieldProps> = ({
  rtf = true,
  toolbar = 'balloon',
  ...field
}) => {
  const dispatch = useAppDispatch()
  const isEditing = true
  const path = '/'

  const {initValue, fieldName, block} = field

  const register = () => dispatch(registerPageField({path, field}))
  const unregister = () => dispatch(unregisterPageField({path, field}))

  const content = useSelector(pageFieldContentSelector(path, fieldName, block))
  const updatedValue = (content as TextBlock)?.text
  const isRegistered = updatedValue !== undefined

  // console.log(isRegistered, updatedValue, initValue, block?.position)

  const value = isRegistered ? updatedValue : initValue || ''

  const handleOnChange = (data: string) => {
    console.log(data, fieldName, block?.position)
    if (!isRegistered && data !== initValue) {
      register()
    }

    if (data === initValue) {
      unregister()
    } else {
      let fieldDetails: FieldUpdateDetails

      if (block) {
        fieldDetails = {
          _type: 'BlocksField',
          blockFieldName: block.blockFieldName as string,
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
      <Editor
        data={value}
        editing={isEditing}
        onChange={handleOnChange}
        disableToolbar={!rtf}
        toolbarType={toolbar}
      />
    </>
  )
}

export default TextField
