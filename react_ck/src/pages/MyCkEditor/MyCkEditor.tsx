import React, { useState } from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button } from '@material-tailwind/react';
// @ts-ignore
import ClassicExtended from "ckeditor5-build-classic-extended";
import { editorConfig } from '@/pages/MyCkEditor/editorConfig';

const MyCkEditor = () => {
  const [text, setText] = useState<string>('<p>안녕하세요! CKEditor 5 입니다!</p>');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="min-w-sm">
        <div className="m-4">
          <Button
            onClick={() => setIsEdit(!isEdit)}
          >
            모드변경
          </Button>
        </div>
        <CKEditor
          editor={ ClassicExtended }
          config={editorConfig}
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