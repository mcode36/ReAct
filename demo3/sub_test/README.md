### How to clone specific subfolder from Github

Say we have a repository "ReAct" on github. It's URL is https://github.com/mcode36/ReAct
And we want to copy only the sub-folder in the repo, which is https://github.com/mcode36/ReAct/tree/master/demo3/sub_test

~~~~bash
mkdir try_sub
cd try_sub
git init
git remote add origin https://github.com/mcode36/ReAct
~~~~

After that, we want to add the directory to the file .git/info/sparse-checkout
~~~~bash
demo3/sub_test
~~~~

Then we will run this command: 
~~~~bash
git pull origin master
~~~~
and it should download only the folder you want. 
