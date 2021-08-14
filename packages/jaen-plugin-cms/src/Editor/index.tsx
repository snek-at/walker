import InlineEditor from '@ckeditor/ckeditor5-build-inline'
// import {CKEditor} from '@ckeditor/ckeditor5-react'
import loadable from '@loadable/component'
import React, {useRef, useState, useEffect} from 'react'

import './style.css'

const LoadableCKEditor = loadable(() => import('@ckeditor/ckeditor5-react'), {
  resolveComponent: (editor: {CKEditor: any}) => editor.CKEditor
})

type EditorProps = {
  data: string
  editing: boolean
  onChange: (data: string) => void
}

const Editor: React.FC<EditorProps> = props => {
  const raw = (
    <div
      className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
      dangerouslySetInnerHTML={{__html: props.data}}
    />
  )
  return (
    <>
      {props.editing ? (
        <LoadableCKEditor
          fallback={raw}
          editor={InlineEditor}
          config={{
            mediaEmbed: {
              previewsInData: true
            }
          }}
          data={props.data}
          onReady={editor => {
            // editor.editing.view.change(writer => {
            //   const viewEditableRoot = editor.editing.view.document.getRoot()

            //   writer.removeClass('ck-editor__editable_inline', viewEditableRoot)
            // })
            // You can store the "editor" and use when it is needed.
            console.log(
              'Editor is ready to use!',
              editor,
              !props.editing,
              props.editing
            )
          }}
          onChange={(event, editor) => {
            props.onChange(editor.getData())
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor)
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor)
          }}
        />
      ) : (
        {raw}
      )}
    </>
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
