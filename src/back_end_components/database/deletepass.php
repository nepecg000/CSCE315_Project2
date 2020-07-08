<?php
    header('Access-Control-Allow-Origin: *');
    function deletePass($db, $pass_id){
        $sql_command = "DELETE FROM pass where id = " . $pass_id . ";";
        echo $sql_command;
        $ret = $db->exec($sql_command);
    }


    
    $pass_id = $_GET["pass_id"];

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
    

    deletePass($db, $pass_id);

?>
