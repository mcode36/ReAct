### How to clone specific subfolder from Github

~~~~bash
mkdir directoryName
cd directoryName
git init
git remote add origin -f repoUrl
~~~~

After that, we want to add the directory to 

.git/info/sparse-checkout
(this is essentially the opposite of the gitignore file).

Then we can 

git pull origin master
and it should download only the folder you want. 
