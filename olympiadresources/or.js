displayGeneralInfo();

$(".nav-btn").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".nav-btn").removeClass("active").css("background-color", "whitesmoke");
    $(this).addClass("active").css("background-color", "lightgray");
  }
  else {
    $(this).removeClass("active").css("background-color", "whitesmoke");
  }
  displayGeneralInfo();
  let currentOlympiad = $("." + $(this).attr("id"));
  if ($(this).hasClass("active")) {
    $(".row").css("display", "none"); // gets rid of all rows that are inactive
    currentOlympiad.fadeIn(300); // displays the current row
  }
});

$(".nav-btn").on("mouseenter", function () {
  if (!$(this).hasClass("active")) {
    $(this).css("background-color", "lightgray");
  }
});

$(".nav-btn").on("mouseleave", function () {
  if (!$(this).hasClass("active")) {
    $(this).css("background-color", "whitesmoke");
  }
});

function displayGeneralInfo() {
  let anyActiveButtons = $(".nav-btn.active").length > 0;
  if (anyActiveButtons) {
    $("#info").css("display", "none");
  }
  else {
    $("#info").fadeIn(1000);
    $(".row").css("display", "none"); // if general info is showing, show no rows
  }
}