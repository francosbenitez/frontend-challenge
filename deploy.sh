#!/usr/bin/env sh

# abort on errors
set -e

# access to the app folder
cd vue-app

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'chore: deploy app'
git push -f git@github.com:francosbenitez/frontend-challenge.git master:gh-pages
cd -