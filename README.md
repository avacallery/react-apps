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

Create React App (Vid.10): 

- a command line tool to create React apps
- Allows us to supercharge our React app and use :
       a development server, 
       use ES6 features, 
       keep our code modular, 
       and use build tools to create optimized code

~~~

Single Page App (Vid.11): 

- React apps are typically SPA's
- Only ever one HTML page served to browser from the server
- React then contols (and updates) what a user sees on the page depending on how they interact with it
- React "saves the trip" of the request/response with the server and makes our app faster 

                        npx create-react-app my-app
                        cd my-app
                        npm start

~~~

Nesting Components (Vid.12): 

- There is (1) root component at the top of the tree. 
- All other components are nested within that component 

~~~

Props (Vid.13): 

- We have parent components and child components. 
- children components (ex. Ninjas) are nested within the parent component (ex. App)
-  PROPS are a way for us to pass data from one component (parent) to another component (the child) without hardcoding

** PROPS - short for PROPERTIES
- we can access the props we code into parent by using this.props (this referencing to the component, .props to access the props object on this component) 

** DESTRUCTURING: 

const { name, age, belt } = this.props

- INSTEAD OF - 

{ this.props.name }
{ this.props.age }
{ this.props.belt }

~~~

Outputting Lists (Vid.14): 

- Cycle through data: 
- get original array which we assigned and imported from the state (ninjas)
- we MAP through the array and get each individual item in the array 
- perform a function for each individual item 
- inside the function we return JSX for each item 
- stores JSX in a new array called ninjaList
- output ninjaList 

~~~

Stateless Components (Vid.15): 

** Container Components (App.js, ContactForm.js) 
        - Contain state
        - Contain lifecycle hooks
        - Not concerned with how the app looks
        - Use classes to create

** UI Components (Navbar.js, Ninjas.js)
        - Don't contain state
        - Recieve all data from props
        - Concerned with how the app looks
        - Use functions to create

** Reformat Ninjas.js so it is a FUNCTIONAL COMPONENT (HOW is the data outputted) 
- when we use a functional component like this, we don't automatically get the props passed to it like we do inside of a class-based component
- we have to take the props in as a PERAMETER to the function then we can access them without using (this)
- you can have multiple parameters if you destructure it like 
const Ninjas = ({ninjas, shopping, age}) =>

~~~

Condtional Output (Vid.16): 

- Sometimes we want to only want to show something to a user based on certain conditions: if they're logged in, if they have 5 items in their shopping cart, etc. 

HOW? 
- You can use an If statement above the return statement when we are outputting the new ninjaList 
- Use ternary operator in JavaScript 
        - condition ? () : () 
- Nest it directly into the return template

~~~

Forms Revisited (Vid.17): 

- Create new file called AddNinja.js 
- Class-based component or UI component? 
        - We need to store locally what a user types in to each input field on a component state. 
        - Because we need that state, this will be a class-based component. 
- Create a form to submit a new ninja and log it to the console
- Create a function (onChange) that will update on the fly whatever the user types into the inputs
        - We want to update the state depending on where the user has typed
        - this.setState({[e.target.id]}); 
        - Using id of the target element, we can query the id and use it to update the property 

~~~

Functions as Props (Vid.18): 

// Pass a function down as a prop into another component 
// Call that function from the component 
// Pass information back up to the parent component & alter the state of the parent component 

- Add new ninja object to the state of the root component (ninjas in App.js) so it updates to the browser 
        - Create function (addNinja) inside App Component that will add new ninja to the state
        - takes perameter of new object (ninja)
        - pass addNinja={this.addNinja} as a prop in component AddNinja so we can call that function insisde that component
        - in AddNinjas.js, in handleSubmit
                - this.props.addNinja(), which takes the expected ninja object as a parameter (this.state) because this object looks like what we're submitting

- take new ninja object and add it to the state in App.js
        - in App.js, in addNinja, we want to assign random id for new object
                - ninja.id = Math.random(); (this will do for now)
        - set the state! but do not alter the original state
        - instead, we will create a copy of the array, and add the new ninja to the copy of the array, and then assign new array to ninjas (in addNinja in App.js)
                - SPREAD OPERATOR: let ninjas = [...this.state.ninjas, ninja]
        - then, set the state 
                - this.setState({ ninjas: ninjas })