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
    - 
Start here again. I think next thing needs to be change something and push to repo to see build happen

