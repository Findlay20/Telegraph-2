# Telegraph clone

## Installation
- Clone or download the repo
- Open terminal and navigate to the repo folder 
- Type `bash _scripts/startDev.sh` to start development
- Type `bash _scripts/stop.sh` to stop
- Type `bash _scripts/teardown.sh` to stop & remove volume

Goto http://localhost:8080 to see website. 

## Changelog
- Added basic form and styling to client page
- get posts and send post functions set up
- Added All Posts view on page
- Added individual view for posts
- Updated styling


## Bugs
### Client
- Submit button doesn't always work - only every 2nd time
- direct links to post only work after visiting page first
- address bar fills up with inputted information and never clears

### Server
- Cannot get date to display when localhost:3000/posts