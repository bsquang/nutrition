 <?php
include("connect.php");
ini_set('display_errors', 1);


function create_records($id, $data){
  
  $pull = $data['pull'];
  $energy = $data['nangluong'];
  $dam = $data['dam'];
  $duong = $data['duong'];
  $beo = $data['beo'];
  $vitamin = $data['vitamin'];
  $date_created = $data['date_created'];
  
  $result = mysql_query("SELECT * FROM `records` WHERE `date_created` LIKE '$date_created' AND `customer_id` = '$id'");
  $result = mysql_fetch_array($result);
  
  if($result['0'] != ''){
      
    
    
  }else{
    
    $tv = "
  
    INSERT INTO `records` (`id`, `customer_id`, `energy`, `dam`, `duong`, `beo`, `vitamin`, `pull`, `date_created`, `visible`)
    VALUES (NULL, '$id', '$energy', '$dam', '$duong', '$beo', '$vitamin', '$pull', '$date_created', '1');
      
    ";
    
    $tv_temp = mysql_query($tv);
    if($tv_temp){
      //$id_temp = mysql_insert_id();
      //echo "Records : ".$id_temp." added!";
    }
    
  }
  
  
}


if(isset($_GET['action'])){
  
  if($_GET['action'] == "sync"){
    
    $temp = array();
    
    $tv = "SELECT * FROM `customers`";
    $tv1 = mysql_query($tv);
    while($row = mysql_fetch_array($tv1))
    {
        $tempJSON = array();
        
        $tempJSON['name'] = $row['name'];
        $tempJSON['age'] = $row['age'];
        $tempJSON['sex'] = $row['sex'];
        $tempJSON['address'] = $row['address'];
        $tempJSON['phone'] = $row['phone'];
        $tempJSON['typework'] = $row['typework'];
        
        array_push($temp,$tempJSON);
    }
   die(json_encode($temp));
    
  }
}


if(isset($_POST['action'])){
   
  if($_POST['action'] == "sync"){
   
    $data = $_POST['data'];
    
    print_r($data);
    
    $temp = json_decode($data, true);
    
    for($i=0;$i<count($temp);$i++){
      
      $obj = $temp[$i];
      
      $data_record = $obj['record'];
      $data_user = $obj['customer'];
      $phone = $data_user['phone'];
      
      
      $result = mysql_query("SELECT * FROM `customers` WHERE `phone` LIKE '$phone'");
      $result = mysql_fetch_array($result);
      
      if($result['0'] != ''){
          
        create_records($result['id'],$data_record);
        
      }else{
        
        $name =  $data_user['name'];  
        $address =  $data_user['address'];
        
        $sex = $data_user['sex'];
        $age = $data_user['age'];
        $typework = $data_user['typework'];
        
        $date_created = $data_user['date_created'];
        
        $tv = "
        INSERT INTO `customers` (`id`, `name`, `address`, `phone`, `sex`, `age`, `typework`, `date_created`)
        VALUES (NULL, '$name', '$address', '$phone', '$sex', '$age', '$typework', '$date_created');
        ";
        
        $tv_temp = mysql_query($tv);
        if($tv_temp){
          $id_temp = mysql_insert_id();
          
          //echo "Customers : ".$id_temp." added!";
          create_records($id_temp, $data_record);
        }
      }
      
      
    }
    
    $temp_result = array();
    $temp_result['result'] = 1;      
    
    die(json_encode($temp_result));
   
    
    //$description = htmlentities($_POST['description']);
    //$description = htmlspecialchars($description);
    //      
    //$temp = array();
    //
    //$tv = "UPDATE `product` SET `name`='$name',`price`='$price',`thumb`='$thumb',`description`='$description',`link`='$link',`content`='$content'  WHERE  `ID`='$id'";
    //
    //if(mysql_query($tv)){
    //    $temp['result'] = 1;
    //}else{
    //    $temp['result'] = 0;
    //}
    
    //die(json_encode($temp));
  }
   
}

?>