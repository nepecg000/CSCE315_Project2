<?php
    header('Access-Control-Allow-Origin: *');
    function addPass($db, $new_pass_id, $name, $email, $price, $class, $game, $han){
        $sql_command = "INSERT INTO pass(id, seller_name, seller_email, price, class, game, handicapped) VALUES(" . $new_pass_id . ", '" . $name . "', '" . $email . "', " . $price . ", '" . $class . "', '" . $game . "', " . $han . ");";
        
        $ret = $db->exec($sql_command);
    }


    function getMaxID($db){
        $name = $_GET["name"];
        
        $get_max_id_command = "SELECT MAX(ID) AS max FROM pass;";
        
        $ret = $db -> query($get_max_id_command);
        
        while($row = $ret -> fetchArray(SQLITE3_ASSOC)){
            $max_id = $row['max'];
        }
        
        return $max_id + 1;
    }
    
    $name = $_GET["name"];
    $email = $_GET["email"];
    $price = $_GET["price"];
    $class = $_GET["class"];
    $game = $_GET["game"];
    $handicapped = $_GET["handicapped"];

    class MyDB extends SQLite3
    {
      function __construct()
      {
         $this->open('aggiepass.db');
      }
    }
    
    $db = new MyDB();
    if(!$db){
      echo $db->lastErrorMsg();
    }
    
    $new_pass_id = getMaxID($db);

    if($handicapped == "false"){
        $han = 0;
    }
    else{
        $han = 1;
    }



    addPass($db, $new_pass_id, $name, $email, $price, $class, $game, $han);

    echo $new_pass_id;
?>
