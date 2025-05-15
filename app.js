function isLoggedInAndSubscribed(loggedIn, subscribed) {
  if (loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED") {
    return true;
  }
  return false;
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
