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
  
  enableMode(mode);
  
  next();  
})

var cal_mode = 0;

function enableMode(val){
  if (val == 0) {
    
    cal_mode = 0;    
    
  }else{
    
    cal_mode = 1;
    
    
  }
  
  checkInputInside();
}

$("#btt-next-input").bind('touchstart', function() {
  
  //if ($("#input-pull").val()=='') {
  //  alert("Vui long nhap so do luc keo !")
  //}else{
  //  saveDataUser(); // Save data here
  //
  //  calPTLK();
  //  next();
  //  
  //  $("#btt-next-ptlk").show();  
  //}
  
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
      if (cal_mode == '0') {
        $($(".panel")[current]).hide();
        
        current += 2;
        
        $($(".panel")[current]).fadeIn();
      }else{
        $($(".panel")[current]).hide();
        
        current += 1;
        
        $($(".panel")[current]).fadeIn();
      }
    }else if (current == 3) {
      if (cal_mode == '1') {
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
    
    showButtonPTLK();
  
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
    
    if (cal_mode == '0') {
      $("#div-meal").show();
    }else{
      $("#div-pull").show();
    }
    
  }else{
    
    if (cal_mode == '0') {
      $("#div-meal").hide();
    }else{
      $("#div-pull").hide();
    }
    
  }
}

// List meal
$("#select-time-meal").change(function(){        
  loadListMeal($("#select-time-meal")[0].value);
})      
$("#button-add-meal").bind('touchstart',function(){
  
  $("#table").show();
  
  var qty = $("#input-quantity").val();
  addItem(qty);        
})
      
loadListMeal(0);
function loadListMeal(selectIndex) {
  var temp_array = filter_database[selectIndex];
  var temp_div = '';
  for(var i=0; i<temp_array.length;i++){
    var temp = temp_array[i];          
    temp_div += '<option value="'+i+'">'+temp_array[i].thucan+'</option>'          
  }        
  $("#select-meal").html(temp_div);        
}



function addItem(quantity){
  var index_time_meal = $("#select-time-meal")[0].value;
  var index_meal = $("#select-meal")[0].value;
  var temp_thucan = filter_database[index_time_meal][index_meal];
  
  temp_thucan = {
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
  $("#btt-next-input").show();
}
// End meal

function roundHundred(val){
  return Math.round(val * 100)/100;
}

function loadTable(){
  
  var temp_div = '';
  
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
  '<td colspan="4" style="background: #FFEA00;">Năng lượng 1 ngày</td>'        
  +"<td style='background: #F48120'>"+total.nangluong+"</td>"
  +"<td style='background: #F48120'>"+total.dam+"</td>"
  +"<td style='background: #F48120'>"+total.duong+"</td>"
  +"<td style='background: #F48120'>"+total.beo+"</td>"
  +"<td style='background: #F48120'>"+total.vitamin+"</td>"
  temp_div += "</tr>";
  
  temp_div += "<tr>";
  temp_div +=          
  '<td colspan="5" style="background: #FFEA00;">Tỉ lệ phần trăm năng lượng trong 1 ngày</td>'        
  +"<td style='background: #F48120'>"+percents.dam+"%</td>"
  +"<td style='background: #F48120'>"+percents.duong+"%</td>"
  +"<td style='background: #F48120'>"+percents.beo+"%</td>"
  //+"<td></td>"        
  temp_div += "</tr>";
  
  //temp_div += "<tr><td colspan='5' style='background: #FFEA00;'>Kết quả đo lực kéo</td><td id='td-pull' style='background: #F48120'>"+total.pull
  //+"</td>"
  //+"<td></td><td></td><td></td>"
  //+"</tr>"
  
  $(".table tbody").html(temp_div);
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

    $('#container-dd').highcharts({

        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            },
            marginTop: 80,
            marginRight: 40
        },

        title: {
            text: 'PHÂN TÍCH THÀNH PHẦN DINH DƯỠNG'
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
            stack: '1'
        }, {
            name: 'Thiếu',
            data: [enGraphData[1], damGraphData[1], duongGraphData[1], beoGraphData[1]],
            stack: '1'
        }, {
            name: 'Thực tế',
            data: [enGraphData[0], damGraphData[0], duongGraphData[0], beoGraphData[0]],
            stack: '1'
        }]
    });
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
    var weaks_female = [11.8,14.6,15.5,17.2,19.2,21.5,25.6,21.5,20.3,18.9,18.6,18.1,17.7,17.2,15.4,14.7];
    var strongs_female = [21.6,24.4,27.3,29.0,31.0,35.3,41.4,35.3,34.1,32.7,32.4,31.9,31.5,31.0,27.2,24.5];


    var strongs = [];          
    var weaks = [];
    
    if (user.sex == '0') {
      strongs = strongs_male;
      weaks = weaks_male;
    }else if (user.sex == '1') {
      strongs = strongs_female;
      weaks = weaks_female;
    }
    

    $('#container-pull').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'PHÂN TÍCH LỰC KÉO'
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
            crosshairs: true,
            shared: true
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
            data: strongs_male

        },{
            name: 'Yếu',
            marker: {
                symbol: 'diamond'
            },
            data: weaks_male
        }, {
            name: 'Bạn',
            marker: {
                symbol: 'diamond'
            },
            data: user_pulls
        }]
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
}

function putData2Input(data){
  
  //$( "#tags" ).val( data.name );
  $( "#input-name" ).val( data.name );
  $( "#input-address" ).val( data.address );
  $( "#input-phone" ).val( data.phone );
  $( "#input-age" ).val( data.age );
  
  $('input:radio[name=sex][value='+data.sex+']').click();
  $('input:radio[name=type-work][value='+data.typework+']').click();
  
  user.name = data.name;
  user.address = data.address;
  user.phone = data.phone;
  user.sex = data.sex;
  user.age = data.age;
  user.typework = data.typework;

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