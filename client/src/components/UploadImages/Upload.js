import React from "react";

const Upload = () => {
  return (
    <div>
      <label for="avatar">Choose a profile picture:</label>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default Upload;
