#!/bin/bash
PROJECT=moa-angular-filter
uglifyjs --compress --mangle --source-map-url ${PROJECT}.map --source-map ${PROJECT}.map --output ${PROJECT}.min.js -- ${PROJECT}.js
