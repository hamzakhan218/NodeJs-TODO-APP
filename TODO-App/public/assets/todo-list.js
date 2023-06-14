jQuery(document).ready(function(){

    jQuery('form').on('submit', function(){
      console.log('FORM IS SUBMITTED')
        var item = jQuery('form input');
        var todo = {item: item.val()};
  
        jQuery.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            console.log("DATA: ajx:",data)
            //do something with the data via front-end framework
            // location.reload();
          }
        });
  
        return false;
  
    });
    jQuery('p').on('click', function(){
      console.log("P is clicked")
    });
    jQuery('li').on('click', function(){
      console.log("Item is clicked")
        var item = jQuery(this).text().replace(/ /g, "-");
        jQuery.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });

  