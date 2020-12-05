import React, { useRef } from "react";
import EditorJs from "react-editor-js";
import { Button } from "@material-ui/core";

const CreatePost = () => {
  const instanceRef = useRef(null);

  async function handleCreate() {
    const output = await instanceRef.current.save();
    console.log(output);
  }

  return (
    <div>
      <div>
        <Button onClick={handleCreate}>Create</Button>
      </div>
      <EditorJs
        instanceRef={(instance) => {
          instanceRef.current = instance;
          return instanceRef;
        }}
      />
    </div>
  );
};

export default CreatePost;
