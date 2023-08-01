displayGeneralInfo();

$(".nav-btn").on("click", function () {
  if (!$(this).hasClass("current")) {
    $(".nav-btn").removeClass("current").css("background-color", "#F5F5F5");
    $(this).addClass("current").css("background-color", "#8DB48E");
  }
  else {
    $(this).removeClass("current").css("background-color", "#F5F5F5");
  }
  displayGeneralInfo();
  let currentOlympiad = $("." + $(this).attr("id"));
  if ($(this).hasClass("current")) {
    $(".row").css("display", "none"); // gets rid of all rows that are incurrent
    currentOlympiad.fadeIn(300); // displays the current row
  }
});

$(".nav-btn").on("mouseenter", function () {
  if (!$(this).hasClass("current")) {
    $(this).css("background-color", "#8DB48E");
  }
});

$(".nav-btn").on("mouseleave", function () {
  if (!$(this).hasClass("current")) {
    $(this).css("background-color", "#F5F5F5");
  }
});

function displayGeneralInfo() {
  let anyCurrentButtons = $(".nav-btn.current").length > 0;
  if (anyCurrentButtons) {
    $("#info").css("display", "none");
  }
  else {
    $("#info").fadeIn(1000);
    $(".row").css("display", "none"); // if general info is showing, show no rows
  }
}