import React, { Component } from "react";

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
  state = { ...INITIAL_STATE};

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

    //take state and load into our mock file array of objects
    //methods are functions inside of a class (handleSubmit)
    //we don't have to use const because it becomes part of PostForm as a key
  handleSubmit = (e) => {
      e.preventDefault(); 
    //{...this.state} pulls apart the object into a new object
    const postData = {...this.state}; 
    postData.categories = postData.categories.split(',');
    //send state back to App.js
    this.props.addPost(postData); 
    this.setState({
            posterName: "",
            resourceAuthor: "",
            jobSkillLevel: "",
            cohort: "",
            title: "",
            categories: "",
            summary: "",
            link: "",
            resourceType: "",
            datePublished: "",
            videoLength: "",
            timeToComplete: "",
            raiting: "",
            comments: [],
    }); 
  };

  render() {
    return (
      <div>
        <form style={myStyles.form} 
        onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            id="posterName"
            placeholder="Your Name"
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <input
            type="text"
            id="resourceAuthor"
            placeholder="Author Name"
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
            <select 
            id="jobSkillLevel"
            value={this.state.jobSkillLevel} 
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
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="title"
            placeholder="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="categories"
            placeholder="Categories (seperate multiples with commas)"
            value={this.state.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="link"
            placeholder="Resource Link"
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            id="resourceType"
            placeholder="Resource Type"
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="date"
            id="datePublished"
            placeholder="Published Date"
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="videoLength"
            placeholder="Length of Video (optional)"
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="timeToComplete"
            placeholder="Time to complete resource"
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            id="rating"
            placeholder="1 to 5 raiting"
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Submit</button>
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
  },
  button: {
    alignSelf: "center",
    // backgroundColor: "#F96295",
    backgroundColor: "#ff62a1",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 5,
    width: "50%",
    //maxWidth:
    borderRadius: 10,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default PostForm;