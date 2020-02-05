
// $(window).ready(function() {
//     $("#loader").delay(000).fadeOut("slow");;
    $("#content").delay(0000).fadeIn("slow");
// });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    console.log(scroll);
    if (scroll >= 7) {
        $("#content").addClass("top");
        $("#navbarSupportedContent").addClass("floatup");
    }
    else{
        $("#content").removeClass("top");
        $("#navbarSupportedContent").removeClass("floatup");
    }
}); 
function remtop(){
}

// google.charts.load('current', {'packages':['corechart']}); 
// google.charts.setOnLoadCallback(drawChart1,drawChart); 
  
// function drawChart1() { 
//   var data = google.visualization.arrayToDataTable([ 
//   ['Tech', 'Level'], 
//   ['', 10,],
//   ['Python', 8.5],
//   ['C++', 9],
//   ['C',8.3],
//   ['Java', 8.1],
//   ['HTML', 8],
//   ['NodeJs', 7.8],
//   ['CSS', 8],
//   ['SQL', 5],
//   ['MongoDB', 7],
// //   [, 10]
// ]); 
  
//   var options =  
//    {  'width':700,
//    'height':400,
//    is3D: false,
//    'isStacked':true,
//    colors: ['#a1b8a1','green'],
//    annotations: {
//     textStyle: {
//       fontName: 'Times-Roman',
//       fontSize: 18,
//       bold: true,
//       italic: true,
//       // The color of the text.
//       color: '#871b47',
//       // The color of the text outline.
//       auraColor: '#d799ae',
//       // The transparency of the text.
//       opacity: 0.8
//     }
//   }
   
// }; 
    
//   var chart =  
//   new google.visualization.BarChart(document.getElementById('piechart')); 
//   chart.draw(data, options); 
// } 



// google.charts.load("current", {packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Element", "Density", { role: "style" } ],
//     ["LeaderShip", 90, "color: #a1b8a1"],
//     ["Team Work", 94, "color: #a1b8a1"],
//     ["Communication skill", 96, "color: #a1b8a1"],
//     ["Project Management", 95, "color: #a1b8a1"],
//     ["Creativity", 97, "color: #a1b8a1"],
//     ["Dedication", 99, "color: #a1b8a1"],

//   ]);

//   var view = new google.visualization.DataView(data);
//   view.setColumns([0, 1,
//                    { calc: "stringify",
//                      sourceColumn: 1,
//                      type: "string",
//                      role: "annotation" },
//                    2]);

//   var options = {
//     width: 600,
//     height: 400,
//     bar: {groupWidth: "95%"},
//     legend: { position: "none" },
//     annotations: {
//         textStyle: {
//           fontName: 'Times-Roman',
//           fontSize: 18,
//           bold: true,
//           italic: true,
//           // The color of the text.
//           color: '#871b47',
//           // The color of the text outline.
//           auraColor: '#d799ae',
//           // The transparency of the text.
//           opacity: 0.8
//         }
//       }
//   };
//   var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
//   chart.draw(view, options);
// }

projectArr = [
  {"name":"proj1", "link":"https://www.github.com"},
  {"name":"proj2", "link":"https://www.github.com"},
  {"name":"proj3", "link":"https://www.github.com"},
  {"name":"proj4", "link":"https://www.github.com"},
  {"name":"proj5", "link":"https://www.github.com"},
  {"name":"proj6", "link":"https://www.github.com"},
  {"name":"proj7", "link":"https://www.github.com"},
  {"name":"proj8", "link":"https://www.github.com"},
  {"name":"proj9", "link":"https://www.github.com"},
  {"name":"proj1", "link":"https://www.github.com"},
];
function fillProjects(){
  proj="";
  projectArr.forEach(element => {
    proj = proj + "<div class='proj_box card col-lg-3 col-md-4 col-sm-6'>"+
                    "<a href='"+element.link+"' style='display:none' >read more</a>"+
                    "<div id='title' style='display:block;color:#fff;'> <h5 >"+element.name+"</h5></div>"+
                    "<img id='proj_image' class='card-img-top' src='./img/project.jpg' alt='#'>"+
                  "</div><br><br>"
  });
  $("#proj_list").append(proj);
}

fillProjects();

$(".proj_box").hover(function() { 
  $(this).children("a").css("display","block"); 
  $(this).children("#title").css("display","none"); 
  console.log("DISP");
}, function() { 
  $(this).children("a").css("display","none"); 
  $(this).children("#title").fadeIn();
  console.log("NO DISP");
});