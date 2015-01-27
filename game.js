var bForceMove = true;

$(".panel").bind("touchstart",function(){
  document.activeElement.blur();
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

$("#btt-sync").bind('touchstart', function(){
  if (navigator.onLine){
    if(confirm("Do you want to sync data ?")){          
      syncData();
    }
  }else{
    alert("Thiet bi chua ket noi vao internet!");
  }
})
$("#btt-config").bind('touchstart', function(){
  var temp = prompt("Password?");
  if(temp == "ppp"){
    $(".panel").hide();
    $("#panel-config").show();
  }
})
$("#btt-reload").bind('touchstart', function(){
  if(confirm("Do you want to reload ?")){
    window.location.href = '';
  }
})



var list_meal_added = [];

var list_data_user_created = []; // User data-add
var list_data_autocomplete = []; // Sync data-autocomplete
var list_data_local = []; // User data-local

var user = {
  'name':'',
  'age':0,
  'sex':0,
  'address':'',
  'districts':1,
  'phone':'',
  'typework':0,
  'date_created':getCurrentDateCreated()
}

var result = {
    'energy': 2314,
    'dam': 391.6,
    'duong': 1514.8,
    'beo': 409.5
}

var total = {
    'pull':0,
    'nangluong':0,
    'dam':0,
    'duong':0,
    'beo':0,
    'vitamin':0,
    'date_created':getCurrentDateCreated()
}

///



///

function getCurrentDateCreated() {
  
  var current = new Date();
  return current.getDate()+"/"+(current.getMonth()+1)+"/"+current.getFullYear()+" "+current.getHours()+":"+current.getMinutes();
  
}
var current = 0;

$("#btt-next-intro").bind('touchstart', function() {
  next();
})
$("#btt-next-info").bind('touchstart', function() {
  
  var mode = $("#select-mode").val();
  
  if (mode == 1) {
    $("#div-typework").hide();
  }
  enableMode(mode);
  
  next();  
})

var cal_mode = 0;

function enableMode(val){
  if (val == 0) {
    
    cal_mode = 0;    
    
  }else if(val == 1){
    
    $("#panel-title").html('PHÂN TÍCH LỰC KÉO');
    
    cal_mode = 1;
    condition_inside[2] = 1;
    
  }else{
    
    $("#panel-title").html('PHÂN TÍCH THÀNH PHẦN DINH DƯỠNG VÀ LỰC KÉO');
    cal_mode = 2;
    
  }
  
  checkInputInside();
}

$("#btt-next-ptdd").bind('touchstart', function() {
   
  if (cal_mode == 2) {
    
    var temp = $('#input-pull').val();    
    if (temp == '') {
      alert("Yêu cầu nhập vào kết quả đo lực kéo!")
      return;
    }
  }
  
  saveDataUser(); // Save data here
  
  if (cal_mode == 2) calPTLK();
  
  calTPDD();
  
  
  
  next();
  
})
$("#btt-next-ptlk").bind('touchstart', function() {  
  next();
})
$("#btt-next-tpdd").bind('touchstart', function() {        
  next();
})

$("#btt-next-print").bind('touchstart', function() {  
  next();
  
  setTimeout(function(){
    
    window.location.href = '';
    
  },3000);
  
  
})


function next() {
  
    if (current == 2) {
      if (cal_mode == 0) {
        $($(".panel")[current]).hide();
        
        current += 2;
        
        $($(".panel")[current]).fadeIn();
      }else{
        $($(".panel")[current]).hide();
        
        current += 1;
        
        $($(".panel")[current]).fadeIn();
      }
    }else if (current == 3) {
      if (cal_mode == 1) {
        $($(".panel")[current]).hide();
        
        current += 2;
        
        $($(".panel")[current]).fadeIn();
      }else{
        $($(".panel")[current]).hide();
        
        current += 1;
        
        $($(".panel")[current]).fadeIn();
      }
    }
    else{
      $($(".panel")[current++]).hide();
      $($(".panel")[current]).fadeIn();
    }
  
    
    
    if (current == 2) {
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
}

// USER INPUT
// INFO
$('#input-name').bind('input', function(){        
  user.name = $(this).val();
  
  setVal2IndexArray(0,1,condition_info);        
  checkInputInfo();        
  
});
$('#input-address').bind('input', function(){        
  user.address = $(this).val();
  
  setVal2IndexArray(1,1,condition_info);        
  checkInputInfo();        
});
$('#input-phone').bind('input', function(){        
  user.phone = $(this).val();
  
  setVal2IndexArray(2,1,condition_info);        
  checkInputInfo();        
});

// INSIDE
$('#input-age').bind('input', function(){        
  user.age = $(this).val();
  
  setVal2IndexArray(1,1,condition_inside);        
  checkInputInside();        
});
$('input[name="sex"]:radio').change(function(){        
  user.sex = $(this).val();
  
  setVal2IndexArray(0,1,condition_inside);        
  checkInputInside();        
});
$('input[name="type-work"]:radio').change(function(){        
  user.typework = $(this).val();
  
  setVal2IndexArray(2,1,condition_inside);        
  checkInputInside();        
});

//if (!bPhoneGap) {
  $('#input-pull').change(function(){        
    
    var temp = $('#input-pull').val();    
    total.pull = bsqStringToNumber(temp);
    $("#td-pull").html(total.pull);
    
    if(cal_mode == 1) showButtonPTLK();
  
  });
  
  function showButtonPTLK() {
    $("#btt-ptlk").show();
    $("#btt-ptlk").bind("touchstart", function(){
      
      saveDataUser(); // Save data here
  
      calPTLK();
      next();
      
    })
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

var condition_info = [0,0,0];      
function checkInputInfo(){
  if (condition_info.equals([1,1,1])) {
    $("#btt-next-info").show();
  }else{
    $("#btt-next-info").hide();
  }
}

var condition_inside = [0,0,0];      
function checkInputInside(){
  if (condition_inside.equals([1,1,1])) {
    
    if (cal_mode == 0) {
      $("#div-meal").show();
    }else if(cal_mode == 1){
      $("#div-pull").show();
    }else{
      $("#div-meal").show();
      $("#div-pull").show();
    }
    
  }else{
    
    if (cal_mode == 0) {
      $("#div-meal").hide();
    }else if (cal_mode == 1) {
      $("#div-pull").hide();
    }else{
      
    }
    
  }
}

// List meal
$("#select-time-meal").change(function(){        
  loadListMeal($("#select-time-meal")[0].value);
})      
$("#button-add-meal").bind('touchstart',function(){
  
  if($("#input-meal").val() == ''){
    alert("Yêu cầu nhập vào món ăn!");
    return;
  }
  
  $("#button-remove-meal").show();
  $("#table").show();
  
  var qty = $("#input-quantity").val();
  addItem(qty);        
})

$("#button-remove-meal").bind('touchstart',function(){
  
  //$("#table").show();  
  //var qty = $("#input-quantity").val();
  removeItem();
})

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
  
  $("#table-info").show();
  $("#btt-next-ptdd").show();
}

function removeItem(){
  list_meal_added.pop();
  
  if (list_meal_added.length > 0) {
    loadTable();
  }else{
    $("#table-info").hide();
    $("#btt-next-ptdd").hide();
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
  '<td colspan="4" style="background: #00A1D3;">Năng lượng 1 ngày</td>'        
  +"<td style='background: #F48120'>"+total.nangluong+"</td>"
  +"<td style='background: #F48120'>"+total.dam+"</td>"
  +"<td style='background: #F48120'>"+total.duong+"</td>"
  +"<td style='background: #F48120'>"+total.beo+"</td>"
  +"<td style='background: #F48120'>"+total.vitamin+"</td>"
  temp_div += "</tr>";
  
  temp_div += "<tr>";
  temp_div +=          
  '<td colspan="5" style="background: #00A1D3;">Tỉ lệ phần trăm năng lượng trong 1 ngày</td>'        
  +"<td style='background: #F48120'>"+percents.dam+"%</td>"
  +"<td style='background: #F48120'>"+percents.duong+"%</td>"
  +"<td style='background: #F48120'>"+percents.beo+"%</td>"
  //+"<td></td>"        
  temp_div += "</tr>";
  
  if (cal_mode == 2) {
    temp_div += "<tr><td colspan='5' style='background: #00A1D3;'>Kết quả đo lực kéo</td><td id='td-pull' style='background: #F48120'>"+total.pull
    +"</td>"
    //+"<td></td><td></td><td></td>"
    +"</tr>"
  }
  
  
  
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
    
    chart1.getSeries().getItem(0).setColor('#EC1C24');
    chart1.getSeries().getItem(1).setColor('#E47E25');
    chart1.getSeries().getItem(2).setColor('#257B3D');
    
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
    

    

    //$('#container-dd').highcharts({
    //
    //    chart: {
    //        type: 'column',
    //        options3d: {
    //            enabled: true,
    //            alpha: 15,
    //            beta: 15,
    //            viewDistance: 25,
    //            depth: 40
    //        },
    //        marginTop: 80,
    //        marginRight: 40
    //    },
    //
    //    title: {
    //        text: 'PHÂN TÍCH THÀNH PHẦN DINH DƯỠNG'
    //    },
    //
    //    xAxis: {
    //        categories: ['Tổng năng lượng', 'Đạm', 'Đường', 'Béo']
    //    },
    //
    //    yAxis: {
    //        allowDecimals: false,
    //        min: 0,
    //        title: {
    //            text: 'KCAL'
    //        }
    //    },
    //
    //    tooltip: {
    //        headerFormat: '<b>{point.key}</b><br>',
    //        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    //    },
    //
    //    plotOptions: {
    //        column: {
    //            stacking: 'normal',
    //            depth: 40
    //        }
    //    },
    //
    //    series: [{
    //        name: 'Thừa',
    //        data: [enGraphData[2], damGraphData[2], duongGraphData[2], beoGraphData[2]],
    //        stack: '1'
    //    }, {
    //        name: 'Thiếu',
    //        data: [enGraphData[1], damGraphData[1], duongGraphData[1], beoGraphData[1]],
    //        stack: '1'
    //    }, {
    //        name: 'Thực tế',
    //        data: [enGraphData[0], damGraphData[0], duongGraphData[0], beoGraphData[0]],
    //        stack: '1'
    //    }]
    //});
}

function calPTLK() {
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
    

    $('#container-pull').highcharts({
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
            data: strongs

        },{
            name: 'Bình thường',
            marker: {
                symbol: 'diamond'
            },
            data: defaultPull
        },{
            name: 'Bạn',
            marker: {
                symbol: 'diamond'
            },
            data: user_pulls
        },{
            name: 'Yếu',
            marker: {
                symbol: 'diamond'
            },
            data: weaks
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
    
      var point = chart.series[2].data[pos],
          text = chart.renderer.text(
              tempDIV,
              point.plotX + chart.plotLeft + 45,
              point.plotY + chart.plotTop - 10
          ).attr({
              zIndex: 5
          }).add(),
          box = text.getBBox();

      chart.renderer.rect(box.x - 5, box.y - 5, box.width + 10, box.height + 10, 5)
          .attr({
              'font-size':'16px',
              fill: '#FFFFEF',
              stroke: 'gray',
              'stroke-width': 1,
              zIndex: 4
          })
          .add();
    
    });
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
        rs = [actualEnergy, (standardEnergyMin - actualEnergy), 0];
    } else if (actualEnergy > standardEnergyMax) { // more
        rs = [standardEnergyMax, 0, (actualEnergy - standardEnergyMax)];
    } else { // enough
        rs = [actualEnergy, 0, 0];
    }

    console.log(rs)
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


initAutocomplete();
function initAutocomplete(){
  if (localStorage.list_data_autocomplete == undefined) {
    
    localStorage.setItem('list_data_autocomplete','[]')
    
  }
  
  var temp = JSON.parse(localStorage.list_data_autocomplete);          
  list_data_autocomplete = temp;
  
  $( "#input-name" ).autocomplete({
    minLength: 0,
    source: list_data_autocomplete,      
    select: function( event, ui ) {
      
      var temp_data = list_data_local[ui.item.value-1];
      putData2Input(temp_data);
      
      condition_info = [1,1,1];
      condition_inside = [1,1,1];
      
      checkInputInfo();
      //checkInputInside();
      
      
      // AUTOCOMPLETE JQUERY UI -- bsqMOD -- touchstart, touchmove inside 07012015
      // blur after autocomplete done!
      document.activeElement.blur();
      
      //console.log( ui.item.value );
      
      return false;
    }
  });
  
  $( "#input-districts" ).autocomplete({
    minLength: 0,
    source: tinhthanhArray,      
    select: function( event, ui ) {
      
      
      user.districts = ui.item.value;
      $( "#input-districts" ).val( getTinhThanhString(user.districts) );
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
  
  $('input:radio[name=sex][value='+data.sex+']').click();
  $('input:radio[name=type-work][value='+data.typework+']').click();
  
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