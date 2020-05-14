# Node: WEB Unit Testing

### Big Ideas

1. **Q:** Why is it important to test? **A:** We test to make sure stuff works. When we're testing the backend, we're testing plain-old output data. It's really, really straightforward. 

2. In the past when we've written some code or created an endpoint on our backend, what's the first thing we do? We test the endpoint in Insomnia to make sure it all works correctly. This is how we've been testing our code up until now. It's been a very manual, tedious process. 

    * When it comes down to it, humans are really slow with that kind of stuff. 

    * The tedious flow of manually testing in Insomnia is compounded as you write more code. Not only do you have to test the new code, but you got to test the old code again to make sure the new code didn't break anything in the old code.  

3. We can tell our apps to test themselves with **_Automated Testing_**. 

    * Automated Testing is when we write code to test our other code. This way, when we write a test for something, it's permanent. 
    
    * Anytime we create a new test in the future, all of those old tests are going to continue running, checking for bugs in the code.

    * If at some point we write new code that breaks old code, our old tests are going to start failing again. But we can go find where the issue is and fix it. This is known as a **_regression_**: when newer code breaks older code. It's not something you would find if you were testing manually. 

    * When we automate the testing, though, we can find those regressions easily because those old tests are still running even when we're not working on that code anymore.

    * Really, any significant piece of software in the wild that's depended on by people, it has automated tests written for it. Otherwise, it would be very unfortunate.

        * For example, think about Bitcoin. The Bitcoin code is mostly written in C++. A _lot_ of people have money invested into it. It's used for real-life financial transactions.

        * What would happen if the Bitcoin source code had no automated testing? Think about a new dev coming in, writing some code to develop a new feature, and introduced some kind of bug into a different part of the system without realizing it. All because there was no automated testing.

        * That bug could potentially go unnoticed for a really long time and who knows at what level of harm. It could be corrupting the blockchain or causing the bitcoin value to drop significantly.

        * Depending on what it is, it may be too late to fix it by the time it's noticed. The same thing could be said for banking software, aviation software, or even the software that's used in your car. Having buggy, untested software can be life-threatening. 

4. Automated Testing does come with a few drawbacks. 

    * Mainly, it requires we write more code. Writing code to test our code.

    * Requires additional tooling and dependencies to run the test code - test runners, assertion libraries, etc.

    * You have to fix old tests if they stop passing. You have to figure out why they're not passing. It takes time to go back in time and debug our apps to figure out what the actual problem is with these older tests. **This is also a Pro; not just a Con, since we can catch bugs we wouldn't normally notice.**

5. Even though Automated Testing has its drawbacks, the Pros far outweigh the Cons. There should be _very limited_ situations where you would consider _not_ writing tests for your software. Whether you're building an API or you're working on healthcare software, testing is important, no matter what type of software you're writing. It's an _extremely important_ aspect to development - one of the most important. 

    * It will make you much more valuable as a developer if you can get into the habit of writing automated tests for all of your code, no matter what it is. 

6. Different Types of Automated Testing

    * Unit Testing

        * Testing small pieces of code such as pure functions, utility/helper/pure functions, etc. 
        
        * You're testing self-contained functions with unit testing.

    * Integration Testing

        * Testing how it works together or interact. 

        * It's testing how different functions are working together as a whole.

    * End-to-End Testing

        * Testing the system as a whole on how it's working.

        * It's also testing how it works with external, third-party resources.

            * Testing your app on how well it works with Stripe, Amazon Web Services, Heroku - some kind of external service.

    * Snapshot Testing

        * Looking for differences between previously saved snapshots of data

7. We have all different kinds of testing and they're all testing different things. 

    * When we're testing the backend, we usually use Unit Tests for our pure functions and our utility functions. 
    
    * Then we're going to use integration tests to test route handlers and middleware. 
    
    * We're not going to worry about implementing any end-to-end tests, snapshot tests, or A/B tests.

    * Instead, we're going to focus on Unit Tests and Integration Tests. 

    * During this lecture, we're going to focus _solely_ on unit testing. 

8. Tooling - tools used to help us run automated tests.

    * You may remember in Frontend using Jest or React-Testing-Library

    * We're going to use Jest. 

    * When choosing a tool, we must ask ourselves: 
        
        * What are we testing? 
        
        * What type of data are we testing?

        * Are we testing a frontend React app with user interactions, keyboard events, etc? 

        * Are we testing pure data that just comes from an API endpoint? 

        * Are we testing an integration with a third-party server like Stripe or Heroku?

        * Are we testing pure functions?

    * When it comes to our backend, what should we really be testing? What are the things we're going to be testing in our backend? 

        * The response data

        * Response headers

        * Response codes

        * Functions - utility/helper/pure functions, model functions

        * The database - the interaction with the DB and the actual DB; 
            
            * making sure it saves the data that's supposed to be saved

            * Making sure it retrieves the data that is supposed to be retrieved

    * We're going to focus on testing the utility functions, the response objects, and the data in our database. 

9. All [Jest](https://jestjs.io/) is, is a test-runner - a testing framework. 

    * Jest takes in a whole bunch of test code and runs against our app's code.

    * Jest is a pretty generic tool; not only can it be used to test the frontend but it can test the backend as well. 
    
    * It can be used to test in any JavaScript code in reality. It doesn't matter what the environment is as long as the language is JavaScript. 

    * Since we're already familiar with Jest, we can just use that to set up these tests as Jest is more than enough to test helper/utility/pure functions, response objects, and database data. 

10. Student Questions:

    * **Q:** What's the difference between a helper, a pure, and a utility function? <br> **A:** There is no difference. You can use those terms interchangeably. When referring to this type of function, it's a function that does one thing. They should always return the same result if they receive the same inputs. If you remember from React and pure functions, the function receives the same input. If it's a pure function, it will always return the same thing. 

    * **Q:** What's a function that might not be a helper function or is not a pure function? <br> **A:** A model function is a perfect example of this. It is something with side-effects. A model function queries data from a database and it's _not_ guaranteed to always return the same result. It could always return something different depending on what's in your database. 

### Code Along!

1. Install Jest as a dev dependency `npm install --save-dev jest`

2. 