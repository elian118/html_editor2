export const editorConfig = {
  toolbar: {
    items: [
      'exportPDF', 'exportWord', '|',
      'findAndReplace', 'selectAll', '|',
      'heading', '|',
      'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
      'bulletedList', 'numberedList', 'todoList', '|',
      'outdent', 'indent', '|',
      // 'undo', 'redo',
      // '-', // 아이템 행 나눔
      'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
      'alignment', '|',
      'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
      'specialCharacters', 'horizontalLine', 'pageBreak', '|',
      // 'textPartLanguage',
      '|',
      'sourceEditing'
    ],
    shouldNotGroupWhenFull: false, // false -> 한 줄로 아이템 나열
    language: 'ko', // 한국어 선택
    placeholder: '여기에 작성하세요.',
    // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
    fontFamily: {
      options: [
        'default',
        'Arial, Helvetica, sans-serif',
        'Courier New, Courier, monospace',
        'Georgia, serif',
        'Lucida Sans Unicode, Lucida Grande, sans-serif',
        'Tahoma, Geneva, sans-serif',
        'Times New Roman, Times, serif',
        'Trebuchet MS, Helvetica, sans-serif',
        'Verdana, Geneva, sans-serif'
      ],
      supportAllValues: true
    },
  },
  image: {
    toolbar: [
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'toggleImageCaption',
      'imageTextAlternative'
    ]
  },
};