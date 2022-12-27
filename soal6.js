// ini untuk soal nomor 5 dan 6
const fetcher = async (method, ep) => {
  if (method == "GET") {
    const result = await getData(ep);
    return result;
  } else {
    deleteData(ep);
  }
};

const getData = (ep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/${ep}`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dopdown-content");
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
