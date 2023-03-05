$(document).ready(function () {

  $('.heart').click(function () {
    if ($(this).hasClass('selected')) 
      $(this).attr("src", "../../assets/img/icons/heart.svg");
    else
      $(this).attr("src", "../../assets/img/icons/heart-selected.svg");
    
    $(this).toggleClass('selected');
  });
  
});
