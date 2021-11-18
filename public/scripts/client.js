/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {
  $('#tweet-container').prepend(
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
const loadTweets = function() {
  $.get('/tweets').then(data => {
    // console.log(data)
    for (const tweetData of data) {
      createTweetElement(tweetData);
    }
  })
}

// const displayErrCall = function() {
//   $(".errmsg").text(``)
// }

$(() => {
  $(".err-msg").hide();
  loadTweets();
  // add event listener
  $('#newtweet').on('submit', function(evnt) {
    evnt.preventDefault();
    
    // serialize evnt.target.text.value and send to server
    const serializedTxt = $('#tweet-text').serialize();
    
    // validation
    if (evnt.target.text.value.length === 0) {
      $(".err-msg").show().text('Empty tweet cannot be posted!');
      return false;
    } 
    if (evnt.target.text.value.length > 140) {
      $(".err-msg").show().text('Your tweet is too long!! Try a shorter one!');
      return false;
    }

    $.post('/tweets/', serializedTxt).then(function() {
      // console.log(evnt.target.text.value.length)
      
      // refetch the new tweet after each post
      $.get('/tweets').then(data => {
        const last = data.length - 1;
        createTweetElement(data[last]);
      })
      $("textarea").empty();
    })
  })
});