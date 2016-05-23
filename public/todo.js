$(function() {
  $('button.btn').click(function(evt) {
    // newTodo is what the user typed into the
    // text box
    var newTodo = $('input').val();
    var newTodoEl = $("<li>" + newTodo + "</li>");
    $("ul").append(newTodoEl);
    $('input').val("");

    evt.preventDefault();
  });
});
