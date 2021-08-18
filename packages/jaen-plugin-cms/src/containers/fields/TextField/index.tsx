import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {useAppDispatch, useAppSelector} from '../../../store'
import {
  registerPageField,
  unregisterPageField,
  updatePageField
} from '../../../store/actions/siteActions'
import {pageFieldContentSelector} from '../../../store/selectors/pages'
import {FieldIdentifier, FieldUpdateDetails, TextBlock} from '../../../types'
import Editor from '../../Editor'

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
  const isEditing = false
  const pageId = 'SitePage /'

  const {initValue, fieldName, block} = field

  const register = () => dispatch(registerPageField({pageId, field}))
  const unregister = () => dispatch(unregisterPageField({pageId, field}))

  const content = useSelector(
    pageFieldContentSelector(pageId, fieldName, block)
  )
  const updatedValue = (content as TextBlock)?.text
  const isRegistered = updatedValue !== undefined

  // console.log(isRegistered, updatedValue, initValue, block?.position)

  const value = isRegistered ? updatedValue : initValue || ''

  const handleOnChange = (data: string) => {
    console.log(data, fieldName, block?.position)
    if (!isRegistered && data !== initValue) {
      register()
    }
    console.log('data', data, initValue)
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
          pageId,
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
