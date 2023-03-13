// @ts-ignore
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// @ts-ignore
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// @ts-ignore
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
// @ts-ignore
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
// @ts-ignore
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// @ts-ignore
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// @ts-ignore
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// @ts-ignore
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
// @ts-ignore
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
// @ts-ignore
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
// @ts-ignore
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// @ts-ignore
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
// @ts-ignore
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword';
// @ts-ignore
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
// @ts-ignore
import Font from '@ckeditor/ckeditor5-font/src/font';
// @ts-ignore
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// @ts-ignore
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
// @ts-ignore
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
// @ts-ignore
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
// @ts-ignore
import Image from '@ckeditor/ckeditor5-image/src/image';
// @ts-ignore
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// @ts-ignore
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
// @ts-ignore
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// @ts-ignore
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// @ts-ignore
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// @ts-ignore
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// @ts-ignore
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
// @ts-ignore
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
// @ts-ignore
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// @ts-ignore
import Link from '@ckeditor/ckeditor5-link/src/link';
// @ts-ignore
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
// @ts-ignore
import List from '@ckeditor/ckeditor5-list/src/list';
// @ts-ignore
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
// @ts-ignore
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
// @ts-ignore
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
// @ts-ignore
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
// @ts-ignore
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// @ts-ignore
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// @ts-ignore
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
// @ts-ignore
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
// @ts-ignore
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
// @ts-ignore
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
// @ts-ignore
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
// @ts-ignore
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// @ts-ignore
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
// @ts-ignore
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
// @ts-ignore
import Table from '@ckeditor/ckeditor5-table/src/table';
// @ts-ignore
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
// @ts-ignore
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
// @ts-ignore
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
// @ts-ignore
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
// @ts-ignore
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// @ts-ignore
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
// @ts-ignore
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
// @ts-ignore
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
// @ts-ignore
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// @ts-ignore
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
// @ts-ignore
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader';
// @ts-ignore
import '@ckeditor/ckeditor5-build-classic/build/translations/ko';

export const editorConfig = {
  language: 'ko',
  toolbar: {
    ckbox: {
      // This editor configuration includes the CKBox feature.
      // Provide correct configuration values to use it.
      tokenUrl: 'https://example.com/cs-token-endpoint'
      // Read more about CKBox - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/ckbox.html.
      // For other image upload methods see the guide - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html.
    },
    plugins: [
      Autoformat, BlockQuote, Bold, Heading, Image, ImageCaption,
      ImageStyle, ImageToolbar, Indent, Italic, Link, List, MediaEmbed,
      Paragraph, Table, TableToolbar, Alignment, AutoImage, AutoLink,
      CKBox, CloudServices, Code, CodeBlock, Essentials, ExportPdf,
      ExportWord, FindAndReplace, Font, Highlight, HorizontalLine,
      HtmlEmbed, ImageInsert, ImageResize, ImageUpload, IndentBlock,
      LinkImage, ListProperties, Mention, PageBreak, PasteFromOffice,
      PictureEditing, RemoveFormat, SourceEditing, SpecialCharacters,
      SpecialCharactersEssentials, Strikethrough, Subscript, Superscript,
      TableCaption, TableCellProperties, TableColumnResize,
      TableProperties, TextPartLanguage, TextTransformation, TodoList,
      Underline, WordCount, WProofreader
    ],
    toolbar: {
      items: [
        'undo', 'redo',
        '|',
        'exportPdf', 'exportWord', 'importWord',
        '|',
        'wproofreader', 'findAndReplace', 'selectAll',
        '|',
        'heading',
        '|',
        'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript',
        '|',
        'specialCharacters', 'horizontalLine', 'pageBreak',
        '|',
        '-',
        'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
        '|',
        'link', 'blockQuote', 'insertTable', 'uploadImage', 'ckbox', 'mediaEmbed', 'codeBlock', 'htmlEmbed',
        '|',
        'bulletedList', 'numberedList', 'todoList',
        '|',
        'outdent', 'indent', 'alignment',
        '|',
        'textPartLanguage',
        '|',
        'sourceEditing'
      ],
      shouldNotGroupWhenFull: true
    },
    fontFamily: {
      supportAllValues: true
    },
    fontSize: {
      options: [ 10, 12, 14, 'default', 18, 20, 22 ],
      supportAllValues: true
    },
    htmlEmbed: {
      showPreviews: true
    },
    image: {
      styles: [
        'alignCenter',
        'alignLeft',
        'alignRight'
      ],
      resizeOptions: [
        {
          name: 'resizeImage:original',
          label: 'Original',
          value: null
        },
        {
          name: 'resizeImage:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          label: '75%',
          value: '75'
        }
      ],
      toolbar: [
        'imageTextAlternative', 'toggleImageCaption', '|',
        'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
        'resizeImage'
      ],
      insert: {
        integrations: [
          'insertImageViaUrl'
        ]
      }
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    link: {
      decorators: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    mention: {
      feeds: [
        {
          marker: '@',
          feed: [
            '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
            '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
            '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
            '@sugar', '@sweet', '@topping', '@wafer'
          ],
          minimumCharacters: 1
        }
      ]
    },
    importWord: {
      // PROVIDE CORRECT VALUES HERE:
      tokenUrl: 'https://example.com/cs-token-endpoint'
    },
    placeholder: 'Type or paste your content here!',
    table: {
      contentToolbar: [
        'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
      ]
    },
  },
}