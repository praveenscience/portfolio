$(function() {
  $(".typist")
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
});
