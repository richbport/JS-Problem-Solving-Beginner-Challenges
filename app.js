function isLoggedInAndSubscribed(loggedIn, subcribed) {
   if (loggedIn === "LOGGED_IN" && subscribed === "SUBCRIBED") {
      return true;
   }
   return false;
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
