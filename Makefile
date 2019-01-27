NPM_BIN=./node_modules/.bin

cleanup:
	rm -rf build public/**/*.js public/**/*.css
tsc:
	${NPM_BIN}/tsc
build-client: tsc
	${NPM_BIN}/webpack --config ./webpack/webpack.client.config.js
build-server: tsc
	${NPM_BIN}/webpack --config ./webpack/webpack.server.config.js
build-css:
	${NPM_BIN}/postcss src/styles/style.css -d public/assets
build: cleanup build-client build-server build-css
start:
	node build/server.js
dev: cleanup build-server; ${NPM_BIN}/concurrently --raw --kill-others \
	"${NPM_BIN}/tsc --watch" \
	"${NPM_BIN}/webpack --config ./webpack/webpack.client.config.js -d --progress --colors --no-warnings --display-error-details --watch" \
	"${NPM_BIN}/webpack --config ./webpack/webpack.server.config.js -d --progress --colors --no-warnings --display-error-details --watch" \
	"${NPM_BIN}/postcss src/styles/style.css -d public/assets --watch" \
	"NODE_ENV=development ${NPM_BIN}/nodemon --delay 1 --watch build build/server.js"
