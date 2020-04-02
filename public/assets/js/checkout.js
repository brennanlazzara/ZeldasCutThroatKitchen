$(document).ready(function () {
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length-1; i++) {
    let hash = hashes[i].split('=');
    $("#checkoutDIV>ul").append("<li>" + decodeURIComponent(hash[1]) + "</li>");
  }


  $("#checkout").on("click", function (){
    $(this).text("April Fools!")
  });
});