import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeForm, submitForm } from '../actions';
import Button from './common/Button';

//static value in all caps 
//should NOT be modified

const INITIAL_STATE = {
  posterName: "",
  resourceAuthor: "",
  jobSkillLevel: "",
  cohort: "",
  title: "",
  categories: "",
  summary: "",
  link: "",
  resourceType: "",
  datePublished: null,
  videoLength: "",
  timeToComplete: "",
  raiting: "",
  comments: []
}

//when we use this., we are using it because it is a class-based component
//this.setState is the same thing as PostForm.setState
//setState is PART of the component class
//handleChange and submitChange are part of the PostForm class, so when we want to use it, we have to use this.handleChange()
//the difference is using a local variable (not using this.) or a class state (using this.)
//class-based components always need a render() method

class PostForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
      this.props.changeForm(e.target.id, e.target.value);
  };

  //take state and load into our mock file array of objects
  //methods are functions inside of a class (handleSubmit)
  //we don't have to use const because it becomes part of PostForm as a key
  handleSubmit = (e) => {
    e.preventDefault();
    //{...this.state} pulls apart the object into a new object
    const postData = { ...this.state };
    console.log(postData);
    postData.categories = postData.categories.split(',');
    //send state back to App.js
    this.props.addPost(postData);
    this.setState({...INITIAL_STATE});
    this.props.submitForm(postData); 
  };

  render() {

    const {form} = this.props.newPost; 

    return (
      <div>
        <form style={myStyles.form}
          onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={form.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={form.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
            <select
              id="jobSkillLevel"
              value={form.jobSkillLevel}
              onChange={(e) => this.handleChange(e)}
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
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={form.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="categories"
            placeholder="Categories (seperate multiples with commas)"
            value={form.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="link"
            placeholder="Resource Link"
            value={form.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={form.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={form.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={form.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={form.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 raiting"
            value={form.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <Button type="Submit">Submit</Button>
        </form>
      </div>
    );
  }
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