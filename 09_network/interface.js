
$(function() {
    var //valueCount = $("counter").value(),
        counter = $("#counter"),
        addBtn = $("#increase"),
        subBtn = $("#decrease"),
        value = $("#counter").html();
    
    
    addBtn.on("click", function() {

      counter.html(++value);
      console.log(value);
      return
      
    });
    
      subBtn.on("click", function() {
      counter.html(--value);
      console.log(value);
      return
      
    });
  });
