$(function() {
  var typ = $(".typist")
    .typist({
      speed: 12,
      text: "I AM AN ASPIRING FRONT-END DEVELOPER."
    })
    .typistPause(2000)
    .typistRemove(32)
    .typistAdd("A WEB DESIGN ENTHUSIAST.")
    .typistPause(2000)
    .typistRemove(24)
    .typistAdd("A PRETTY DECENT COOK.")
    .typistPause(2000)
    .typistRemove(21)
    .typistAdd("A SUGAR ADDICT.");
  setInterval(() => {
    typ
      .typistPause(2000)
      .typistRemove(15)
      .typistAdd("AN ASPIRING FRONT-END DEVELOPER.")
      .typistPause(2000)
      .typistRemove(32)
      .typistAdd("A WEB DESIGN ENTHUSIAST.")
      .typistPause(2000)
      .typistRemove(24)
      .typistAdd("A PRETTY DECENT COOK.")
      .typistPause(2000)
      .typistRemove(21)
      .typistAdd("A SUGAR ADDICT.");
  }, 10000);
  $(".navbar .links a").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).position().top - 100
      },
      1000
    );
  });
});
