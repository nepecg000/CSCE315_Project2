<?php
    header('Access-Control-Allow-Origin: *');
    function filterPass($db, $price, $class, $game){
        $sql_command = "SELECT * FROM pass";

        $price_str = getPriceStr($price);
        $class_str = getClassStr($class);
        $game_str = getGameStr($game);

        if($price_str == ""){
            if($class_str == ""){
                if($game_str == ""){
                    // No filter, display all
                    $sql_command = $sql_command . ";";
                }
                else{
                    // SELECT * FROM pass WHERE lower(game) = 'alabama';
                    $sql_command = $sql_command . " WHERE " . $game_str . ";";
                }
            }
            else{
                // SELECT * FROM pass WHERE class in ('U3', 'U4')
                $sql_command = $sql_command . " WHERE " . $class_str;
                if($game_str == ""){
                    // SELECT * FROM pass WHERE class in ('U3', 'U4');
                    $sql_command = $sql_command . ";";
                }
                else{
                    // SELECT * FROM pass WHERE class in ('U3', 'U4') and lower(game) = 'alabama';
                    $sql_command = $sql_command . " and " . $game_str . ";";
                }
            }
        }
        else{
            // SELECT * FROM pass WHERE price < 50
            $sql_command = $sql_command . " WHERE " . $price_str;
            if($class_str == ""){
                if($game_str == ""){
                    // SELECT * FROM pass WHERE price < 50;
                    $sql_command = $sql_command . ";";
                }
                else{
                    // SELECT * FROM pass WHERE price < 50 and lower(game) = 'alabama';
                    $sql_command = $sql_command . " and " . $game_str . ";";
                }
            }
            else{
                // SELECT * FROM pass WHERE price < 50 and class in ('U3', 'U4')
                $sql_command = $sql_command . " and " . $class_str;
                if($game_str == ""){
                    // SELECT * FROM pass WHERE price < 50 and class in ('U3', 'U4');
                    $sql_command = $sql_command . ";";
                }
                else{
                    // SELECT * FROM pass WHERE price < 50 and class in ('U3', 'U4') and lower(game) = 'alabama';
                    $sql_command = $sql_command . " and " . $game_str . ";";
                }
            }
        }

        // echo $sql_command . "\n";

        $ret = $db->query($sql_command);

        // No result, this user doesn't have any tickets to sell
        if($ret -> fetchArray(SQLITE3_ASSOC) == false){}

        else{
            $ret -> reset();
            while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
                $ticket_id = $row['id'];
                $seller_name = $row['seller_name'];
                $seller_email = $row['seller_email'];
                $price = $row['price'];
                $class = $row['class'];
                $game = $row['game'];
                $handicapped = $row['handicapped'];


                echo $ticket_id . "," . $seller_name . "," . $seller_email . "," . $price . "," . $class . "," . $game . "," . $handicapped . "\n" ;
            }
        }
    }

    function getPriceStr($price){
        if($price == 0){
            return "";
        }
        else{
            return "price < " . $price;
        }
    }

    function getClassStr($class){
        if($class == ""){
            return "";
        }
        else if($class == "U1"){
            return "class in ('U1', 'U2', 'U3', 'U4')";
        }
        else if ($class == "U2"){
            return "class in ('U2', 'U3', 'U4')";
        }
        else if($class == "U3"){
            return "class in ('U3', 'U4')";
        }
        else{
            return "class in ('U4')";
        }
    }


    function getGameStr($game){
        if($game == ""){
            return "";
        }
        else{
            return "lower(game) = '" . strtolower($game) . "'";
        }
    }

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
      // echo $db->lastErrorMsg();
    }

     filterPass($db, $price, $class, $game);

    exit();

?>
