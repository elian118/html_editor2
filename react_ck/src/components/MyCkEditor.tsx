import React, { useState } from 'react';
// @ts-ignore
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react'
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyCkEditor = () => {
  const [text, setText] = useState<string>('<p>안녕하세요! CKEditor 5 입니다!</p>');
  return (
    <div className="App">
      <div className="min-w-sm">
        <CKEditor
          editor={ ClassicEditor }
          data={text}
          onReady={ (editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event: any, editor: { getData: () => any; } ) => {
            const data = editor.getData();
            setText(data);
            // console.log( { event, editor, data } );
          } }
          onBlur={ ( event: any, editor: any ) => {
            // console.log( 'Blur.', editor );
          } }
          onFocus={ ( event: any, editor: any ) => {
            // console.log( 'Focus.', editor );
          } }
        />
      </div>
    </div>
  );
}

export default MyCkEditor;