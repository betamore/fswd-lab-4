$(function() {
  $('button#add').click(function() {
    // newTodo is what the user typed into the
    // text box
    var newTodo = $('input').val();
    $("ul").append("<li>" + newTodo + "</li>");
    $('input').val("");
  });
});
