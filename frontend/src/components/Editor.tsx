import EditorJS, { OutputData } from "@editorjs/editorjs";
import { forwardRef, useEffect } from "react";

interface EditorProps {
  defaultValue?: OutputData;
  isViewOnly?: boolean;
}
export const Editor = forwardRef<EditorJS, EditorProps>(
  ({ defaultValue, isViewOnly }, ref) => {
    const initializeEditor = async () => {
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const Table = (await import("@editorjs/table")).default;
      // @ts-expect-error type error
      const Link = (await import("@editorjs/link")).default;
      // @ts-expect-error type error
      const CheckList = (await import("@editorjs/checklist")).default;
      const List = (await import("@editorjs/list")).default;
      // @ts-expect-error type error
      const Embed = (await import("@editorjs/embed")).default;

      const editorRef = ref as React.MutableRefObject<EditorJS | null>;

      if (!editorRef.current) {
        const editor = new EditorJS({
          holder: "editorjs",
          tools: {
            header: Header,
            table: Table,
            link: {
              class: Link,
              inlineToolbar: true,
            },
            embed: Embed,
            checklist: CheckList,
            list: List,
          },
          placeholder: "Start writing your content...",
          minHeight: 200,
          data: defaultValue,
          readOnly: isViewOnly,
        });
        editorRef.current = editor;
      }
    };

    useEffect(() => {
      const init = async () => {
        await initializeEditor();
      };
      init();

      // Add cleanup
      return () => {
        const editorRef = ref as React.MutableRefObject<EditorJS | null>;
        if (editorRef.current) {
          editorRef.current.destroy();
          editorRef.current = null;
        }
      };
    }, []);

    return (
      <div
        id="editorjs"
        className={`${isViewOnly ? "" : "border-t"} prose max-w-full lg:prose-xl sm:p-6 min-h-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
      />
    );
  },
);

Editor.displayName = "Editor";
