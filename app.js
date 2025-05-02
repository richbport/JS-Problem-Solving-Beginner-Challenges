let users = [
  {
    username: "Rich",
    email: "rich@frontendsimplified.com",
    password: "test123",
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
  {
    username: "Zen",
    email: "zen@frontendsimplified.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1],
  },
];

function register(
  name,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
  console.log(email, password);
}
register(
  "Zen",
  "zen@frontendsimplified.com",
  "zen123",
  "VIP",
  "Zen#0001",
  [0, 1]
);

console.log(name)
