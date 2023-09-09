for release management
https://github.com/googleapis/release-please

// git flow

git adding file
run npm run commit instead of git commit
and then npm run release when you want to release
and then npm run publish when you want to publish (git push --follow-tags origin dev) for examples
https://cz-git.qbb.sh/config/
// style lint for nx
https://github.com/Phillip9587/nx-stylelint
https://github.com/commitizen/cz-cli
"lint": "eslint --ext .ts,.html src/ demo/ --cache --cache-location=node_modules/.cache/.eslintcache",
"lint:fix": "eslint --ext .ts,.html src/ demo/ --fix --cache --cache-location=node_modules/.cache/.eslintcache",
"format": "prettier --list-different \"**/*.{ts,json,css,scss,html}\" --cache",
"format:fix": "prettier --write \"**/*.{ts,json,css,scss,html}\" --cache",
"commit": "git-cz",
"build": "ts-node --dir build build.ts",
"release": "standard-version",
"publish": "ts-node --dir build publish.ts",
