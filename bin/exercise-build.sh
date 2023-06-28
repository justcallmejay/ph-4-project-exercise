#!/usr/bin/env bash
# exit on error
set -o errexit

#front end build commands
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

/usr/share/rvm/gems/ruby-2.7.4/bin/bundle install
# bundle exec rake assets:precompile # These lines are commented out because we have an API only app
# bundle exec rake assets:clean
/usr/share/rvm/gems/ruby-2.7.4/bin/bundle exec rake db:migrate
/usr/share/rvm/gems/ruby-2.7.4/bin/bundle exec rake db:seed
