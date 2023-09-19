

import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    console.log(state);
    navigate("/mygigs")
  };

  return (
    <div className="add">
      <div className="container">
        <h1>List New Startup</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              placeholder="Your Registered Startup Name"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="Tech">IT & Services </option>
              <option value="hnb">Healthcare and Biotech</option>
              <option value="et">EdTech</option>
              <option value="tnh">Travel & Hospitality</option>
              <option value="lt">Legal Tech</option>
              <option value="fnb">Food & Beverage</option>
              <option value="bc">Blockchain & Crypto</option>
              
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Give a brief description about your Startup"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="currEval">Current Evaluation</label>
            <input
              type="text"
              name="currEval"
              placeholder="₹ xxxx"
              onChange={handleChange}
            />
            <label htmlFor="nEmp">Number of Employess</label>
            <input type="number" onChange={handleChange} name="nEmp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
