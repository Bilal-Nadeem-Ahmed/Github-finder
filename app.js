// Client ID
//1e63525ae47f9f335afd

//Secret: 41406310760b2e018d3c4dda5d7dd41a7551554d


// initialise github class
const github= new GitHub;
// initialise ui
const ui= new UI;

// search input 
const searchUser=document.getElementById("searchUser");
// search input event listner
searchUser.addEventListener("keyup", (e)=>{
  // get input text
  const userText = e.target.value

  if(userText!== ""){
    // make http call 
    github.getUser(userText)
    .then(data=> {
      if(data.profile.message === "Not Found"){
        // show alert
        ui.showAlert("User not found!", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
})