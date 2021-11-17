
const countChar = (text) => {
  let count = 140 - text.length;
  // const countNum = `<output name="counter" class="counter" for="tweet-text">${count}</output>`
  return count;
}

$(document).ready(function() {
  // --- our code goes here ---
  // const tweet = document.getElementById('tweet-text')
  
  $("#tweet-text").on('input', function() {
    const num = countChar(this.value);
    if (num < 0) {
      $("output").removeClass("counter");
      $("output").addClass("overcount");
    } else {
      $("output").addClass("counter");
      $("output").removeClass("overcount");
    }
    $("output").html(num);
  });
});