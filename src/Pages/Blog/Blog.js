import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto w-3/4 my-36'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <b>There are four main types of state you need to properly manage in your React apps:</b>
                    <p><strong>Local (UI) state</strong> – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.</p>
                    <p><strong>Global (UI) state</strong> – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                    <p></p>
                    <p><strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                    <p><strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.</p>
                    <br /><br /><p>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>

                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                        <br />
                        All JavaScript objects inherit properties and methods from a prototype. Such as: <br />

                        Date objects inherit from Date.prototype.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <b>Unit Test:</b>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. </p>
                    <b>Unit test we write for:</b>
                    <p>act as documentation of your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        It simplifies the debugging process.
                        Unit testing is an integral part of extreme programming.  Unit tests make code reuse easier. Unit testing improves code coverage.  </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
               React vs. Angular vs. Vue?


                </div>
                <div className="collapse-content">
                    <p><strong>Angular.js</strong> is an MVC framework. All significant Google projects have been developed with Angular.  A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p><br />
                    <p><strong>React.js</strong> just provides one view, it is not appropriate for building an MVC architecture. React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.</p><br />
                    <p><strong>Vue.js</strong> is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks. Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;