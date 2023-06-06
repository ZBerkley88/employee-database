import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name="cat" value="cat1" id="cat1" />
            <label htmlFor="cat1">Cat 1</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="cat2" id="cat2" />
            <label htmlFor="cat2">Cat 2</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="cat3" id="cat3" />
            <label htmlFor="cat3">Cat 3</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="cat4" id="cat4" />
            <label htmlFor="cat4">Cat 4</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
