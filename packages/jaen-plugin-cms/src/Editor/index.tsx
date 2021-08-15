// import {CKEditor} from '@ckeditor/ckeditor5-react'
import {Box} from '@chakra-ui/react'
import loadable from '@loadable/component'
import React, {useRef, useState, useEffect} from 'react'

import './style.css'

const LoadableCKEditor = loadable(() => import('@ckeditor/ckeditor5-react'), {
  resolveComponent: (editor: {CKEditor: any}) => editor.CKEditor
})

type EditorProps = {
  data: string
  editing: boolean
  disableToolbar: boolean
  toolbarType: 'inline' | 'balloon'
  onChange: (data: string) => void
}

const Editor: React.FC<EditorProps> = props => {
  const raw = (
    <Box
      display={'inline-block'}
      className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
      dangerouslySetInnerHTML={{__html: props.data}}
    />
  )

  const editorConfig: {[key: string]: any} = {
    mediaEmbed: {
      previewsInData: true
    }
  }

  if (props.disableToolbar) {
    editorConfig['toolbar'] = []
  }

  return (
    <Box display={'inline-block'}>
      {props.editing ? (
        <LoadableCKEditor
          fallback={raw}
          editor={
            props.toolbarType === 'balloon'
              ? require('@ckeditor/ckeditor5-build-balloon')
              : require('@ckeditor/ckeditor5-build-inline')
          }
          config={editorConfig}
          data={props.data}
          onReady={editor => {
            console.log('ready')
            // editor.editing.view.change(writer => {
            //   const viewEditableRoot = editor.editing.view.document.getRoot()
            //   writer.removeClass('ck-editor__editable_inline', viewEditableRoot)
            //   writer.removeClass('ck-focused', viewEditableRoot)
            // })
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            console.log('New data', data)
            props.onChange(data)
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {
            // editor.editing.view.change(writer => {
            //   const viewEditableRoot = editor.editing.view.document.getRoot()
            //   writer.removeClass('ck-focused', viewEditableRoot)
            // })
          }}
        />
      ) : (
        <>{raw}</>
      )}
    </Box>
  )
}

// // A custom React Hook for using CKEditor with SSR
// // particularly with NextJS.
// // https://ckeditor.com | https://nextjs.org

// export function useCKEditor() {
//   const editorRef = useRef()
//   const [isEditorLoaded, setIsEditorLoaded] = useState(false)
//   const {CKEditor, InlineEditor} = editorRef.current || {}

//   useEffect(() => {
//     editorRef.current = {
//       // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
//       CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
//       InlineEditor: require('@ckeditor/ckeditor5-build-inline')
//     }
//     setIsEditorLoaded(true)
//   }, [])

//   return Object.freeze({
//     isEditorLoaded,
//     CKEditor,
//     InlineEditor
//   })
// }

export default Editor
