NPM_BIN=./node_modules/.bin

cleanup:
	rm -rf build public/**/*.js
build-client:
	${NPM_BIN}/webpack --config ./webpack/webpack.client.config.js
build-server:
	${NPM_BIN}/tsc
	${NPM_BIN}/webpack --config ./webpack/webpack.server.config.js
build: cleanup build-client build-server
start:
	node build/server.js
dev: cleanup build-server; ${NPM_BIN}/concurrently --raw --kill-others \
	"${NPM_BIN}/tsc --watch" \
	"${NPM_BIN}/webpack --config ./webpack/webpack.client.config.js -d --progress --colors --no-warnings --display-error-details --watch" \
	"${NPM_BIN}/webpack --config ./webpack/webpack.server.config.js -d --progress --colors --no-warnings --display-error-details --watch" \
	"NODE_ENV=development ${NPM_BIN}/nodemon --delay 1 --watch build build/server.js"
