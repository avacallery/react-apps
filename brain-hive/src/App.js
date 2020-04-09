import React, { Component } from 'react';
import Post from './components/Post'
//{ } extracts component property 

import './App.css';

//turn functional component into class-based component 

//App will (inherit...extends) gain all the properties of Component 
//that's how we're going to get props/state/mounting etc 

class App extends Component {
  //now this is an attribute of the App class
  //so no const in front of post
    post = {
    posterName: 'Arnell Milhouse',
    resourceAuthor: 'Albert Einstein',
    jobSkillLevel: 'Advanced',
    cohort: '0',
    title: 'The Universal Equation',
    categories: ['FORTRAN', 'redux'],
    summary: 'This was a great article about blending fortran and redux.',
    link: 'www.google.com/search?q=AlbertEintstein',
    resourceType: 'Article',
    datePublihed: '1943-10-03:00:00:00z',
    videolength: null,
    timeToComplete: 3,
    rating: 5,
    comments: [{
        commenter: 'Cliff', text: 'Nice post.'
    },
    { commenter: 'Ava', text: 'Einstein rules.' }
    ]
}
  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        <Post post={this.post}/>
      </div>
    );
  }
}

export default App;
