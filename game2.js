var list_meal_added = [];

var list_data_user_created = []; // User data-add
var list_data_autocomplete = []; // Sync data-autocomplete
var list_data_local = []; // User data-local

var user = {
  'name':'',
  'age':1989,
  'sex':0,
  'address':'',
  'districts':1,
  'phone':'',
  'typework':0,
  'date_created':getCurrentDateCreated(),
  'deleted':0
}

var result = {
    'energy': 2314,
    'dam': 391.6,
    'duong': 1514.8,
    'beo': 409.5
}

var total = {
    'pull': 32,
    'nangluong':1968,
    'dam':386.4,
    'duong':1154.4,
    'beo':426.6,
    'vitamin':9,
    'date_created':getCurrentDateCreated()
}

//createREPORT(0);

function createREPORT(type){
  
  $("#report-name-address").html(user.name + '<br>' + user.address + " " + getTinhThanhString(user.districts));
  $("#report-phone").html(user.phone);
  
  if (type == 0 || type == 2) {
    
    $("#report-energy").html(total.nangluong);
    $("#report-dam").html(total.dam);
    $("#report-duong").html(total.duong);
    $("#report-beo").html(total.beo);
    $("#report-vitamin").html(total.vitamin);
    
    var total_energy = total.dam + total.duong + total.beo + total.vitamin;
    var percents = {
      'dam':calPercent(total.dam,total_energy),
      'duong':calPercent(total.duong,total_energy),
      'beo':calPercent(total.beo,total_energy)
    }
    
    $("#report-dam-per").html(percents.dam+"%");
    $("#report-duong-per").html(percents.duong+"%");
    $("#report-beo-per").html(percents.beo+"%");
    
    
    $('#report-ptdd-top').show();    
    
    
    miniCHARTDD();
    
    
  }
  if (type == 1 || type == 2) {
    
    $("#report-pull").html(total.pull);
    $('#report-ptlk-top').show();    
    
    calPTLK(2);
  }
  
  
  
  setTimeout(function(){  $(window).resize(); }, 500);  
  
}


function miniCHARTDD() {
  
  var nangluong = identifyEnergyLevel();
  
  $("#text-evaluate").html(nangluong.evaluate);
  $("#text-recommend").html(nangluong.recommend);

  var enGraphData = calculateGraphData(total.nangluong, nangluong.standardEnergy);

  var damGraphData = calculateGraphData(total.dam,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].maxValue));

  var duongGraphData = calculateGraphData(total.duong,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].maxValue));

  var beoGraphData = calculateGraphData(total.beo,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].maxValue));
  
  $('#mini-dd').highcharts({
	chart: {
		type: 'column'
	},
	title: {
		text: null
	},
	xAxis: {
		 categories: ['Tổng năng lượng', 'Đạm', 'Đường', 'Béo']
	 },
	yAxis: {
		min: 0,
		title: {
			text: 'KCAL'
		},
		stackLabels: {
			enabled: true,
			style: {
				fontWeight: 'bold',
				color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
			}
		}
	},
	legend: {
		align: 'right',
		x: -30,
		verticalAlign: 'top',
		y: 25,
		floating: true,
		backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
		borderColor: '#CCC',
		borderWidth: 1,
		shadow: false
	},
	tooltip: {
		formatter: function () {
			return '<b>' + this.x + '</b><br/>' +
				this.series.name + ': ' + this.y + '<br/>' +
				'Total: ' + this.point.stackTotal;
		}
	},
	plotOptions: {
		column: {
			stacking: 'normal',
			dataLabels: {
				enabled: true,
				color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
				style: {
					textShadow: '0 0 3px black'
				}
			}
		}
	},
	series: [{
          name: 'Thừa',
          data: [enGraphData[2], damGraphData[2], duongGraphData[2], beoGraphData[2]],
          stack: '1',
          color: '#FF3021'
      }, {
          name: 'Thiếu',
          data: [enGraphData[1], damGraphData[1], duongGraphData[1], beoGraphData[1]],
          stack: '1',
          color: '#FF773B'
      }, {
          name: 'Thực tế',
          data: [enGraphData[0], damGraphData[0], duongGraphData[0], beoGraphData[0]],
          stack: '1',
          color: '#1F8B40'
      }]
});
  
  $("#mini-dd").find("text").last().hide();
  
}



$('#slider').noUiSlider({
	start: [ 0 ],
    margin: 20,
	range: {
		'min': [  -20 ],
		'max': [ 20 ]
	}
});
var chart;



function createNEWGRAP(){
  
  $("#container-dd").html('');
  
  var nangluong = identifyEnergyLevel();

  var enGraphData = calculateGraphData(total.nangluong, nangluong.standardEnergy);

  var damGraphData = calculateGraphData(total.dam,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].maxValue));

  var duongGraphData = calculateGraphData(total.duong,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].maxValue));

  var beoGraphData = calculateGraphData(total.beo,
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].minValue),
      calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].maxValue));
  
  chart = new Highcharts.Chart({  
  
      chart: {
          renderTo: 'container-dd',
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 1,
              beta: 0,
              viewDistance: 25,
              depth: 40
          },
          marginTop: 20,
          marginRight: 40
      },
  
      title: {
          text: ''
      },
  
      xAxis: {
          categories: ['Tổng năng lượng', 'Đạm', 'Đường', 'Béo']
      },
  
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'KCAL'
          }
      },
  
      tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      },
  
      plotOptions: {
          column: {
              stacking: 'normal',
              depth: 40
          }
      },
  
      series: [{
          name: 'Thừa',
          data: [enGraphData[2], damGraphData[2], duongGraphData[2], beoGraphData[2]],
          stack: '1',
          color: '#FF3021'
      }, {
          name: 'Thiếu',
          data: [enGraphData[1], damGraphData[1], duongGraphData[1], beoGraphData[1]],
          stack: '1',
          color: '#FF773B'
      }, {
          name: 'Thực tế',
          data: [enGraphData[0], damGraphData[0], duongGraphData[0], beoGraphData[0]],
          stack: '1',
          color: '#1F8B40'
      }]
  });
  
  
  $('#slider').Link('lower').to(handleValueSlide);
  
  $("#container-dd").find("text").last().hide();
}

function handleValueSlide(val) {
    
  chart.options.chart.options3d.beta = val;  
  chart.redraw(false);
  
  console.log(val);
}



var user_mode = 0; // 0:new 1:list

$("input").bind('touchend',function(){
  
  $(this).focus();
  
})

$("select").bind('touchend',function(){
  
  $(this).focus();
  
})

$(".panel").css({
  'min-height':'768px'
})

//$(".bsq-panel").bind("touchstart",function(){
//  document.activeElement.blur();
//})

//disallowOverscroll();
//function disallowOverscroll(){
//  
//  $(document).on('touchmove',function(e){
//    e.preventDefault();
//  });
//  $('body').on('touchstart','.ui-autocomplete',function(e) {
//    if (e.currentTarget.scrollTop === 0) {
//      e.currentTarget.scrollTop = 1;
//    } else if (e.currentTarget.scrollHeight
//              === e.currentTarget.scrollTop
//                  + e.currentTarget.offsetHeight) {
//      e.currentTarget.scrollTop -= 1;
//    }
//  });
//  
//  $('body').on('touchmove','.ui-autocomplete',function(e) {
//    e.stopPropagation();
//  });
//}

//(function($) {
//  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
//  $.fn.nodoubletapzoom = function() {
//    if (IS_IOS)
//      $(this).bind('touchstart', function preventZoom(e) {
//        var t2 = e.timeStamp
//          , t1 = $(this).data('lastTouch') || t2
//          , dt = t2 - t1
//          , fingers = e.originalEvent.touches.length;
//        $(this).data('lastTouch', t2);
//        if (!dt || dt > 500 || fingers > 1) return; // not double-tap
//
//        e.preventDefault(); // double tap - prevent the zoom
//        // also synthesize click events we just swallowed up
//        $(this).trigger('click').trigger('click');
//      });
//  };
//})(jQuery);


function showPanel(id) {
  
  //$(document).scrollTop(0);
  //
  //$(".bsq-panel").hide();
  //$(id).show();
}

var bForceMove = true;

$(".panel").bind("touchend",function(){
  //document.activeElement.blur();
})

window.addEventListener("touchmove", function(e) {
    if (bForceMove) {
      e.preventDefault();
    }    
})

// URL AJAX
var url_sync = '';

initURL();
function initURL(){
  
  if (localStorage.urlsync == undefined) {          
    localStorage.setItem('urlsync','http://www.lamhongdata.com/nutrition/');
  }
  
  var temp = localStorage.urlsync;        
  url_sync = temp;
  
  $("#input-url").val(url_sync);
}

$("#input-url").change(function(){
  
  url_sync = $("#input-url").val();
  localStorage.setItem('urlsync',url_sync);
  
})


// End

function controlBUTTON() {
  
  var temp = prompt("Password?");
  if(temp == "ppp"){
    $(".panel").hide();
    $("#panel-config").show();
  }
}

$("#btt-sync").bind('touchstart', function(){
  if (navigator.onLine){
    if(confirm("Do you want to sync data ?")){          
      syncData();
    }
  }else{
    alert("Thiet bi chua ket noi vao internet!");
  }
})

$("#btt-reload").bind('touchstart', function(){
  if(confirm("Do you want to reload ?")){
    window.location.href = '';
  }
})





///



///

function getCurrentDateCreated() {
  
  var current = new Date();
  return current.getDate()+"/"+(current.getMonth()+1)+"/"+current.getFullYear()+" "+current.getHours()+":"+current.getMinutes();
  
}

var current = 1;

$("#btt-next-intro").bind('touchend', function() {
  nextBUTTON();
})
//$("#btt-next-info").bind('touchstart', function() {
//  
//  var mode = $("#select-mode").val();
//  
//  if (mode == 1) {
//    $("#div-typework").hide();
//  }
//  enableMode(mode);
//  
//  next();  
//})

var cal_mode = 0;

function enableMode(val){
  cal_mode = val;  
}

function getInfoWithMode(mode){
  if (mode == 0) {
    
    user.name = $("#input-user-name").val();
    user.address = $("#input-user-address").val();
    user.phone = $("#input-user-phone").val();
    user.age = $("#input-user-birth").val();
    user.sex = $("#select-user-gender").val();
    user.typework = $("#select-user-work").val();
    
    //user.districts = $("#input-user-district").val(); //Auto bottom code
    
  }
}

function calMode(type){
  
  if(user_mode == 0){
    getInfoWithMode(user_mode);
  }
  
  //if ($( "#input-name" ).val() == '' ||
  //    $( "#input-address" ).val() == '' ||
  //    $( "#input-districts" ).val() == '' ||
  //    $( "#input-phone" ).val() == '' ||
  //    $( "#input-age" ).val() == ''      
  //) {
  //  
  //  alert("Yêu cầu nhập lại đầy đủ thông tin");
  //  return;
  //  
  //} 
  
  enableMode(type);
  
  if (cal_mode == 0) {
    clearTABLEMEAL();
    gotoPanel(3)
  }
  if (cal_mode == 1) {
    clearPULL();
    gotoPanel(5)
  }
  if (cal_mode == 2) {
    clearTABLEMEAL();
    clearPULL();
    gotoPanel(3)
  }
    
}

function clearTABLEMEAL() {
  list_meal_added = [];
  $("#group-table-meal").hide();
  $("#button-add-meal").hide();
  $("#button-remove-meal").hide();
  $("#button-check-ttdd").hide();
  $("#input-meal").val('');
}
function clearPULL() {
  $("#input-pull").val('');
  $("#button-ptlk").hide();
}

function gotoPanel(id){
  
  if (id == 5) {
    setTimeout(function(){ $($(".panel[bsq-id=5]").find('input')).focus() } , 300);
  }
  
  if (id == 3) {
    setTimeout(function(){ $($(".panel[bsq-id=3]").find('#input-meal')).focus() } , 300);
  }
  
  if (id == 3 || id == 2 || id==7) {
     bForceMove = false;
     
     $(".panel").css({
       'overflow':'auto'
     })
     
   }else{
    
    bForceMove = true;
     
     $(".panel").css({
       'overflow':'hidden'
     })
     
   }
  
  $(".panel").hide();
  $(".panel[bsq-id="+id+"]").show();
  
  current = id;
}

function checkPTTPDD() {
  document.activeElement.blur();
  $(window).scrollTop(0);
  
  saveDataUser(); // Save data here
  createNEWGRAP();
  
  //calTPDD();
  
  gotoPanel(4); //DIARGRAM PTTPDD
}

function checkPTLK() {
  document.activeElement.blur();
  $(window).scrollTop(0);
  
  if (cal_mode == 1) {
    saveDataUser();
  }
  calPTLK(1);
  gotoPanel(6);
}

function nextBUTTON() {
    
  $(window).scrollTop(0);
  
  if (current == 8) { // IF FINAL
    window.location.href = '';
    return;
  }
  
  if (cal_mode == 0) {
    if (current == 4) { //PANEL DIARGRAM PTTPDD
      
      current = 7;      
      createREPORT(cal_mode);
      
    }else{
      current += 1;  
    }    
    gotoPanel(current);  
  }
  if (cal_mode == 1) {
    if (current == 6) { //PANEL DIARGRAM PTLK
      
      current = 7;
      createREPORT(cal_mode);
      
    }else{
      current += 1;  
    }    
    gotoPanel(current);  
  }
  if (cal_mode == 2) {
    
    if (current == 6) {
      createREPORT(cal_mode);
    }
    
    current += 1; 
    gotoPanel(current);  
  }
  
}


function prevBUTTON() {
  
  $(window).scrollTop(0);
  document.activeElement.blur();
  
  if (cal_mode == 0) {
    if (current == 7) { //PANEL REPORT
      current = 4;
    }else{
      current -= 1;  
    }    
    gotoPanel(current);  
  }
  if (cal_mode == 1) {
    if (current == 5) { //PANEL PTLK
      current = 2;
    }else{
      current -= 1;  
    }    
    gotoPanel(current);  
  }
  if (cal_mode == 2) {    
    current -= 1; 
    gotoPanel(current);  
  }
  
}

//$("#btt-next-ptdd").bind('touchend', function() {
//  
//  saveDataUser(); // Save data here
//  
//  //if (cal_mode == 2) calPTLK();
//  
//  calTPDD();  
//  
//  gotoPanel(4); //DIARGRAM PTTPDD
//  
//  //next();
//  
//})
//$("#btt-next-ptlk").bind('touchstart', function() {  
//  next();
//})
//$("#btt-next-tpdd").bind('touchstart', function() {        
//  next();
//})
//
//$("#btt-next-print").bind('touchstart', function() {  
//  next();
//  
//  setTimeout(function(){
//    
//    window.location.href = '';
//    
//  },3000);
//  
//  
//})



// USER INPUT
// INFO
//$('#input-name').bind('input', function(){        
//  user.name = $(this).val();
//});
//$('#input-address').bind('input', function(){        
//  user.address = $(this).val();
//});
//$('#input-phone').bind('input', function(){        
//  user.phone = $(this).val();
//});
//
//
//$('#input-age').bind('input', function(){        
//  user.age = $(this).val();
//});
//
//$('#select-gender').change(function(){        
//  user.sex = $(this).val();  
//});
//
//$('#select-type-work').change(function(){        
//  user.typework = $(this).val();
//});

//if (!bPhoneGap) {

$('#input-pull').change(function(){        
  
  var temp = $('#input-pull').val();    
  total.pull = bsqStringToNumber(temp);
  $("#td-pull").html(total.pull);
  
  showButtonPTLK();

});
  
function showButtonPTLK() {
  
  $("#button-ptlk").show();
  
}
  
function bsqStringToNumber(content){
  var temp = content;    
  temp = '{"a":'+temp+'}';    
  temp = JSON.parse(temp);    
  return temp.a;
}
  
//}else{
//  
//  $('#input-pull').bind("input", function(){        
//    
//    var temp = $('#input-pull').val();
//    
//    
//      navigator.globalization.stringToNumber(
//          temp,
//          function (number) {
//            //alert('number: ' + number.value + '\n');
//            
//            total.pull = number.value;
//            $("#td-pull").html(total.pull);
//            
//          },
//          function () {alert('Error getting number\n');},
//          {type:'decimal'}
//      );
//    });
//
//}

// END USER INPUT

function setVal2IndexArray(index,value,array){
  array[index] = value;
}


// List meal
$("#select-time-meal").change(function(){        
  loadListMeal($("#select-time-meal")[0].value);
})

// BUTTON EVENT MEAL
function addMEALBUTTON() {
  if($("#input-meal").val() == ''){
    alert("Yêu cầu nhập vào món ăn!");
    return;
  }
  
  //$("#button-remove-meal").show();
  //$("#group-table-meal").show();
  //
  var qty = $("#input-quantity").val();
  addItem(qty);
}
function removeMEALBUTTON(){
  removeItem();
}



var meal_autocomplete = [];
var meal_current = 0;
loadListMeal(0);

function loadListMeal(selectIndex) {
  
  meal_autocomplete = [];
  
  var temp_array = filter_database[selectIndex];
  var temp_div = '';
  for(var i=0; i<temp_array.length;i++){
    var temp = temp_array[i];
    
    meal_autocomplete.push({'value':i+1,'label':temp_array[i].thucan})
    
    //temp_div += '<option value="'+i+'">'+temp_array[i].thucan+'</option>'          
  }
  
  var result = $( "#input-meal" ).autocomplete( "instance" );
  
  if(result != undefined){
    $( "#input-meal" ).val('');
    $( "#input-meal" ).autocomplete( "destroy" );
  }
  $( "#input-meal" ).autocomplete({
    minLength: 0,
    source: meal_autocomplete,      
    select: function( event, ui ) {
      
      meal_current = ui.item.value;
      $( "#input-meal" ).val( ui.item.label );
      
	  $("#button-add-meal").show();
	  
      // blur after autocomplete done!
      document.activeElement.blur();
      
      return false;
    }
  });

  
  //$("#select-meal").html(temp_div);        
}

function addItem(quantity){
  var index_time_meal = $("#select-time-meal")[0].value;
  var index_meal = meal_current-1;
  var temp_thucan = filter_database[index_time_meal][index_meal];
  
  
  
  temp_thucan = {
    'indexTime' : index_time_meal,
    'time':temp_thucan.buoi,
    'name':temp_thucan.thucan,
    'qty':quantity,
    'nangluong' : roundHundred(temp_thucan.nangluong*quantity),
    'dam' : roundHundred(temp_thucan.dam*quantity*4),
    'duong' : roundHundred(temp_thucan.duong*quantity*4),
    'beo' : roundHundred(temp_thucan.beo*quantity*9),
    'vitamin' : roundHundred(temp_thucan.vitamin*quantity)
  }
  
  list_meal_added.push(temp_thucan)
  
  loadTable();
  
  $("#button-remove-meal").show();
  $("#group-table-meal").show();
  $("#button-check-ttdd").show();
}

function removeItem(){
  list_meal_added.pop();
  
  if (list_meal_added.length > 0) {
    loadTable();
  }else{
	
    $("#group-table-meal").hide();
    $("#button-check-ttdd").hide();
    $("#button-remove-meal").hide();
  }
  
}

// End meal

function roundHundred(val){
  return Math.round(val * 100)/100;
}

function loadTable(){
  
  var temp_div = '';
  
  total.nangluong = 0;
  total.dam = 0;
  total.duong = 0;
  total.beo = 0;
  total.vitamin = 0;
  
  list_meal_added.sort(sort_by('indexTime', true, parseInt));
  
  for(var i=0;i<list_meal_added.length;i++){
    var temp = list_meal_added[i];
    
    temp_div += "<tr>";
    temp_div +=          
    "<td>"+i+"</td>"
    +"<td>"+temp.time+"</td>"
    +"<td>"+temp.name+"</td>"
    +"<td>"+temp.qty+"</td>"
    
    +"<td>"+temp.nangluong+"</td>"
    +"<td>"+temp.dam+"</td>"
    +"<td>"+temp.duong+"</td>"
    +"<td>"+temp.beo+"</td>"
    +"<td>"+temp.vitamin+"</td>"
    temp_div += "</tr>";
    
    total.nangluong += temp.nangluong;
    total.dam += temp.dam;
    total.duong += temp.duong;
    total.beo += temp.beo;
    total.vitamin += temp.vitamin;
    
  }
  
  total.dam = roundHundred(total.dam);
  total.duong = roundHundred(total.duong);
  total.beo = roundHundred(total.beo);
  total.vitamin = roundHundred(total.vitamin);
  
  var total_energy = total.dam + total.duong + total.beo + total.vitamin;
  var percents = {
    'dam':calPercent(total.dam,total_energy),
    'duong':calPercent(total.duong,total_energy),
    'beo':calPercent(total.beo,total_energy)
  }
  
  temp_div += "<tr>";
  temp_div +=          
  '<td colspan="4" class="table-bottom-1">Năng lượng 1 ngày</td>'        
  +"<td class='table-bottom-2'>"+total.nangluong+"</td>"
  +"<td class='table-bottom-2'>"+total.dam+"</td>"
  +"<td class='table-bottom-2'>"+total.duong+"</td>"
  +"<td class='table-bottom-2'>"+total.beo+"</td>"
  +"<td class='table-bottom-2'>"+total.vitamin+"</td>"
  temp_div += "</tr>";
  
  temp_div += "<tr>";
  temp_div +=          
  '<td colspan="5" class="table-bottom-1">Tỉ lệ phần trăm năng lượng trong 1 ngày</td>'        
  +"<td class='table-bottom-2'>"+percents.dam+"%</td>"
  +"<td class='table-bottom-2'>"+percents.duong+"%</td>"
  +"<td class='table-bottom-2'>"+percents.beo+"%</td>"
  //+"<td></td>"        
  temp_div += "</tr>";
  
  
  
  $(".table tbody").html(temp_div);
}

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = [-1, 1][+!!reverse];

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}

function calPercent(val,total){
  return Math.round(val*100/total);
}

function calTPDD() {
  
  $("#container-dd").html('');
  
    var nangluong = identifyEnergyLevel();

    var enGraphData = calculateGraphData(total.nangluong, nangluong.standardEnergy);

    var damGraphData = calculateGraphData(total.dam,
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].minValue),
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['dam'].maxValue));

    var duongGraphData = calculateGraphData(total.duong,
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].minValue),
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['duong'].maxValue));

    var beoGraphData = calculateGraphData(total.beo,
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].minValue),
        calculateStandardKcal(nangluong.standardEnergy, STANDARD_DETAIL['beo'].maxValue));
    
    
    var chart1 = new cfx.Chart();
    
    //chart1.setGallery(cfx.Gallery.Bar);
    //chart1.getLegendBox().setVisible(false);
    //chart1.getAllSeries().setStacked(cfx.Stacked.Normal);
    //chart1.getView3D().setEnabled(true);
    //
    ////chart1.getView3D().setDepth(0);
    //chart1.getView3D().setBoxThickness(1);    
    //chart1.getToolTips().setEnabled(false);
    //
    //var gb;
    //gb = new cfx.GradientBackground();
    //gb.setType(cfx.GradientType.BackwardDiagonal);
    //gb.setColorFrom("#FFFFFF");
    //gb.setColorTo("#FFFFFF");
    //gb.getPosition().add(0);    
    //gb.getPosition().add(1);
    //chart1.setBackground(gb);
    //
    ////chart1.getSeries().getItem(0).setColor('#108F1A'); // thuc te (xanh)
    ////chart1.getSeries().getItem(0).setText("Thực Tế");
    ////var point0 = chart1.getSeries().getItem(0).getPointLabels();
    ////point0.setLineAlignment(cfx.StringAlignment.Center);
    ////point0.setTextColor("#FFFFFF");
    ////
    ////chart1.getSeries().getItem(1).setColor('#FFF035'); // thieu (vang)
    ////chart1.getSeries().getItem(1).setText("Thiếu");
    ////// point 1 (thieu)
    ////var point1 = chart1.getSeries().getItem(1).getPointLabels();
    ////point1.setTextColor("#000000");
    ////point1.setLineAlignment(cfx.StringAlignment.Near);
    ////
    ////chart1.getSeries().getItem(2).setColor('#E83A3B'); // thua (do)
    ////chart1.getSeries().getItem(2).setText("Thừa");
    ////var point2 = chart1.getSeries().getItem(2).getPointLabels();
    ////point2.setLineAlignment(cfx.StringAlignment.Near);
    ////point2.setTextColor("#FFFFFF");
    //
    ////var td;
    ////td = new cfx.TitleDockable();
    ////td.setText("3D Stacked Bars");
    ////chart1.getTitles().add(td);
    //
    //var data = chart1.getData();
    //data.setSeries(3);
    ////data.setPoints(3);
    //
    ////var bsqData = [
    ////  {
    ////    'Chất' : 'Năng lượng',
    ////    'Thực tế' : 1,
    ////    'Thiếu' : 1,
    ////    'Thừa' : 1
    ////  },
    ////  {
    ////    'Chất' : 'Đạm',
    ////    'Thực tế' : 1,
    ////    'Thiếu' : 1,
    ////    'Thừa' : 1
    ////  },
    ////  {
    ////    'Chất' : 'Đường',
    ////    'Thực tế' : 1,
    ////    'Thiếu' : 1,
    ////    'Thừa' : 1
    ////  },
    ////  {
    ////    'Chất' : 'Béo',
    ////    'Thực tế' : 1,
    ////    'Thiếu' : 1,
    ////    'Thừa' : 1
    ////  }
    ////];
    ////
    ////chart1.setDataSource()
    //
    //// draw graph
    //var arrayOfData = new Array(
    //    enGraphData,
    //    damGraphData,
    //    duongGraphData,
    //    beoGraphData
    //);
    //
    //
    //
    //for (var i = 0; i <= 3; i++) {
    //    // thuc te
    //    data.setItem(0, i, (arrayOfData[i][0]));
    //    // thieu
    //    if (arrayOfData[i][1] > 0) {
    //        data.setItem(1, i, (arrayOfData[i][1]));
    //    }
    //    // thua
    //    if (arrayOfData[i][2] > 0) {
    //        data.setItem(2, i, (arrayOfData[i][2]));
    //    }
    //}
    //
    //chart1.getSeries().getItem(0).setColor('#257B3D'); // thuc te (xanh)
    //chart1.getSeries().getItem(0).setText("Thực Tế");
    //var point0 = chart1.getSeries().getItem(0).getPointLabels();
    //point0.setLineAlignment(cfx.StringAlignment.Center);
    //point0.setTextColor("#FFFFFF");
    //
    //chart1.getSeries().getItem(1).setColor('#E47E25'); // thieu (vang)
    //chart1.getSeries().getItem(1).setText("Thiếu");
    //// point 1 (thieu)
    //var point1 = chart1.getSeries().getItem(1).getPointLabels();
    //point1.setTextColor("#000000");
    //point1.setLineAlignment(cfx.StringAlignment.Near);
    //
    //chart1.getSeries().getItem(2).setColor('#EC1C24'); // thua (do)
    //chart1.getSeries().getItem(2).setText("Thừa");
    //var point2 = chart1.getSeries().getItem(2).getPointLabels();
    //point2.setLineAlignment(cfx.StringAlignment.Near);
    //point2.setTextColor("#FFFFFF");
    //
    //
    //var axis;
    //axis = chart1.getAxisX();
    //axis.getLabels().setItem(0, "");
    //axis.getLabels().setItem(1, "");
    //axis.getLabels().setItem(2, "");
    //axis.getLabels().setItem(3, "");
    //
    //var pointLabels = chart1.getAllSeries().getPointLabels();
    //pointLabels.setVisible(true);
    // 
    //// set max
    //if (total.nangluong > nangluong.standardEnergy) {
    //    chart1.getAxisY().setMax(total.nangluong + 500);
    //} else {
    //    chart1.getAxisY().setMax(nangluong.standardEnergy + 500);
    //}
    //
    //
    //var chartDiv = document.getElementById('container-dd');
    //chart1.create(chartDiv);
    
    
    
    
    var chart1 = new cfx.Chart();
    
    chart1.setGallery(cfx.Gallery.Bar);
    chart1.getAllSeries().setStacked(cfx.Stacked.Normal);
    chart1.getView3D().setEnabled(true);
    
    chart1.getSeries().getItem(0).setColor('#FF773B');
    chart1.getSeries().getItem(1).setColor('#FF3021');
    chart1.getSeries().getItem(2).setColor('#1F8B40');
    
    chart1.getAllSeries().getPointLabels().setVisible(true);
    
    // set max
    if (total.nangluong > nangluong.standardEnergy) {
        chart1.getAxisY().setMax(total.nangluong + 500);
    } else {
        chart1.getAxisY().setMax(nangluong.standardEnergy + 500);
    }
    
    
    
    PopulateCarProduction(chart1);
    //var titles = chart1.getTitles();
    //var title = new cfx.TitleDockable();
    //title.setText("Vehicles Production by Month");
    //titles.add(title);
    //chart1.getAxisY().getTitle().setText("Number of Vehicles");
    var chartDiv = document.getElementById('container-dd');
    chart1.create(chartDiv);
    
    $('svg#chart g').find(".LegendItem").hide();
    
    function PopulateCarProduction(chart1) {
      
      var arrayOfData = new Array(
          enGraphData,
          damGraphData,
          duongGraphData,
          beoGraphData
      );
      
        var items = [{
            "Thực tế": arrayOfData[0][0],
            "Thiếu": arrayOfData[0][1],
            "Thừa": arrayOfData[0][2],
            "Name": "Năng lượng"
        }, {
           "Thực tế": arrayOfData[1][0],
            "Thiếu": arrayOfData[1][1],
            "Thừa": arrayOfData[1][2],
            "Name": "Đạm"
        }, {
          "Thực tế": arrayOfData[2][0],
            "Thiếu": arrayOfData[2][1],
            "Thừa": arrayOfData[2][2],
            "Name": "Đường"
        }, {
          "Thực tế": arrayOfData[3][0],
            "Thiếu": arrayOfData[3][1],
            "Thừa": arrayOfData[3][2],
            "Name": "Béo"
        }];
    
    
        chart1.setDataSource(items);
        
        
    }

    
    
    //chart1.getAnimations().getLoad().setEnabled(true);
    //chart1.setGallery(cfx.Gallery.Bar);
    //chart1.getToolTips().setEnabled(false);
    //
    //var data = chart1.getData();
    //
    //chart1.getData().setSeries(3);
    //
    //// draw graph
    //var arrayOfData = new Array(
    //    enGraphData,
    //    damGraphData,
    //    duongGraphData,
    //    beoGraphData
    //);
    //
    //for (var i = 0; i <= 3; i++) {
    //    // thuc te
    //    data.setItem(0, i, (arrayOfData[i][0]));
    //    // thieu
    //    if (arrayOfData[i][1] > 0) {
    //        data.setItem(1, i, (arrayOfData[i][1]));
    //    }
    //    // thua
    //    if (arrayOfData[i][2] > 0) {
    //        data.setItem(2, i, (arrayOfData[i][2]));
    //    }
    //}
    //
    //chart1.getSeries().getItem(0).setColor('#108F1A'); // thuc te (xanh)
    //chart1.getSeries().getItem(0).setText("Thực Tế");
    //var point0 = chart1.getSeries().getItem(0).getPointLabels();
    //point0.setLineAlignment(cfx.StringAlignment.Center);
    //point0.setTextColor("#FFFFFF");
    //
    //chart1.getSeries().getItem(1).setColor('#FFF035'); // thieu (vang)
    //chart1.getSeries().getItem(1).setText("Thiếu");
    //// point 1 (thieu)
    //var point1 = chart1.getSeries().getItem(1).getPointLabels();
    //point1.setTextColor("#000000");
    //point1.setLineAlignment(cfx.StringAlignment.Near);
    //
    //chart1.getSeries().getItem(2).setColor('#E83A3B'); // thua (do)
    //chart1.getSeries().getItem(2).setText("Thừa");
    //var point2 = chart1.getSeries().getItem(2).getPointLabels();
    //point2.setLineAlignment(cfx.StringAlignment.Near);
    //point2.setTextColor("#FFFFFF");
    //
    //var axis;
    //axis = chart1.getAxisX();
    //axis.getLabels().setItem(0, "");
    //axis.getLabels().setItem(1, "");
    //axis.getLabels().setItem(2, "");
    //axis.getLabels().setItem(3, "");
    //
    //var pointLabels = chart1.getAllSeries().getPointLabels();
    //pointLabels.setVisible(true);
    //
    //chart1.getAllSeries().setStacked(cfx.Stacked.Normal);
    //chart1.getAllSeries().setBarShape(cfx.BarShape.Cylinder);
    //chart1.getAllSeries().setVolume(50);
    //chart1.getView3D().setEnabled(true);
    //chart1.getView3D().setAngleX(20);
    //chart1.getView3D().setAngleY(0);
    //
    //// set max
    //if (total.nangluong > nangluong.standardEnergy) {
    //    chart1.getAxisY().setMax(total.nangluong + 500);
    //} else {
    //    chart1.getAxisY().setMax(nangluong.standardEnergy + 500);
    //}
    //
    //chart1.getLegendBox().setDock(cfx.DockArea.Right);
    //
    //var chartDiv = document.getElementById('container-dd');
    //chart1.create(chartDiv);
    //$('svg#C1s g').remove();
    

    

}

function calPTLK(type) {
    var divTarget;
	if (type == 1) {
	  divTarget = $("#container-pull");
	}else if (type == 2) {
	  divTarget = $("#mini-lk");
	}
	
	divTarget.html('');
    
    var age1 = ['11', '13', '15', '17', '19', '24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '99'];
    
    var age = ['10-11', '12-13', '14-15', '16-17', '18-19', '20-24', '25-29', '30-34', '35-39',
               '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-99'];
    
    var age_temp = getAge(user.age);
    var user_pulls = [];
    var user_pull_data = (total.pull);
    
    
    for (var i = 0; i < age.length; i++) {
        if (age_temp <= age1[i]) {
            user_pulls[i] = {
                y: user_pull_data,
                marker: {
                    symbol: 'url(sun.png)'
                }
            }
            break;
        } else {
            user_pulls.push('');
        }
    }
    
  var weaks_male = [12.6,19.4,28.5,32.6,35.7,36.8,37.7,36.0,35.8,35.5,34.7,32.9,30.7,30.2,28.2,21.3];    
  var strongs_male = [22.4,31.2,44.3,52.4,55.5,56.6,57.5,55.8,55.6,55.3,54.5,50.7,48.5,48.0,44.0,35.1];
  var default_male = [];
  
  for(var i=0;i<weaks_male.length;i++){
    default_male[i] = (weaks_male[i]+strongs_male[i])/2;
  } 

  var weaks_female = [11.8,14.6,15.5,17.2,19.2,21.5,25.6,21.5,20.3,18.9,18.6,18.1,17.7,17.2,15.4,14.7];  
  var strongs_female = [21.6,24.4,27.3,29.0,31.0,35.3,41.4,35.3,34.1,32.7,32.4,31.9,31.5,31.0,27.2,24.5];
  var default_female = [];
  
  for(var i=0;i<weaks_female.length;i++){
    default_female[i] = (weaks_female[i]+strongs_female[i])/2;
  }
 

    var strongs = [];          
    var weaks = [];
    var defaultPull = [];
    
    if (user.sex == '0') {
      strongs = strongs_male;
      weaks = weaks_male;
      defaultPull = default_male;
    }else if (user.sex == '1') {
      strongs = strongs_female;
      weaks = weaks_female;
      defaultPull = default_female;
    }
    

    divTarget.highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: null,            
        },

        xAxis: {
            categories: age
        },
        yAxis: {
            max: 90,
            min: 0,
            title: {
                text: 'Lực kéo'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            },
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Mạnh',
            data: strongs,
            color: '#32BF49'

        },{
            name: 'Bình thường',
            marker: {
                symbol: 'diamond'
            },
            data: defaultPull,
            color: '#0C2E59'
        },{
            name: 'Bạn',            
            data: user_pulls,
            
        },{
            name: 'Yếu',
            marker: {
                symbol: 'diamond'
            },
            data: weaks,
            color: '#FF5362'
        }]
    }, function(chart){
      
      var pos = user_pulls.length - 1;
      
      var pos_user = user_pull_data;
      var pos_strongs = strongs[pos];
      var pos_weaks = weaks[pos];
      
      var tempDIV = "Mạnh: " + pos_strongs;
      tempDIV += "<br>";
      tempDIV += "<b>Bạn: " + pos_user;
      tempDIV += "</b><br>";
      tempDIV += "Yếu: " + pos_weaks;
    
      var point = chart.series[2].data[pos];
      
      var text = chart.renderer.text( tempDIV,
                                     point.plotX + chart.plotLeft + 45,
                                     point.plotY + chart.plotTop).attr({ zIndex: 5 }).add();
      
      box = text.getBBox();
          
      var position = {
        'x':point.plotX + chart.plotLeft,
        'y':point.plotY + chart.plotTop
      }
          
      chart.renderer.circle(position.x, position.y, 10).attr({
          fill: '#FCFFC5',
          stroke: 'black',
          'stroke-width': 1
      }).add();
      
      var pos_box={
        'x':box.x - 5,
        'y':box.y - 5
      }
      
      chart.renderer.path(['M', position.x, position.y,
                           'L', pos_box.x, pos_box.y,
                           'L', pos_box.x, pos_box.y+10,
                           'L', position.x, position.y,
                           'Z'])
            .attr({
                'stroke-width': 1,
                stroke: 'gray',
                fill: '#FFFFEF'
            })
            .add();
      
      chart.renderer.rect(pos_box.x, pos_box.y, box.width + 10, box.height + 10, 5)
          .attr({
              'font-size':'16px',
              fill: '#FFFFEF',
              stroke: 'gray',
              'stroke-width': 1,
              zIndex: 4
          })
          .add();
    
    });
    
    divTarget.find("text").last().hide();
}


function getAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    return currentYear - parseInt(yearOfBirth);
}

function calculateStandardKcal(totalEnergy, percentage) {
    return ((totalEnergy * percentage) / 100);
}

function rnd(num) {
    var rs = 0;
    if (!isNaN(num) && num != 0) {
        rs = num.toFixed(1);
    }
    return parseFloat(rs);
}

function identifyEnergyLevel() {
    // default value
    var standardEnergy = 0;
    var level = LEVEL[0];

    // get input
    var actualEnergy = total.nangluong;
    var gender = user.sex;
    var age = getAge(user.age);
    var typeOfWork = user.typework;
    // identify level
    var mapAge = 0;
    for (var a in STANDARD_ENERGY[gender]) {
        if (age > a) {
            mapAge = a;
            break;
        }
    }
    if (mapAge > 0) {
        standardEnergy = STANDARD_ENERGY[gender][mapAge][typeOfWork];

        if (actualEnergy < standardEnergy) {
            level = LEVEL[0];
        } else if (actualEnergy > standardEnergy) {
            level = LEVEL[2];
        } else {
            level = LEVEL[1];
        }
    }
    return {
        standardEnergy: standardEnergy,
        level: level,
        description: EVALUATE_ENERGY[level].description,
        evaluate: EVALUATE_ENERGY[level].evaluate,
        recommend: EVALUATE_ENERGY[level].recommend
    };
};

function calculateGraphData(actualEnergy, standardEnergyMin, standardEnergyMax) {
    //console.log("actualEnergy = " + actualEnergy
    //            + ", standardEnergyMin=" + standardEnergyMin
    //            + ", standardEnergyMax=" + standardEnergyMax);

    var rs = [0, 0, 0];
    if (standardEnergyMax === undefined || standardEnergyMax === null) {
        standardEnergyMax = standardEnergyMin;
    }

    if (actualEnergy < standardEnergyMin) { // less
        rs = [Math.round(actualEnergy), Math.round(standardEnergyMin - actualEnergy), null];
    } else if (actualEnergy > standardEnergyMax) { // more
        rs = [Math.round(standardEnergyMax), null, Math.round(actualEnergy - standardEnergyMax)];
    } else { // enough
        rs = [Math.round(actualEnergy), null, null];
    }

    //console.log(rs)
    return rs;
};


// SYNC DATA LAMHONGDATA.COM

initData();

function initData() {
  if (localStorage.list_data_user_created == undefined) {
    
    localStorage.setItem('list_data_user_created','[]')
    
  }else{
    
    var temp = JSON.parse(localStorage.list_data_user_created);          
    list_data_user_created = temp;
    
  }
}
function clearData() {
  localStorage.list_data_user_created = "[]";
}

function saveDataUser(){
  
  var temp_user = {
    'customer': user,
    'record':total          
  };
  
  list_data_user_created.push(temp_user);
  
  localStorage.list_data_user_created = JSON.stringify(list_data_user_created);
  
  // Update to autocomplete and dat_local when new user and new phone
  
  var bExist = false;
  for(var i=0;i<list_data_local.length;i++)
  {
    var temp = list_data_local[i];
    if (temp.phone == user.phone) {
      bExist = true;
      
      //list_data_local[i].deleted = user.deleted; //For ipad reload check
      // IF DELEDTED -> php check and remove in this
      
      break;
    }
  }
  
  if (bExist == false) {
    var temp_autocomplete = {'value':(list_data_autocomplete.length+1),'label':user.name+"-"+user.phone};
    list_data_autocomplete.push(temp_autocomplete);
              
    list_data_local.push(user);
    
    save2LocalStorage();
  }
  
  
  
}

function syncData() {
  
  var data_json = JSON.stringify(list_data_user_created);
  
  $.ajax({
      type: "POST",
      url: url_sync+"ajax.php",
      data: {
          'action': 'sync',
          'data': data_json
      },
      success: function (msg) {
          var temp = JSON.parse(msg);
          if(temp.result=='1') {
            alert('Send data done');
                              
            // Sync complete
            var temp_time = getCurrentDateCreated();
            localStorage.setItem('sync_last',temp_time);
            $("#btt-sync").val("Sync now (Last:"+temp_time+")")
            
            clearData(); // Clear data
            // Get autocomplete list
            getDataList();
          }
      }
  });
  
}

function getDataList() {
  $.ajax({
      type: "GET",
      url: url_sync+"ajax.php",
      data: {
          'action': 'sync'
      },
      success: function (msg) {
        var temp = JSON.parse(msg);
        
        data2Local(temp); // Store list local
        data2AutoComplete(temp); // Store list autocomplete
      }
  });
}



initDataLocal();
function initDataLocal(){
  if (localStorage.list_data_local == undefined) {
    
    localStorage.setItem('list_data_local','[]')
    
  }else{
    
    var temp = JSON.parse(localStorage.list_data_local);          
    list_data_local = temp;
    
  }
}
function data2Local(data){
  list_data_local = data;
  
  var data_json = JSON.stringify(list_data_local);
  localStorage.list_data_local = data_json; 
}

function loadDataFromLIUser(val) {
  document.activeElement.blur(); //Hide keyboard
  
  if(confirm("Bạn đồng ý mở lại dữ liệu khách hàng ?")){
    
    user_mode = 1; //LIST
    var temp_data = list_data_local[val];
    
    $("#list-user li").removeClass('ios-list-item-select');
    $("#list-user li[bsq-id="+val+"]").addClass('ios-list-item-select');
    changeTab(2); // Tab view info user
    
    putData2Input(temp_data);
  
  }
}

function resetForm() {
  $( "#input-name" ).val( '' );
  $( "#input-address" ).val( '' );
  $( "#input-districts" ).val( '' );
  $( "#input-phone" ).val( '' );
  $( "#input-age" ).val( '' );
  
  $('#select-gender').val(0);
  $('#select-type-work').val(0);
  
  
  
}

initAutocomplete();
function initAutocomplete(){
  if (localStorage.list_data_autocomplete == undefined) {
    
    localStorage.setItem('list_data_autocomplete','[]')
    
  }
  
  
  //$("#list-user").html('');
  for(var i=0;i<list_data_local.length;i++){
    var temp = list_data_local[i];
    //if (temp.deleted == 0) {
      var tempLi = '<li class="ios-list-item" bsq-id="'+i+'" ontouchstart="loadDataFromLIUser('+i+')">'+temp.name+'</li>';
      
      $("#list-user").prepend(tempLi);
    //}
    
  }
  
  
  
  var temp = JSON.parse(localStorage.list_data_autocomplete);          
  list_data_autocomplete = temp;
  
  $( "#input-name" ).autocomplete({
    minLength: 0,
    source: list_data_autocomplete,      
    select: function( event, ui ) {
      
      var temp_data = list_data_local[ui.item.value-1];
      putData2Input(temp_data);
      
      
      // AUTOCOMPLETE JQUERY UI -- bsqMOD -- touchstart, touchmove inside 07012015
      // blur after autocomplete done!
      document.activeElement.blur();
      
      //console.log( ui.item.value );
      
      return false;
    }
  });
  
  $( "#input-user-district" ).autocomplete({
    minLength: 0,
    source: tinhthanhArray,      
    select: function( event, ui ) {
      
      
      user.districts = ui.item.value;
      $( "#input-user-district" ).val( getTinhThanhString(user.districts) );
      //var temp_data = list_data_local[ui.item.value-1];
      //putData2Input(temp_data);
      
      //condition_info = [1,1,1];
      //condition_inside = [1,1,1];
      
      //checkInputInfo();
      //checkInputInside();
      
      // blur after autocomplete done!
      document.activeElement.blur();
      
      //console.log( ui.item.value );
      
      return false;
    }
  });

}
function clearAutoComplete(){
  localStorage.list_data_autocomplete = '[]';
}
function putData2Input(data){
  
  //$( "#tags" ).val( data.name );
  $( "#input-name" ).val( data.name );
  $( "#input-address" ).val( data.address );
  $( "#input-districts" ).val( getTinhThanhString(data.districts) );
  $( "#input-phone" ).val( data.phone );
  $( "#input-age" ).val( data.age );
  
  $('#select-gender').val(data.sex);
  $('#select-type-work').val(data.typework);
  
  //$('input:radio[name=sex][value='+data.sex+']').click();
  //$('input:radio[name=type-work][value='+data.typework+']').click();
  
  user.name = data.name;
  user.address = data.address;
  user.districts = data.districts;
  user.phone = data.phone;
  user.sex = data.sex;
  user.age = data.age;
  user.typework = data.typework;

}

function getTinhThanhString(value){
  for(var i=0;i<tinhthanhArray.length;i++){
    
    var temp = tinhthanhArray[i];
    if (temp.value == value) {
      return temp.label;
    }
    
  }
  
  return null;
}

function data2AutoComplete(data){
  list_data_autocomplete = [];
  
  for(var i=0;i<data.length;i++){
    var temp = {'value':(i+1),'label':data[i].name+"-"+data[i].phone};
    list_data_autocomplete.push(temp);          
  }
  // Sync complete
  
  // Save back localstorage : list_data_autocomplete
  var data_json = JSON.stringify(list_data_autocomplete);
  localStorage.list_data_autocomplete = data_json;        
  
}

function save2LocalStorage() {
  //Auto Complete
  var data_json = JSON.stringify(list_data_autocomplete);
  localStorage.list_data_autocomplete = data_json;
  
  //Data local
  var data_json = JSON.stringify(list_data_local);
  localStorage.list_data_local = data_json;         
}

initStatusSync();
function initStatusSync(){
  if (localStorage.sync_last == undefined) {
    
    localStorage.setItem('sync_last','0')
    
  }
  
  var temp = localStorage.sync_last;
  $("#btt-sync").val("Sync now (Last:"+temp+")")
}

// Change tab 030315

function changeTab(id){
  $(".bsq-tab").hide();
  $(".bsq-tab[bsq-id="+id+"]").fadeIn(200);
  
  if (id==1) {
    $("#title-top").html('NUTRITION CALCULATED')
  }
  if (id==2) {
    $("#title-top").html('THÔNG TIN KHÁCH HÀNG')
  }
  if (id==3) {
    clearInputReg();
    $("#title-top").html('TẠO MỚI KHÁCH HÀNG')
    setTimeout(function(){ $($(".bsq-step")[0]).find('input').focus(); }, 500);    
  }
}

var currentStepInputId = 1;
function nextStepInput(bBlur){
  
  var bCheckInput = false;
  
  if (currentStepInputId == 1) {
    if ($("#input-user-name").val()=='') {
      //alert("Vui lòng nhập vào họ và tên");
      bCheckInput = true;
      //return;
    }
  }
  if (currentStepInputId == 2) {
    if ($("#input-user-birth").val()=='') {
      //alert("Vui lòng nhập vào năm sinh");
      bCheckInput = true;
      //return;
    }
  }
  if (currentStepInputId == 5) {
    if ($("#input-user-district").val()=='') {
      //alert("Vui lòng nhập vào quận huyện");
      bCheckInput = true;
      //return;
    }
  }
  if (currentStepInputId == 6) {
    if ($("#input-user-phone").val()=='') {
      //alert("Vui lòng nhập vào số điện thoại");
      bCheckInput = true;
      //return;
    }
  }
  
  if (!bCheckInput) {
    currentStepInputId += 1;
  
    $(".bsq-step").hide();
    $(".bsq-step[bsq-id="+currentStepInputId+"]").fadeIn();
    setTimeout(function(){ $(".bsq-step[bsq-id="+currentStepInputId+"]").find('input').focus(); }, 500);
    
    if (bBlur == true) {
      document.activeElement.blur();
    }  
  }
  
  
}
function prevStepInput() {
  currentStepInputId -= 1;
  if (currentStepInputId <= 0) {
    currentStepInputId = 1;
  }
  
  $(".bsq-step").hide();
  $(".bsq-step[bsq-id="+currentStepInputId+"]").fadeIn();
  
  setTimeout(function(){ $(".bsq-step[bsq-id="+currentStepInputId+"]").find('input').focus(); }, 500);
}

function resetStep(){
  
  currentStepInputId = 1;
  $(".bsq-step").hide();
  $(".bsq-step[bsq-id="+currentStepInputId+"]").show();
  
  //Reset user class
  user = {
    'name':'',
    'age':0,
    'sex':0,
    'address':'',
    'districts':1,
    'phone':'',
    'typework':0,
    'date_created':getCurrentDateCreated(),
    'deleted':0
  }
  
}
function clearInputReg(){
  
  resetStep();
  
  $("#input-user-name").val('');
  $("#input-user-birth").val('');
  $("#input-user-phone").val('');
  $("#input-user-address").val('');
  $("#input-user-district").val('');
  
  $("#select-user-gender").select(0);
  $("#select-user-work").select(0);
  
}

function cancleStep() {
  if(confirm("Bạn có muốn hủy bỏ?")){
    
    clearInputReg();
    changeTab(1);
    
  }  
}

function newUSER(){
  user_mode = 0; //NEW
  
  clearInputReg();
  changeTab(3);
}

function removeUSERBUTTON(){
  
  alert("Đang xây dựng");
  
  //if (confirm('Bạn có thật sự chắc chắn muốn xóa khách hàng này?')) {
  //  user.deleted = 1;
  //  
  //  saveDataUser();
  //  save2LocalStorage();
  //  
  //  window.location.href = '';
  //}
  
}

var bPrint = false;
var imagePRINT;

function printREPORT() {
//  var svg_lk = $("#mini-lk").find('svg')[0];
//  if (svg_lk != undefined) {
//	svg2image(svg_lk);
//  }
  
  
  
  if (bPrint == false) {
	
	svg2image("#mini-dd");
	svg2image("#mini-lk");
	
	
	
	var contentReport = $("#content-report").html();
	  html2canvas($("#content-report")[0], {
	  onrendered: function(canvas) {
		
		var png = canvas.toDataURL("image/png");
		
		//alert(png);
		
		imagePRINT = '<img style="width:1024px" src="'+png+'"/>';	  
		//$("body").append(image);
		
		if (bPhoneGap) {
		  cordova.plugins.printer.isAvailable(
			  function (isAvailable) {
				  
				  //alert(isAvailable ? 'Service is available' : 'Service NOT available');
				  
				  if (isAvailable) {
					var contentReport = imagePRINT;
									  
					cordova.plugins.printer.print(contentReport, { name:'Nutrition Report', landscape:false }, function () {
						bPrint = true;
						
						alert('printing finished or canceled')			
						
					});
				  }
				  
			  }
		  );
		}
		
		
		bPrint = true;
	  }
	});
  }else{
	
	if (bPhoneGap) {
	  cordova.plugins.printer.isAvailable(
		  function (isAvailable) {
			  
			  if (isAvailable) {
				var contentReport = imagePRINT;
			  
				cordova.plugins.printer.print(contentReport, { name:'Nutrition Report', landscape:false }, function () {
					alert('printing finished or canceled')
				});
			  }
			  
		  }
	  );
	}else{
	  
	  alert(bPrint);
	  
	}
	
  }
  
  
  
  
  
}

function svg2image(target) {
  
  element = $(target).find('svg')[0];
  
  if (element != undefined) {
	var canvas = document.createElement("canvas");  
	$(canvas).width(480);
	$(canvas).height(400);  
	var oSerializer = new XMLSerializer();
	var sXML = oSerializer.serializeToString(element); 
	canvg(canvas, sXML,{ ignoreMouse: true, ignoreAnimation: true })  
	var png = canvas.toDataURL("image/png");
	
	$(target).html('<img style="width:480px" src="'+png+'"/>');
  }
  
  
}


function printREPORT2(){
  //http://www.inkfood.com/svg-to-canvas/
  
  //http://jsfiddle.net/02t09uud/
  //http://bl.ocks.org/biovisualize/8187844
  
  
  
  
  
  //var contentReport = $("#content-report").html();
//  html2canvas($("#content-report")[0], {
//	onrendered: function(canvas) {
//	  
//	  
//	  document.body.appendChild(canvas);
//	}
//  });
  
  //cordova.plugins.printer.isAvailable(
  //    function (isAvailable) {
  //        
  //        alert(isAvailable ? 'Service is available' : 'Service NOT available');
  //        
  //        if (isAvailable) {
  //          var contentReport = $("#content-report").html();
  //        
  //          cordova.plugins.printer.print(contentReport, { name:'Nutrition Report', landscape:true }, function () {
  //              alert('printing finished or canceled')
  //          });
  //        }
  //        
  //    }
  //);
}
