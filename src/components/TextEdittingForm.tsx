import "./TextEdittingForm.css";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

//TODO: MAKE PROP FOR CREATE AND EDIT
const key: string = process.env.REACT_APP_TINYMCE_KEY || "";

export default function TextEdittingForm() {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <form>
      <input type="text" placeholder="Title" />
      <Editor
        apiKey={key}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="What did you do today?"
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
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Let's go to get stickers!</button>
      <button>Cancel</button>
    </form>
  );
}
