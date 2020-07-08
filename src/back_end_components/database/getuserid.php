<?php
    header('Access-Control-Allow-Origin: *');
    function getUserID($db, $email){
        $sql_command = "SELECT ID FROM user WHERE email = '" . $email . "';";
        
        $ret = $db->query($sql_command);
        
        // No result, new user
        if($ret -> fetchArray(SQLITE3_ASSOC) == false){
            $id = addNewUser($db, $email);
            echo $id;
        }
        
        else{
            $ret -> reset();
            while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
                echo $row['ID'];
            }
        }        
    }


    function addNewUser($db, $email){
        $name = $_GET["name"];
        
        $get_max_id_command = "SELECT MAX(ID) AS max FROM user;";
        
        $ret = $db -> query($get_max_id_command);
        
        while($row = $ret -> fetchArray(SQLITE3_ASSOC)){
            $max_id = $row['max'];
        }
        
        $insert_command = "INSERT INTO user (ID, name, email) VALUES(" . ($max_id + 1) . ", '" . $name . "', '" . $email . "');";

        
        $db -> exec($insert_command);
        
        return $max_id + 1;
    }

    $email = $_GET["email"];
    

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
    

    getUserID($db, $email);

?>
