var quote1 = "";
$(document).ready(function() {

  $("#getQuote").on("click", function() {
    $.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function(json) {

      var text = JSON.stringify(json); //stringify = shows as text
      var obj = JSON.parse(text); //turn JSON to JS object
      var quote = obj.quote; //object key = quote
      var author = "- " + obj.author
      $(".displayQuote").html("&quot" + quote + "&quot");
      //object key = quote
      $(".displayAuthor").html(author);
      
           
      $(".tweet").attr("href", twitterURL(quote, author)); //for anything with class "tweet" the attr method runs twitterURL in place of the "href" element      
    });
  });

  function twitterURL(quote, author) {

    return 'https://twitter.com/intent/tweet?related=freeCodeCamp&text="' + urlReady(quote) + '%22%20' + urlReady(author);
  }

  function urlReady(text){
    text = text.split("");
    text = text.map(function(letter){
      var returnValue ="\u0025" + letter.charCodeAt(0).toString(16);
    if ((returnValue == "%2018") || (returnValue == "%2019")) {returnValue = "%27"}
    if ((returnValue == "%201c") || (returnValue == "%201d")) {returnValue = "%22"}
    return returnValue;       
    });
    text = text.join("");
    return text; //this was to fux with text vs. unicode 
    
  }
});