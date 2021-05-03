# Travis CI Demo
> Purpose: this demo is to show the standard functionality of the Travis CI and how it can be used to automatically complete certain tasks depending on the outcome of some testing script
## Steps to complete for Demo
1. __Fork this repo so you have a local copy of it in your GitHub account__

1. __Disconnect Travis CI from this repo (prior to the Demo)__
    - __Note:__ Prior to the start of the demo make sure __disconnect__ Travis CI from this repo.
      - Go to Account Settings --> Applications --> Configure (next to Travis CI) --> remove this repo form list of connected repos --> save

1. __Connect Travis CI to this repo__
    - Demo how to reconnect the repo to Travis CI
      - go to [repo menu](https://www.travis-ci.com/account/repositories) in your personal Travis CI account
      - Go to _"Manage repositories on GitHub"_
      - click on _"Only select repositories"_ radio button
      - select this repo
      - click on _"Approve and install"_

1. __Show Travis CI settings for the test repo__
    - Go to your [repo menu](https://www.travis-ci.com/account/repositories) in your personal Travis CI account and search for the now connected test repo, then click on _"settings"_
    - Point out the Environment Variables.  These will be necessary for connecting to AWS from Travis. You will use particular environment variables to set up CD.

1. __Push code to the repo and show that the Travis processes will build__
    - Create a new branch and make some small change to it, then commit it and push it to that branch in GitHub. I.e. `git push origin <yourBranchName>`
    - Once you have done that go into your Travis CI account and show the build logs
    - Note: that by default your `sum` test will not pass, and because of that an "after_failure" script will run (this prints an asci cat to the Travis CI console 🥴)
    - Walk the cohort through the [.travis.yml](./.travis.yml) file in the this repo that specifies what to do when a test fails and passes
      - If it fails a [makeCat](./cat.js) script runs that prints a random asci cat to the console
      - If it passes a [success](./success.js) script runs that prints a different asci message to the console 🙂 (feel free to change this message to whatever you want)

1. __Update test to pass the test, push again, and merge to show a successful build__
    - Change the test case in the [sum.test.js](./sum.test.js) file so that it will pass the test script ran by Travis CI
      - The code should look like this to pass:
      
      ```js
      const sum = require('./sum');

      test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
      ```
    - once you merge the file into the master branch go back to your Travis CI console and show them the build output

