jQuery(function () {
  $("#submit").on("click", function () {
    let name = $("#name");
    let phone = $("#phone");
    let email = $("#email");
    let required = [name, email, phone];
    for (i of required) {
      // console.log(i[0].value)
      if (i[0].value === "") {
        $("#message")
          .text("Please Fill Out Required Fields")
          .addClass("warning");
        i.prev().addClass("warning");
      } else {
        console.log(i[0].value);
        i.prev().removeClass("warning");
      }
    }
    if ($("label").hasClass("warning") === false) {
        $("form").detach();
        $("h2").text("Thanks for your feedback!")
    }
  });
});
