Complete React Tutorial (& Redux) - The Net Ninja

https://www.youtube.com/watch?v=OxIDLw0M-m0

~~

Introduction (Vid.1): 

What is React? 
- a JavaScript library created by Facebook (also used by Netflix and Insta) 
- Used to create dynamic JS-driven web apps

What is Redux? 
- a layer on top of React that helps with state management of our app - like our data and the UI state of the app (is the port open or closed? is the menu open or closed?)

~~~

How React Works (Vid.2): 
The lifeblood of React is COMPONENTS. 
For example: NavBar, Search Box, and Footer will all be components. It is React's job to take those components and inject them into the DOM so we can see them on the webpage.

NavBar --> Virtual Dom (New and Old comparison to updates) --> Browser 

How? 
React creates a JavaScript representation of the DOM (Virtual DOM) and it renders it to the browser -- thus, we see the components. 
Everytime we change one of those components, React will see & update it to the DOM very quickly. 

COMPONENTS 
- look like HTML templates, but they're actually JSX (JavaScript XML) 
- They contain the 'state' (data or UI state) 
- also contain JavaScript for functionality 

~~~

React Setup (with CDN) (Vid.3): 

React CDN Setup - 

https://reactjs.org/docs/cdn-links.html

- Copy the two script tags at the top of the page and paste them in your html file under meta-name
- the top script tag is the CORE REACT LIBRARY
- the bottom script tag is the REACT DOM LIBRARY 

- create div tag for app 

- Install packages: ES7 React/Redux/GraphQL/React-Native Snippets and Sublime Babel
ES7 Will give us some shortcuts to snippets of code so we can easily create components or imports etc. 
Sublime Babel will give us some syntax highlight for when we write JSX for our component template 

~~~

React Components (Vid.4): 

- Create a React component to take control of the div we made in the previous video
- We use classes to blueprint in JavaScript 
        //we have access to the React object & inheriting the base functionality of Component by doing the dot notation
        //class-based components must have 1 function (render) 
        //render is what is responsible for rendering our template to whatever element we want to render to in this case <div id=app>
- We need only ONE root element in our component <div>
- We use className instead of class for our css 

How to we render this to the Dom? 
 ReactDOM.render(<App />, document.getElementById('app')); 
 
    //(first parameter is what component we want to render to the DOM (in a tag), and the second parameter is WHERE we want to render it to the DOM)

Babel will transpire our code so the browser can read it!
- JSX won't be read by the browser on its own, for that, we use: 
Babeljs.io 
- Setup, In The Browser, grab script tags

~~~

Component State (Vid.5): 

- The state of the DATA or UI of the component 
- The state of a component can be updated over time (a model could close, the data we output could change) 
- Keeping the STATE and the OUTPUT in sync with each other 

- In this video, we're going to add STATE to the component we made in the previous video.
- adding state = {} is our INITIAL STATE
- We want to output the state to the template!
- It is dynamic content, so it will be wrapped {} 
- overtime, the state is going to change

~~~

React Dev Tools (Vid.6): 

- Install React Developer Tools on Google Chrome
- This will help you when you're developing applications 
        - keep track of the state and the different components in your app
- React tab in the Inspect to do some testing
        - you can see all the different components a React app is using

** Whenever we change the state of a component, that component is going to rerender the template to the DOM to reflect that change (in INSPECT)

~~~

DOM Events (Vid.7): 

 - Create simple Click event with a Button
 - We create the function that will run when we click the button under the state of the component
 - <button onClick={this.handleClick}>Click Me</button>
 - We have to say this.handleClick because this refers to the component which the function is stored 
 - We also created an onHover function and an onCopy function! 

 ~~~

 Changing State (and 'this') (Vid.8): 
 
 - We cannot access this.state in our functions, but we CAN in our template (!?)
 - This has to do with the VALUE of this. in the two different locations 
 - In JavaScript, the context of this. keyword inside of a function is generally determined by how/where the function is called, NOT by where the function sits (?!)
- We have to manually bind the context of the this keyword to our functions
- In the render() method, we CAN access this.state
        - that is a built-in React function so it automatically binds this.state to the function 
        - outside of render(), we have to do it ourselves

** The solution is AN ARROW FUNCTION! => 
        - Arrow functions bind the value of this. to whatever this is outside of the function (inside the class component in this example) 

        EXAMPLE: handleClick = (e) => {
                this.setState({
                    name: 'Yoshi',
                    age: 25
                });
                console.log(this.state); 
            };

        this.setState function changed the name from 'Ryu' to 'Yoshi' and the age from 30 to 25

~~~


