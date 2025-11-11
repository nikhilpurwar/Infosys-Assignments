$(function () {
    $("#increaseBtn").on("click", function () {
        $("#greenBox").animate({ height: "300px" }, 500);
    });
    $("#decreaseBtn").on("click", function () {
        $("#greenBox").animate({ height: "100px" }, 500);
    });
});
