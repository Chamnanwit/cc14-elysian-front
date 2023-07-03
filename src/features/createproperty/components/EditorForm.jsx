import { Editor } from "@tinymce/tinymce-react";

export default function EditorForm({ oldProperty }) {
  return (
    <Editor
      apiKey="beu31zgpl2iagusvmlxahjevllhs67h9eagoju5q81mqzahm"
      onInit={(evt, editor) => (editorRef.current = editor)}
      // initialValue="<p>This is the initial content of the editor.</p>"
      init={{
        height: 500,
        menubar: false,
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
