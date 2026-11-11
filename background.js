browser.action.onClicked.addListener((tab) => {
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // func is serialized and executed in the context of the web page.
      // alert("Clicked extension button and ran script at " + document.URL);
      do {
        var content = document.body.textContent || document.body.innerText;
        var hasText = content.indexOf("Not found")!==-1;
        console.log('spam');
        
        window.location.reload();
        alert("reloaded");
        new Promise(resolve => setTimeout(resolve, 100))
      } while (hasText);
        console.log("It's over");
      
    },
    injectImmediately: true,
  });
});



