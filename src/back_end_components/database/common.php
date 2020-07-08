<?php
    header('Access-Control-Allow-Origin: *');
    function getDB(){
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
        return $db;
    }

//    getUserInfoByID(id): return name and email
//    getUserIDByName(Name): return ID
//    getPassInfo(id): return id, seller_id, seller_name, seller_email, price, class, game
    function getUserInfoByID(){
        $id = $_GET["id"];
        
        $db = getDB();
        $sql_command = "SELECT name, email FROM user WHERE id = " . $id . ";";
        $ret = $db->query($sql_command);
        
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            echo $row['NAME'] . "," . $row['EMAIL'];
        }
    }
    function getUserIDByName(){
        $name = $_GET["name"];
        
        $db = getDB();
        $sql_command = "SELECT id FROM user WHERE lower(name) = '" . strtolower($name) . "';";
        $ret = $db->query($sql_command);
        
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            echo $row['ID'];
        }
    }
    function getPassInfo(){
        $id = $_GET["id"];
        
        $db = getDB();
        $sql_command = "SELECT * FROM pass WHERE id = " . $id . ";";
        
        $ret = $db->query($sql_command);
        
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            echo $row['id'] . "," . $row['seller_id'] . "," . $row['seller_name'] . "," . $row['seller_email'] . "," . $row['price'] . "," . $row['class'] . "," . $row['game'];
        }
    }
    
    $type = $_GET["type"];

    if($type == 1){getUserInfoByID();}
    else if($type == 2){getUserIDByName();}
    else getPassInfo();
?>
