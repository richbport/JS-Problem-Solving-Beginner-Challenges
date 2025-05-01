let users = [
  {
    username: "Rich",
    email: "rich@frontendsimplified.com",
    password: "test23",
    subscriptionStatus: "VIP",
    discordId: "Rich Port#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
    console.log(email, password);
}

login('rich@frontendsimplified.com', 'test123');