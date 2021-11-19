# Tweeter Project

Tweeter is a simple, single-page Twitter clone, having the function of sending a tweet and fetch and display tweets from the server data.

## Final Product

1. The Tweeter can adapt its own layout to the size of browser, and can thus run on both desktop and smartphone.

!["desktop-size"](https://github.com/BosiC0015/tweeter/blob/master/public/images/desktop-size.png)

!["phone-size"](https://github.com/BosiC0015/tweeter/blob/master/public/images/phone-size.png)

2. When hover over the tweet article, the box will show a darker color and a shadow. When hover over the icons lower right, they will change color.

!["hover"](https://github.com/BosiC0015/tweeter/blob/master/public/gifs/hover.gif)

3. A new tweet can be sent by typing a text shorter than 140 characters in the text area and clicking the "TWEET" button lower left. The number lower right is a counter which tells you how many characters are still allowed in the text area. 

!["new tweet"](https://github.com/BosiC0015/tweeter/blob/master/public/gifs/new-post.gif)

It will turn red and minus when input is over 140.

!["input-over-140"](https://github.com/BosiC0015/tweeter/blob/master/public/images/input-over-140.png)


4. When trying to submit an empty tweet or tweet with more than 140 characters, an error message will show up.

!["empty-error"](https://github.com/BosiC0015/tweeter/blob/master/public/gifs/empty-error.gif)

!["too-long-error"](https://github.com/BosiC0015/tweeter/blob/master/public/gifs/too-long-error.gif)

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- Md5
- Timeago.js

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm run local` command.
- Go to <http://localhost:8080/> in the browser.