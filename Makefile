install:
	bundle install

build:
	bundle exec jekyll build

buildproduction:
	JEKYLL_ENV=production bundle exec jekyll build

preview:
	bundle exec jekyll serve --incremental --trace --watch

publish:
	JEKYLL_ENV=production bundle exec jekyll build
	cp -r _site/* ../MALEO-research-group.github.io
	cd ../MALEO-research-group.github.io
	git add *
	git commit -m "update website"
	git push

web:
	open https://www.maleo-research.de

weblocal:
	open http://127.0.0.1:4000

clean:
	rm -r .jekyll-cache
