// Options
const CLIENT_ID = '221115922051-9hoc622dlq3cnqup9i71g2ski5jkc8rh.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

const defaultChannel = 'techguyweb';

//Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/* Init API client library and set up sign in listeners -- FROM YOUTUBE TUTORIAL
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientID: CLIENT_ID,
    scope: SCOPES
  }).then(() => {
    //Listen for sign in state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // Handle initial sign in state
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignOutClick;
  });
}
*/

function initClient() {
  // Initialize the client with API key and People API, and initialize OAuth with an
  // OAuth 2.0 client ID and scopes (space delimited string) to request access.
  gapi.client.init({
      apiKey: 'AIzaSyC9p5WA8ip4a7OGcGS3_bUp7vcwoG_xSt8',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
      clientId: '221115922051-9hoc622dlq3cnqup9i71g2ski5jkc8rh.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/youtube.readonly'
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      content.style.display = 'block';
      videoContainer.style.display = 'block';
      getChannel(defaultChannel);
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
      content.style.display = 'none';
      videoContainer.style.display = 'none';
    }
}

//Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignOutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// Get channel from api
function getChannel(channel) {
  console.log(channel);
}
