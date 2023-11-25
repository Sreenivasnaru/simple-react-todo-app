import { number } from "prop-types";
import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 1,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remark</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputChange}
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          id="rating"
          onClick={handleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
