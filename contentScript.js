// // Content Script
// console.log("Content script is running.");
// console.log("This is a test log message.");
// console.log("Some other relevant information.");

// Rest of your content script code...

// window.addEventListener('DOMContentLoaded', () => {
//   const userImageUrl = document.getElementsByClassName("h-6 w-6 rounded-full object-cover")[0];
//   console.log(userImageUrl);
//   console.log('hello')
// });

function addSaveButton(problemName){
  setTimeout(() =>{
    const saveButton = document.createElement('img');
      saveButton.src = chrome.runtime.getURL("assets/bookmark.png");
      saveButton.className = "ytp-button " + "bookmark-btn";
      saveButton.title = "Click to save problem details";
      saveButton.width="50";
      saveButton.height="50";

      const leetcodeNav = document.getElementsByClassName('relative ml-4 flex items-center space-x-4')[0];
      leetcodeNav.insertBefore(saveButton,leetcodeNav.firstChild);
      saveButton.addEventListener('click',() => saveProblemDetails(problemName));
     
    
  },1000)
};
//addSaveButton();
chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
  console.log('hello')
  const {type,problemName} = obj;
  if(type==="NEW"){
    addSaveButton(problemName);
    console.log(problemName);
  }
  
      // Call the handleMessage function when a message is received
      //handleMessage(message);
  sendResponse('message recieved')
});

//add a plus button also check if the user has submitted the code only then add the details other wise 
//show to add the output
function saveProblemDetails(problemName){
  console.log(problemName +' solved at '+ getDate());
}
function getDate(){
  const date = new Date();
  return date.toLocaleDateString();
}