export function setUser(data) {
  fetch("https://636392ed37f2167d6f7ce510.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
