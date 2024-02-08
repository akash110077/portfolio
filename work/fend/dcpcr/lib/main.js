
// home page
$(document).ready(function(){

  // code for embeded video player starts
    $(document).on('click', '.js-videoPoster', function(e) {
      $("#video_player").addClass("d-none");
      //cancel the standard action button
      e.preventDefault();
      var poster = $(this);
      // We are looking for the closest parent in the class
      var wrapper = poster.closest('.js-videoWrapper');
      videoPlay(wrapper);
      //reproduce the video while hiding the poster
    function videoPlay(wrapper) {
      var iframe = wrapper.find('.js-videoIframe');
      // We take the video link from data
      var src = iframe.data('src');
      // hide poster
      wrapper.addClass('videoWrapperActive');
      // we substitute in src parameter from data
      iframe.attr('src', src);
    }
      });
  // code for embeded video player ends

  // code for carousel starts
  $('#partner-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
    ],
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false,
            loop:true
          }
      }
  });

  $('#carousel2').owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass:true,
    autoWidth:true,
    nav:true,
    navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
          }
      }
  });


  $('#carousel3').owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass:true,
    autoWidth:true,
    nav:true,
    navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
    ],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3
        },
        1000:{
            items:4
          }
      }
  });
  $('#carousel4').owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass:true,
    autoWidth:true,
    nav:true,
    navText: [
        '<i class="fas fa-caret-left"></i>',
        '<i class="fas fa-caret-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
          }
      }
  });
  // code for carousel ends

  // code for transforming hamburger icon starts
  const icons = document.querySelectorAll('.transforming-icon');
icons.forEach (icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
  // code for transforming hamburger icon ends

});

// dashboard
$(document).ready(function(){
  // code for dashboard toggle switch starts

  // code for dashboard toggle switch ends

  // code for sdi heat map piechart starts
  var pieColors = (function() {
    var colors = [],
      base = Highcharts.getOptions().colors[0],
      i;

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  });

  // district 1 starts
  Highcharts.chart('piechart-1', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 1 ends

  // district 2 starts
  Highcharts.chart('piechart-2', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 50
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 15
        },
        {
          name: 'Good',
          y: 15
        }

      ]
    }]
  });
  // district 2 ends

  // district 3 starts
  Highcharts.chart('piechart-3', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 30
        },
        {
          name: 'Execellent',
          y: 30
        },
        {
          name: 'Average',
          y: 30
        },
        {
          name: 'Good',
          y: 10
        }

      ]
    }]
  });
  // district 3 ends

  // district 4 starts
  Highcharts.chart('piechart-4', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 4 ends

  // district 5 starts
  Highcharts.chart('piechart-5', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 5 ends

  // district 6 starts
  Highcharts.chart('piechart-6', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 6 ends

  // district 7 starts
  Highcharts.chart('piechart-7', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 7 ends

  // district 8 starts
  Highcharts.chart('piechart-8', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 8 ends

  // district 9 starts
  Highcharts.chart('piechart-9', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },

    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>',
      borderColor: pieColors,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{}</b><br>{point.percentage}%',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Parents Participation',
      data: [{
          name: 'Poor',
          y: 70
        },
        {
          name: 'Execellent',
          y: 20
        },
        {
          name: 'Average',
          y: 5
        },
        {
          name: 'Good',
          y: 5
        }

      ]
    }]
  });
  // district 9 ends

  // code for sdi heat map piechart ends

  // code for parent participation bar graph starts
  Highcharts.chart('parents-bargraph', {
      chart: {
          type: 'column'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        tickInterval: 500,
        max: 6000,
             labels: {
                formatter: function () {
                    return this.value;
                }
            }
           },
      legend: {
          enabled: false
      },
      plotOptions: {

          series: {
            borderRadius: 5,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
          pointFormat: '<span">{point.name}</span>: <b>{point.y}</b> of total<br/>',
      },

      series: [
          {
              name: "Parent Participation Index",
              colorByPoint: true,
              data: [
                  {
                      name: "Hold Valid <br> SMC Meetings",
                      y: 2000,
                  },
                  {
                      name: "Highest Parent <br> Participation Score",
                      y: 5000,
                  },
                  {
                      name: "Lowest Parent <br> Participation Score",
                      y: 500,
                  },
                  {
                      name: "Valid Fire <br> Safety Certificate",
                      y: 1500,

                  }
              ]
          }
      ],
  });
  // code for parent participation bar graph ends

  // code for donut pie 1 starts
  Highcharts.chart('donut-pie-1', {
    chart: {
      type: 'variablepie'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Students: <b>{point.y}%</b><br/>'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          inside: true,
          distance: -60,
        }
      }

    },

    series: [{
      minPointSize: 10,
      innerSize: '40%',
      zMin: 0,
      name: 'Students',


      data: [{
        name: '60%',
        y: 60,
        z: 100
      }, {
        name: '10%',
        y: 10,
        z: 100
      }, {
        name: '10%',
        y: 10,
        z: 200
      }, {
        name: '20%',
        y: 20,
        z: 100
      }]
    }]

  });
  // code for donut pie 1 ends

  // code for donut pie 2 starts
  Highcharts.chart('donut-pie-2', {
    chart: {
      type: 'variablepie'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Students: <b>{point.y}%</b><br/>'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          inside: true,
          distance: -60,
        }
      }

    },

    series: [{
      minPointSize: 10,
      innerSize: '40%',
      zMin: 0,
      name: 'Students',


      data: [{
        name: '60%',
        y: 60,
        z: 100
      }, {
        name: '10%',
        y: 10,
        z: 100
      }, {
        name: '10%',
        y: 10,
        z: 200
      }, {
        name: '20%',
        y: 20,
        z: 100
      }]
    }]

  });
  // code for donut pie 2 ends

  // code for teaching bar graph starts
  Highcharts.chart('teaching-bargraph', {
      chart: {
          type: 'column'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        tickInterval: 500,
        max: 6000,
             labels: {
                formatter: function () {
                    return this.value;
                }
            }
           },
      legend: {
          enabled: false
      },
      plotOptions: {

          series: {
            borderRadius: 5,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
          pointFormat: '<span">{point.name}</span>: <b>{point.y}</b> of total<br/>',

      },

      series: [
          {
              name: "Parent  Participation Index",
              colorByPoint: true,
              data: [
                  {
                      name: "Fully <br>Functional CCTVs ",
                      y: 4400,
                  },
                  {
                      name: "Filtered <br>Drinking Water",
                      y: 5500,
                  },
                  {
                      name: "Schools Maintaining <br> Student Health Records",
                      y: 4800,
                  },
                  {
                      name: "Valid Fire <br>Safety Certificate",
                      y: 4800,
                  },
                  {
                      name: "Medical <br> Facility",
                      y: 5500,
                  },
                  {
                      name: "Separate Toilets <br>For Boys and Girls",
                      y: 4700,
                  },
                  {
                      name: "Guards <br>During School Hours",
                      y: 3500,
                  }
              ]
          }
      ],
  });
  // code for teaching bar graph ends

  // code for child safety bar graph starts
  Highcharts.chart('child-bargraph', {
      chart: {
          type: 'column'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        tickInterval: 500,
        max: 6000,
             labels: {
                formatter: function () {
                    return this.value;
                }
            }
           },
      legend: {
          enabled: false
      },
      plotOptions: {

          series: {
            borderRadius: 5,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
          pointFormat: '<span">{point.name}</span>: <b>{point.y}</b> of total<br/>',
      },

      series: [
          {
              name: "Parent  Participation Index",
              colorByPoint: true,
              data: [
                  {
                      name: "Fully <br>Functional CCTVs ",
                      y: 4400,
                  },
                  {
                      name: "Filtered <br>Drinking Water",
                      y: 5500,
                  },
                  {
                      name: "Schools Maintaining <br> Student Health Records",
                      y: 4800,
                  },
                  {
                      name: "Valid Fire <br>Safety Certificate",
                      y: 4800,
                  },
                  {
                      name: "Medical <br> Facility",
                      y: 5500,
                  },
                  {
                      name: "Separate Toilets <br>For Boys and Girls",
                      y: 4700,
                  },
                  {
                      name: "Guards <br>During School Hours",
                      y: 3500,
                  }
              ]
          }
      ],
  });
  // code for child safety bar graph ends

  // code for Social Inclusion bar graph starts
  Highcharts.chart('social-bargraph', {
      chart: {
          type: 'column'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
        tickInterval: 500,
        max: 6000,
             labels: {
                formatter: function () {
                    return this.value;
                }
            }
           },
      legend: {
          enabled: false
      },
      plotOptions: {

          series: {
            borderRadius: 5,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
          pointFormat: '<span">{point.name}</span>: <b>{point.y}</b> of total<br/>',
      },

      series: [
          {
              name: "Parent  Participation Index",
              colorByPoint: true,
              data: [
                  {
                      name: "Free Books & uniforms <br>to EVS Students",
                      y: 2000,
                  },
                  {
                      name: "Highest <br>Inclusion Score",
                      y: 2500,
                  },
                  {
                      name: "Lowest  <br>Inclusion Score",
                      y: 500,
                  }
              ]
          }
      ],
  });
  // code for Social Inclusion bar graph ends
});

  // code for circular screen starts
$(document).ready(function(){

    // code for desktop datepicker from starts

      $("#datepicker_from").datepicker({
        autoclose: true,
        todayHighlight: true
      });
    // code for desktop datepicker from ends

    // code for desktop datepicker to starts
    $("#datepicker_to").datepicker({
      autoclose: true,
      todayHighlight: true
    });
    // code for desktop datepicker to ends

    // code for sidenav starts
    $(".openNav").click(function() {
      document.getElementById("mySidenav").style.width = "100%";
    });
    $(".closeNav").click(function() {
      document.getElementById("mySidenav").style.width = "0px";
    });
    // code for sidenav ends

    // code for mob datepicker from starts
    $("#datepicker_from-1").datepicker({
      autoclose: true
    });
    $("#datepicker_from-1").on("change", function() {
      var selected = $(this).val();
      $('#displayDate-from').html(selected);
    });
    // code for mob datepicker from ends

    // code for mob datepicker to starts
    $("#datepicker_to-1").datepicker({
      autoclose: true
    });
    $("#datepicker_to-1").on("change", function() {
      var selected = $(this).val();
      $('#displayDate-to').html(selected);
    });
    // code for mob datepicker to ends

    // code for close sidenav on apply cta starts
    $("#apply-btn").click(function() {
      $(".filter-band").css({
        "display": "block"
      });
    });
    // code for close sidenav on apply cta ends

  // code for dropdown value fetch starts
  $("#apply-btn").click(function(){
    var el = document.getElementById("display-type");
    el.innerHTML = $("#select-dropdown option:selected").text();
  });
  // code for dropdown value fetch ends

});
  // code for circular screen ends

// code for feedback form starts
$(document).ready(function() {
  $('#exampleModalCenter').on('show.bs.modal', function() {
    $('.wrapper').addClass('bg-blur');
  })
  $('#exampleModalCenter').on('hide.bs.modal', function() {
    $('.wrapper').removeClass('bg-blur');
  })

});
// code for feedback form ends

// $(".card-bottom").slideUp();
$(".card-footer").click(function(){
    $(this).prev(".card-bottom").slideToggle(300);
    $(this).children(".arrow-down").toggleClass("rotate");
  });


  $("#compare-cta").click(function(){
    $("#compare-cta").text("Added");
  });

  // compare table
  $(document).ready(function() {
    $(".main-table-2").clone(true).appendTo('#table-scroll-2').addClass('clone-2');
  });

// circulars Page
$(document).ready(function() {
  $(".select-type").change(function(){
    $(".select-type").css("border", "1px solid #ff8748");
    $(".select-type").css("box-shadow", "none");
    $(".select-type").css("color", "#ff8748");
  });
});
// dcpcr Page
$('#tab_selector').on('change', function(e) {
  $('.form-tabs li a').eq($(this).val()).tab('show');
});
