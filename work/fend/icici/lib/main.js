$(document).ready(function() {

  /********** bootstrap datepicker **************/
  $(function() {
    $("#datepicker_dob").datepicker({
      autoclose: true,
      format: 'dd/mm/yyyy',
      todayHighlight: true
    }).datepicker();
  });


  /********** end bootstrap datepicker **************/

  /********** code for tab **************/

  $(function() {
    if ($("#p-p").hasClass("active")) {
      $('#t-i').addClass('active');
    }
  });

  $('#update').bind('click', function() {
    $(".tab-pane").removeClass("fade");
    $(".tab-pane").removeClass("active");
    $("#second_tab").addClass("active");
    $("#second_tab").removeClass("fade");
    $("#t-i").addClass("active");
    $("#p-p").addClass("active");
    $("#pay").removeClass("active");
  });

  $('#policy-btn').bind('click', function() {
    $(".tab-pane").removeClass("fade");
    $(".tab-pane").removeClass("active");
    $("#third_tab").addClass("active");
    $("#third_tab").removeClass("fade");
    $("#t-i").addClass("active");
    $("#p-p").addClass("active");
    $("#pay").addClass("active");
  });

  $('#back-to-travel-info').bind('click', function() {
    $(".tab-pane").removeClass("fade");
    $(".tab-pane").removeClass("active");
    $("#first_tab").addClass("active");
    $("#first_tab").removeClass("fade");
    $("#t-i").addClass("active");
    $("#p-p").removeClass("active");
    $("#pay").removeClass("active");
  });

  $('#back-to-policy').bind('click', function() {
    $(".tab-pane").removeClass("fade");
    $(".tab-pane").removeClass("active");
    $("#second_tab").addClass("active");
    $("#second_tab").removeClass("fade");
    $("#t-i").addClass("active");
    $("#p-p").addClass("active");
    $("#pay").removeClass("active");
  });

  $('#edit-travel').bind('click', function() {
    $(".tab-pane").removeClass("fade");
    $(".tab-pane").removeClass("active");
    $("#first_tab").addClass("active");
    $("#first_tab").removeClass("fade");
    $("#t-i").addClass("active");
    $("#p-p").removeClass("active");
    $("#pay").removeClass("active");
  });
  /********** end code for tab **************/

  /********** for custom dropdown **************/


  $('.state').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.state').removeClass('expanded');
  });




  $('.relation-for').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.relation-for').removeClass('expanded');
  });

  $('.gender').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.gender').removeClass('expanded');
  });

  $('.document').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.document').removeClass('expanded');
  });

  $('.occupation').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.occupation').removeClass('expanded');
  });

  $('.sub_occupation').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.sub_occupation').removeClass('expanded');
  });

  $('.education').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.education').removeClass('expanded');
  });

  $('.income').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.income').removeClass('expanded');
  });

  $('.source').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function() {
    $('.source').removeClass('expanded');
  });

  /********** end for custom dropdown **************/

 /********** Custom Upload**************/
  $('#myfile').change(function(){
		// $('#path').val($(this).val());
	});
  $(function () {
    $("#update").click(function () {
        if ($(this).is(":checked")) {

            $("#add_form").show();
        } else {

            $("#add_form").hide();
        }
    });
});




function readURL(input) {
  var file    = document.querySelector('#myfile').files[0]; //sames as here

     if (input.files && input.files[0]) {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#uploaded_image').attr('src', e.target.result);
         }

         reader.readAsDataURL(input.files[0]);
     }
     if (file) {
    $("#pancard").css("display","block");
     } else {
        $("#pancard").css("display","none");
     }
 }

 $("#myfile").change(function(){
     readURL(this);
 });


 function readURL1(input) {
   var file    = document.querySelector('#myfile1').files[0]; //sames as here

      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#uploaded_image1').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
      }
      if (file) {
     $("#file_upload").css("display","block");
      } else {
         $("#file_upload").css("display","none");
      }
  }

  $("#myfile1").change(function(){
      readURL1(this);
  });


  function readURL(input) {
    var file    = document.querySelector('#myfile2').files[0]; //sames as here

       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#uploaded_image3').attr('src', e.target.result);
           }

           reader.readAsDataURL(input.files[0]);
       }
       if (file) {
      $("#modalimg").css("display","block");
       } else {
          $("#modalimg").css("display","none");
       }
   }

   $("#myfile2").change(function(){
       readURL(this);
   });
});
