$(() => {
  $("#increaseBtn").on("click", () => {
    $("#greenBox").animate({ height: "300px" }, 500);
  });

  $("#decreaseBtn").on("click", () => {
    $("#greenBox").animate({ height: "100px" }, 500);
  });
});