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

~~~

Deleting Data (Vid.19): 

Delete objects from the array: output a button for each object in the array with an onClick function that will delete
        - Create and pass function (deleteNinja) down as a prop so we can use it in the Ninjas component
        - pass deleteNinja as a parameter in Ninjas (in Ninjas.js)
        - output a delete button for each ninja in this component 
        - wrap function in an anonymous function so deleteNinja will only fire when the button is clicked 
                - <button onClick={() => {deleteNinja(ninja.id)}}></button>
        - In App.js, we can use filter() to cycle through the array to return a copy of the array with whatever we filter out, aka the id that we pass through

~~~

Recap & Virtual DOM (Vid.20): 

- We are working with states, props, and functions so far

Ninjas.js (UI Components) <- App.js Container -> AddNinja.js Container 
- App.js passes the prop (ninjas) to Ninjas.js
- App.js passes the prop (addNinja) to AddNinja.js
- everytime we get an updated prop, we update the jsx template and React makes the new Virtual DOM
- the NEW Virtual DOM and CURRENT Virtual DOM are compared and the differences are updates to the browser (the DOM) 

~~~ 

CSS Files (Vid.21): 

- Importing CSS into a component will add to the rest of the components (EX: background pink)
- scope your styles (EX: .ninjas form { background: pink})

https://blog.pusher.com/css-modules-react/

~~~

Lifecycle Methods (Vid.22): 

Mounting, Updating, and Unmounting

- We can compare the previous state and the updated state in the console by using these functions in App.js: 

        componentDidMount(){
        console.log('Component mounted.')
  }
        componentDidUpdate(prevProps, prevState){
        console.log('Components updated.')
        console.log(prevProps, prevState)
  }

  - this will log our updated/changed data to the console

  ~~~

  Todo App (Part 1 & 2) Videos 23 and 24 found in separate repository 

  ~~~

  The React Router (Vid.25): 

  - The React Router intercepts requests from going to the server and coming back by just injecting the component it needs to to the root component 
  - npm i react-router-dom is the package that allows us to set up the router inside of Poke'Times (Home, About, Contact)

  ~~~

  Links & NavLinks (Vid.26): 

  - We want React to come take over so we don't keep on reloading the page when we navigate through our routes by using Link and NavLink tags 
        - this prevents the default action when we click the anchor tags

~~~

Programmatic Redirects (Vid.27): 

Redirect a user to a different page
- console.log the props in Contact.js to view the history 

        const Contact = (props) => {
                setTimeout(() => {
                props.history.push('/about')
        }, 2000)

- we use the higher order component withRouter to supercharge Navbar... with this we can log the props to the console

~~~

Higher Order Components (Vid.28): 

- Functions which wrap other components and give them extra features
- For example, we use this with Navbar.js. We pass it into the Higher Order Component. withRouter added props to the Navbar component so we could log props info to the console

- inheritence - passing the power down through the DOM 

- Create a higher order component to generate a new text color every time you refresh the page
        - Create a function (Rainbow in Rainbow.js) that takes WrappedComponent as its parameter 
        - Write whatever you want to happen in the function (in this case, it was to randomize a list of colors)
        - return WrappedComponent
        - export
        - use on About component (wrap About in Rainbow at the bottom of About)

~~~

Using Axios (Vid.29): 

- Typically we want to grab data from another source
- Use npm i axios to fetch data and import it from another source 
- store it to the state and cycle through it in the template - and don't pull your hair out when it doesn't work for20 min 

~~~

Route Parameters - Part 1 (Vid.30): 

- Part of a URL that can change 
- Usually see them on URLs for individual records (profile routes)

To do this in our app: 
        - Set up Post param in App.js 
                <Route path='/:post_id' component={Post} />
        - create Post.js which will be a class-based component 
        - this is where we will write a funtion that will grab that dynamic content 
        - inside of this component we can identify what the route parameter is and that is "fricken awesome" lol 

~~~

Route Parameters - Part 2 (Vid.31): 

From the home page, we want to be able to click an individual post, have it bring us to its own page, and display information. 
        - We need to surround the title with a Link tag which will link us to the separate component

~~~

Switch Tag (Vid.32): 

We need a way to load the proper routes so /contact will just display Content information and /:post_id will just be a post! 

        - This is where the switch tag comes in. 
        - One route will take precedence and Switch will take the first route that matches and load 

~~~

Importing Images (Vid.33): 

        - Import the image you want to use
        - import in the Home component because we want to display an image for every post
        - style using css & pay attention to how the classes are nested! 

~~~

Redux (Vid.34): 

- Central data store for all app data
- Any component can access data from it 
- Makes state management easy

- Define central store in Redux (a JavaScript object which will represent the global state)
- if in a component we want to grab some data, the component subscribes to make changes, and redux passes using props 
- if component makes a change, it dispatches action (which describes the changes we want to make, ex. make a post) and the payload to the reducer 
- reducer (a single function aka the robot that sits outside of the Redux warehouse) evaluates the changes and updates the redux data store

~~~

Redux Stores (Vid.35): 

- Create your Redux data store and import Redux 
        - const store = createStore(myreducer)
        - myreducer is a function we pass through that takes parameters: the state and the action 
        - reducer will take the initState if there's nothing there/added
        - we the reducer will dispatch the action and change the state of the store based on the action 
~~~

Redux Actions (Vid.36): 

- Action is a JavaScript object that we pass through as a parameter for the reducer 

exmaple: const todoAction = { type: 'ADD_TODO', todo: 'play Animal Crossing'}

- dispatch the action
example: store.dispatch(todoAction) 

~~~

Redux Reducers (Vid.37): 

After we dispatch an action, the reducer will evaluate the action and see what needs to take place. 

We want to add a todo, so we create a new array. We do this in our reducer funtion: 

        function myreducer(state = initState, action){
                if (action.type == 'ADD_TODO'){
                        return {
                                todos: [...state.todos, action.todo]
                        }
                }
        }

~~~

Store Subscriptions (Vid.38): 

- Subscribe to the store to listen for changes and react to changes in the store
- we do this in a component in React 
        store.subscribe(() => { console.log(store.getState())}) }; 

~~~

Setting up Redux in React

- npm i redux 
        - this is a library we use to create the store
- npm i react-redux
        - the library that connects our app to the store 

How do we associate the store with our react app? 
        - by using react-redux component { Provider }

                ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
                registerServiceWorker(); 

        - Now we pass our store in our application

- create reducers folder in src 
- create reducer file that we will then import to the index.js file and pass it through createStore() 

~~~

Mapping State to Props (Vid.40): 

- we need to connect our components to the store so we can interact with the state and get data from the state


- we need to import a higher order component from the library so we can use it to connect the Home.js component to the store
- we do this by using { connect } and wrapping the component we want to connect

                export default connect()(Home)

- we still have to retrieve the data we want from the store
- if a component wants access, we need to map the data it wants from the store

- create function mapStateToProps = (state) => { }
- do map state to props, we have to return it in an object
- this object represents the different properties we want to add to the props 
- (for example -- posts: state.props)
- we then pass this function inside connect() so when we connect to redux it knows what data we want to grab from redux (state.posts) and the property we want to apply that data to (props)

                export default connect(mapStateToProps)(Home)

~~~

Blog Detail Page (Vid.41): 

- we want to be able to click on a post and receive the actual data from the state
- we connect Post component to our redux store, and we find individual post by using the find() method and using the route parameter (id) and we apply that to a Post object on our props so we can use it in the component

~~~

Map Dispatch To Props (Vid.42): 

- What if we want to change the state? (Delete a post?)
- we have to dispatch an action from the component with an optional payload (in a delete post, the id will be the payload)

- we call the function deletePost, which is firing the function down in mapDispatchToProps, and inside of that function we are making a dispatch and sending the action { type: 'DELETE_POST, id: id } to the reducer
- in rootReducer.js more detailed notes 
- in Post.js more detailed notes

~~~

Action Creators (Vid.43): 

- just functions that generate an action for us
- instead of writing out a bunch of new actions, we can reuse an action creator funciton and just call it where we need to 

~~~

Wrap up & Next Steps (Vid.44): 

- Not there yet mate!
- How to use async in redux, or connect redux to a database, and all the other cool dynamic stuff that we can do 