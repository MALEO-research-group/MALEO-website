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
	cwd=$(pwd)
	published_repo="../MALEO-research-group.github.io"
	cp -r _site/* $published_repo
	cd $(published_repo)
	git add *
	git commit -m "update website"
	git push
	cd $(cwd)

clean:
	rm -r .jekyll-cache
