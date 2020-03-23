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