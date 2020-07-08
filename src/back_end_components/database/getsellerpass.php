<?php
    header('Access-Control-Allow-Origin: *');
    function getSellerPass($db, $seller_email){
        $sql_command = "SELECT * FROM pass WHERE seller_email = '" . $seller_email . "';";
        
        $ret = $db->query($sql_command);
        
        // No result, this user doesn't have any tickets to sell
        if($ret -> fetchArray(SQLITE3_ASSOC) == false){}
        
        else{
            $ret -> reset();
            while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
                $ticket_id = $row['id'];
                $price = $row['price'];
                $class = $row['class'];
                $game = $row['game'];

                
                echo $ticket_id . "," . $price . "," . $class . "," . $game . "\n";
            }
        }        
    }


    

    $seller_email = $_GET["seller_email"];
    

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

    getSellerPass($db, $seller_email);

?>
