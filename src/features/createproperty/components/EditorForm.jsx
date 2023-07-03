import { Editor } from "@tinymce/tinymce-react";
import useRef from "react";

export default function EditorForm({ value, onChange, isInvalid }) {
  return (
    <Editor
      apiKey="beu31zgpl2iagusvmlxahjevllhs67h9eagoju5q81mqzahm"
      onInit={(evt, editor) => (editorRef.current = editor)}
      // initialValue="<p>This is the initial content of the editor.</p>"
      init={{
        height: 500,
        menubar: {
          file: {
            title: "File",
            items:
              "newdocument restoredraft | preview | export print | deleteallconversations",
          },
          edit: {
            title: "Edit",
            items:
              "undo redo | cut copy paste pastetext | selectall | searchreplace",
          },
          view: {
            title: "View",
            items:
              "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
          },
          insert: {
            title: "Insert",
            items:
              "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
          },
          format: {
            title: "Format",
            items:
              "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
          },
          tools: {
            title: "Tools",
            items:
              "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
          },
          table: {
            title: "Table",
            items:
              "inserttable | cell row column | advtablesort | tableprops deletetable",
          },
          help: { title: "Help", items: "help" },
        },
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "wordcount",
          "emoticons",
          "preview",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | emoticons | preview ",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}
