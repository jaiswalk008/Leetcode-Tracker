chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("leetcode.com")) {
    const url = new URL(tab.url);
    const pathname = url.pathname;

    // Regular expression pattern to match the correct submission page
    const submissionPagePattern = /\/submissions\/[0-9]+\/?$/;

    if (submissionPagePattern.test(pathname)) {
     
      const queryParameters = pathname.split("/");
      const problemName = queryParameters[2].split('-').join(' ');// getting problem name
      console.log(problemName)
      
      //sending problem details to contentScript page
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        problemName: problemName
      });
    }
  }
});
