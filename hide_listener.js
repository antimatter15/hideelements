var last_target = null;
document.addEventListener('mousedown', function(event){
  //possibility: check that the mouse button == 2
  last_target = event.target;
}, true);


chrome.extension.onRequest.addListener(function(event){
  /* If this were a pattern for creating DOM-enabled context
     menu addons, here would be where your code goes*/
  last_target.style.display = 'none';
})
