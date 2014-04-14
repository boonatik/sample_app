function textCounter() {
  var maxlimit = 140;
  var field = $("#micropost_content")
  var cntfield = $("#micropost_counter b")
 if (field.val().length > maxlimit) 
    field.val(field.val().substring(0, maxlimit));
  else
    cntfield.html(maxlimit - field.val().length);
 }