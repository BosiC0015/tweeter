/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {
  $('.container').append(
  `<article class="tweet">
  <header class="article-header">
    <div class="article-avatar-name">
      <div class="article-avatar">
        <img src="${tweetObj.user.avatars}" height="70px" width="auto">
      </div>
      <div class="article-name">${tweetObj.user.name}</div>
    </div>
    <div class="handle">${tweetObj.user.handle}</div>
  </header>
  <div class="tweet-content">
    ${tweetObj.content.text}
  </div>
  <footer class="article-footer">
    <div>${timeago.format(tweetObj.created_at)}</div>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`);
}

// get tweet data from '/tweets' and append to the .container by passing it to createTweetElement()
const renderTweets = function() {
  $.get('/tweets').then(data => {
    // console.log(data)
    for (const tweetData of data) {
      createTweetElement(tweetData);
    }
  })
}

$(() => {
  renderTweets();
});