#!/bin/bash
CSS_SOURCE = css
JS_SOURCE = js

default: minimize.stylesheet minimize.javascript

minimize.stylesheet: build.stylesheet
	lessc --yui-compress $(CSS_SOURCE)/all.css > $(CSS_SOURCE)/all.min.css

build.stylesheet:
	cat \
		packages/modernui/css/modern.css \
		packages/modernui/css/modern-responsive.css \
		packages/codemirror/lib/codemirror.css \
		$(CSS_SOURCE)/main.css \
	> $(CSS_SOURCE)/all.css
	cp -r packages/modernui/fonts ./fonts

minimize.javascript: build.javascript
	cd $(JS_SOURCE) && uglifyjs app.js -c -m -o app.min.js \
		--source-map app.min.map \
		--source-map-url app.min.map \
		--in-source-map app.map

build.javascript:
	cd $(JS_SOURCE) && uglifyjs ../packages/jquery-1.10.1.js \
		../packages/codemirror/lib/codemirror.js \
		../packages/codemirror/mode/xml/xml.js \
		../packages/codemirror/mode/javascript/javascript.js \
		../packages/codemirror/addon/fold/foldcode.js \
		../packages/codemirror/addon/fold/brace-fold.js \
		../packages/codemirror/addon/fold/indent-fold.js \
		../packages/codemirror/addon/fold/xml-fold.js \
		../packages/modernui/javascript/dropdown.js \
		../packages/modernui/javascript/input-control.js \
		main.js \
		-b -o app.js \
		--source-map app.map \
		--source-map-url app.map

css: minimize.stylesheet

js: minimize.javascript
