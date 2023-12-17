#! /bin/bash

repoRoot=$(pwd)

cd ~
mkdir -p test-packages
cd test-packages

# remove the old ones
rm -rf *tgz

cd $repoRoot


#  pack the work
npm pack --pack-destination ~/test-packages

cd ~/test-packages

#  move it to be named how package.json is expecting
mv *tgz expo-clear-input-test.tgz

cd $repoRoot/test-suite

# remove the old
rm -rf package-lock.json
rm -rf node_modules

npm install

echo "test set up."
