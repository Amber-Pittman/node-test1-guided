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

2. In order for Jest to find our test files when it runs, our tests have to be either in a folder called `__tests__` **_or_** if you have any files names in your project that end with `.test.js` or `.spec.js`.

    * By default, Jest looks in the __tests__ folder's test files first. 

    * Depending on the type of test, it's kind of convention to keep your unit tests in spec files or test files right next to the function they're testing. 

    * If you're writing integration tests, it makes more sense to put integration tests in their own folder somewhere.  

3. Since we're only writing unit tests in this lecture, we're just going to be working from these spec files. Open the empty `calculator.spec.js` file. Add our first test.

    * Call tests as a function and give it a description. Add a callback as the second param. 

        ```
        test("runs our first test", () => {})
        ```

    * Inside the callback, write our assertions. For example we can expect 1+1 to be 2.  

        ```
        test("runs our first test", () => {
            expect(1 + 1).toBe(2)
        })
        ```
    * Our first unit test isn't really doing anything with the calculator yet. We're just kind of setting things up so we can run them later on. 

    * If we tried to run this file with node with `node calculator/calculator.spec.js`, we're going to get an error saying the test is not defined. That's because we have to run this with Jest. Right now, it isn't using Jest at all.

4. Go into package.json. Inside the file, create a new script for running the test suite. Now, when we run NPM tests, it's going to run Jest. 

    * Jest is going to go through our project and find all of our test files. Since the file ends with a `.spec`, it's going to find this file and run the test. 

    ```
    "scripts": {
        "test": "jest",
    },
    ```

    * Go to your terminal and run `npm test`.

        * You'll see that Jest automatically finds our spec file and runs the tests inside it.

        * Since 1 + 1 does equal 2, our test passes. 

    * Try changing the value of 2 to 3 then save your file. Run the test again. Obviously, 1 + 1 does _not_ equal 3, so the test fails.

        * "We're receiving the value of 2 but you're telling us it should be 3. That's incorrect."

    * **Q:** Where are these global variables, the values tests expect coming from? We didn't import them anywhere, so where are these functions coming from? **A:** They're coming from Jest. They're what's known as _Globals_.

        * When we run Jest through our test script, it actually injects some global variables into the default namespace. So we can just call those functions without having to import them anywhere. 

        * It makes writing our tests a little bit easier. 

        * You can see a [list of all of Jest's Globals](https://jestjs.io/docs/en/api) if you're interested. 

            * These globals are just available without importing anything

            * We have tests, describe (we'll talk about a bit later), run functions before and after each test, or before and after your entire testing suite, before each, after each, etc.

5. Instead of restarting the test command over and over every time you want to do a test, specify a `watch` flag with Jest. 

    * We want to keep that test script as jest without actually watching if we just want to have a one-off instance of running our tests. 

    * If we're actively developing and changing stuff, we might want to create another script and call it `test:watch`. 

    * Now, instead of running `npm test`, run `npm run test:watch`.

        * Calling jest with --to-watch or --watch only watches the files that are a part of your tests.

        * Using -watchAll has Jest watch all of your files, whether or not it's being tested.

    * It runs our failing test again, as Jest is still expecting it to be 3. Without stopping the script, go into our code and change that value back to 2. 

    * Immediately after we save our spec file, Jest tests. 

    * Consider it a 2nd pair of eyes in the background. Anytime we change anything in our code, it's going to rerun our tests to make sure nothing broke. 

    ```
    "scripts": {
		"test": "jest",
		"test:watch": "jest --watch"
	},
    ```

6. Our first test is not super useful at the moment - it's not really testing anything other than itself. It's self contained as a placeholder test. If it were a real test, it would probably import a function from another file and test that function. 

7. We're going to create a really basic calculator file just by defining functions for adding, subtracting, multiplying, and dividing numbers. That's it. Then, we're going to write tests for each function. Go to the calculator file.

    * Start with the add function. 
        
        * Take in 2 parameters. We'll take in 2 numbers that we'll add together and return the result.

        * Since this function is going to be used in the test/spec file, we need to need to export it.

        * Considering we're going to have multiple functions in the file, we'll export an object.

        * Now create a test for this function. Git rid of the placeholder test. 

            * Import the calculator. 

            * Create a new test and use the add function from the calculator file.

            * Give it a callback.

            * Inside the callback, we need to test the result of the add function. Just say calculator.add. 

            * Let's pass in 2 and 2. 

            * Assign a variable to calculator.add().

            * Assert the result. You can expect the result to be 4.

            * Success! The automated test should show a Passing result on this real function. 
            
        ```
        // calculator.js\\

        function add(a, b) {
            return a + b
        }

        module.exports = {
            add,
        }

        // calculator.spec.js \\

        const calculator = require("./calculator")

        test("add()", () => {
            const result = calculator.add(2, 2)
            expect(result).toBe(4)
        })
        ```

        * If another dev comes behind you and doesn't realize they've changed the add function's plus sign to a multiplication symbol, your test on the add function still passes. But why? Think about the arithmetic here: 2 + 2 is 4 _but_ 2 * 2 is also equal to 4. 

            * This test, as it stands, could potentially give us a false-positive. It's telling us that everything is okay when it's really not.

            * To prevent false-positives, create more use-cases. 

            * Our tests really should contain multiple assertions, not just one. We can have multiple expect calls in a single test, rather than just one. 

                * We should be calling our function with a whole bunch of different values just to see what it does.

                * Let's refactor this a little. Since we're going to have multiple expect calls, you can actually just pass calculator.add; you don't have to assign it to a variable. Just pass that directly to expect as a one-liner. 
                
                * Don't forget to change the multiplication symbol back to a + sign if you want your test to pass.

        * Add more assertions now that the test has been refactored.

            * We should be thinking of all the different pieces of data that could potentially get passed to our function. 
                
                * Try it with a zero to make sure it still works. 

                * Maybe try it with a negative

                * Try it with a missing parameter. Without a 2nd param, test fails

                * What about no params? Without the params, test fails

                * What happens when you try passing in _null_? 

                * If you pass in a string, what happens?

            * To correct the issue with missing params, give a default value to each in the function. `a = 0, b = 0` That way, if one or both of the values are not passed in, it just defaults to zero for the missing param(s).

        ```
        // calculator.js\\

        function add(a = 0, b = 0) {
            return a + b
        }

        module.exports = {
            add,
        }

        // calculator.spec.js \\

        const calculator = require("./calculator")

        test("add()", () => {
            expect(calculator.add(2, 2)).toBe(4)
            expect(calculator.add(2, 10)).toBe(12)
            expect(calculator.add(3, 2)).toBe(5)
            expect(calculator.add(0, 2)).toBe(2)
            expect(calculator.add(-2, 3)).toBe(1)
            expect(calculator.add(16)).toBe(16)
            expect(calculator.add()).toBe(0)
            expect(calculator.add(5, null)).toBe(5)
            expect(calculator.add(18, "40")).toBe(NaN)
        })
        ```

    * Create the subtract function.