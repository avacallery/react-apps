import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeForm, submitForm } from '../actions';
import Button from './common/Button';

const PostForm = props => {
  const { form } = props.newPost;

  const handleChange = (e) => {
    props.changeForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(props.newPost.form);
  };

  return (
    <div>
      <form style={myStyles.form}
        onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="posterName"
          placeholder="Your Name"
          value={form.posterName}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          id="resourceAuthor"
          placeholder="Author Name"
          value={form.resourceAuthor}
          onChange={(e) => handleChange(e)}
        />
        {/* dropdown skill level */}
        <div>
          <select
            id="jobSkillLevel"
            value={form.jobSkillLevel}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>
              Author Skill Levels
              </option>
            <option value="Intro">Intro</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <input
          type="text"
          id="cohort"
          placeholder="Cohort #"
          value={form.cohort}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="title"
          placeholder="title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="categories"
          placeholder="Categories (seperate multiples with commas)"
          value={form.categories}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="link"
          placeholder="Resource Link"
          value={form.link}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          id="resourceType"
          placeholder="Resource Type"
          value={form.resourceType}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="date"
          id="datePublished"
          placeholder="Published Date"
          value={form.datePublished}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          id="videoLength"
          placeholder="Length of Video (optional)"
          value={form.videoLength}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          id="timeToComplete"
          placeholder="Time to complete resource"
          value={form.timeToComplete}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          id="rating"
          placeholder="1 to 5 raiting"
          value={form.rating}
          onChange={(e) => handleChange(e)}
        />
        <Button type="Submit">Submit</Button>
      </form>
    </div>
  );
}

const myStyles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  }
};

const mapStoreToProps = store => {
  return {
    newPost: store.newPost
  }
}

export default connect(mapStoreToProps, {
  changeForm,
  submitForm
})(PostForm);