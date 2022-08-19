type User = {
  name: string;
  email: string;
  role: string;
};

const listUsers = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const emailsUsersAdmin = (listUsers: User[]): string[] => {
  const userAdmin = listUsers
    .filter((user) => {
      return user.role === "admin";
    })
    .map((user) => {
      return user.email;
    });
  return userAdmin;
}

console.log(emailsUsersAdmin(listUsers));
