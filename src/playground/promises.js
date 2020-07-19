const promise = new Promise((resolve, reject) => {
  //   resolve("Resolved");
  reject("error!");
});

promise
  .then((data) => {
    console.log("2", data);
  })
  .catch((err) => {
    console.log("err");
  });
