<?php
    header('Access-Control-Allow-Origin: *');
    function updatePass($db, $pass_id, $price, $class, $game){
        $sql_command = "UPDATE pass SET price = " . $price . ", class = '" . $class . "', game = '" . $game . "' WHERE id = " . $pass_id . ";";
        
        $ret = $db->exec($sql_command);
        
    }


    
    $pass_id = $_GET["pass_id"];
    $price = $_GET["price"];
    $class = $_GET["class"];
    $game = $_GET["game"];

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
    

    updatePass($db, $pass_id, $price, $class, $game);

//    echo $new_pass_id;
?>
