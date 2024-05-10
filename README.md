This is a sample repo I made for @seanmtracey to show him how Turbo can be used without Rails.

The application uses an out-of-the-box express app made with [express-generator](https://expressjs.com/en/starter/generator.html). If you're interested in the Turbo parts, [look at this commit](https://github.com/joshvince/turbo-off-the-rails/commit/a30c5039248cbe40705b617985897ca3f15d245f).

## Installing the application
- npm install

## Running the application
- npm start
- visit localhost:3001

## The Turbo examples
There are two examples showcasing Turbo Frames: one that loads content from the server and replaces the frame on the page with the response, and one that does this automatically on page load.

Turbo also has features for [navigation](https://turbo.hotwired.dev/handbook/drive) and [turbo streams](https://turbo.hotwired.dev/handbook/streams). In my experience, streams are a lot more complicated
and often frames will be a better option, especially as the recent release of Turbo 8 introduced DOM morphing.

Also cool to check out is the (also recent addition of) [turbo prefetch](https://turbo.hotwired.dev/handbook/drive#prefetching-links-on-hover) which fetches the contents of a link on hover,
improving the perceived speed of the page.

Happy exploring!
