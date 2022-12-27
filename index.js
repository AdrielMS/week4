// Ini untuk soal nomor 2, 3 dan 4
const fetcher = async (method, ep) => {
  if (method == "GET") {
    const result = await getData(ep);
    return result;
  } else {
    deleteData(ep);
  }
};

//buatGetData
const getData = (ep) => {
  return new Promise((resolve, reject) => {
    fetch(`https://63a9301df4962215b58edc75.mockapi.io/${ep}`)
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

//buatDeleteData
const deleteData = (id) => {
  if (confirm("apakah kamu yakin?")) {
    fetch(`https://63a9301df4962215b58edc75.mockapi.io/signup/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (!res.ok)
          return Promise.reject(new Error(`HTTP Error ${res.status}`));

        return res.json();
      })
      .then((data) => {
        // alert("data berhasil dihapus")
        window.location.reload();
      })
      .catch((err) => console.error(err));
  } else {
    alert("oke batal");
  }
};

//BuatPostData
// const postData = (ep, method, body) => {

// }
