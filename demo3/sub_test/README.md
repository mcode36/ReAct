### How to clone specific subfolder from Github

Say we have a repository "ReAct" on github. It's URL is https://github.com/mcode36/ReAct  
And we want to copy only the sub-folder in the repo, which is https://github.com/mcode36/ReAct/tree/master/demo3/sub_test  

~~~~bash
mkdir try_sub
cd try_sub
git init
git remote add origin -f https://github.com/mcode36/ReAct
~~~~

**This step is important**
~~~~bash
git config core.sparseCheckout true
~~~~

After that, we want to add the directory to the file .git/info/sparse-checkout
~~~~bash
demo3/sub_test
~~~~
or, do this under 'Git Bash' command prompt:
~~~~bash
echo "demo3/sub_test" > .git/info/sparse-checkout
~~~~

**This step is important**
~~~~bash
git config core.sparseCheckout true
~~~~

Then we will run git pull to clone the sub-folder: 
~~~~bash
git pull origin master
~~~~

