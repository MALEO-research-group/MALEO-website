install:
	bundle install

build:
	bundle exec jekyll build

preview:
	bundle exec jekyll serve --incremental --trace

clean:
	rm -r .jekyll-cache
