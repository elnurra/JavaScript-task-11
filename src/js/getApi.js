export function getUser() {
  const tableResult0 = document.querySelector(".col-3-1-1");
  const tableResult1 = document.querySelector(".col-3-1");
  const tableResult2 = document.querySelector(".col-3-2");
  const tableResult3 = document.querySelector(".col-3-3");
  const tableResult4 = document.querySelector(".col-3-4");
  const fetcher = fetch("https://636392ed37f2167d6f7ce510.mockapi.io/users");
  const fetcherToJson = fetcher.then((response) => {
    response.json().then((item) => {
      console.log(item);
      item.forEach((element) => {
        tableResult0.innerHTML += `${element.id}<br />`;
        tableResult1.innerHTML += `${element.firstname}<br />`;
        tableResult2.innerHTML += `${element.lastname}<br />`;
        tableResult3.innerHTML += `${element.age}<br />`;
        tableResult4.innerHTML += `${element.userStatus}<br />`;
      });
    });
  });
}
