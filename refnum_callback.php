
<?php

// get_header();
header("Access-Control-Allow-Origin: *");

//local
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "ischool";

//public
$servername = "localhost";
$username = "ischool4_admin";
$password = "123456";
$dbname = "ischool4_operation";

// {
//     "type": "ChargeResponse",
//     "referenceNumber": "963455678",
//     "merchantRefNumber": "9990d0642040",
//     "orderAmount": 20.00,
//     "paymentAmount": 20.00,
//     "fawryFees": 1.00,
//     "paymentMethod": "PayAtFawry",
//     "orderStatus": "PAID",
//     "paymentTime": 1607879720568,
//     "customerMobile": "01234567891",
//     "customerMail": "example@gmail.com",
//     "customerProfileId": "1212",
//     "signature": "b0ef178e2f06b215b18cfc7d82fb5d1f7b95dfcc91e33f8a6ce1e1251fdd04ec",
//     "statusCode": 200,
//     "statusDescription": "Operation done successfully"
// }

function Sql_values_add($Data_rows)
{
  $all_value  = "(";

  $index_end = sizeof($Data_rows);

  for($x = 0 ; $x < $index_end ; $x++)
  {
    if($x == ($index_end - 1) ){$all_value  .=   "'" . $Data_rows[$x] ."'";}
    else{$all_value  .=   "'" . $Data_rows[$x] ."',";}
  }
  $all_value  .=  ")";
  return $all_value;
}

function add_row($servername , $username , $password , $dbname  , $Data_rows , $tableName , $Data_cols )
{

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }

        // $all_value = Sql_values_add($Data_rows);

        $sql = "INSERT INTO $tableName $Data_cols
        VALUES $Data_rows";

        if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
}

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

// var_dump($input);

if (isset($input["orderStatus"]) && isset($input["statusCode"])  ){

    $referenceNubmer = $input["referenceNumber"];
    $merchantRefNumber = $input["merchantRefNumber"];
    $paymentMethod = $input["paymentMethod"];
    $orderStatus = $input["orderStatus"];
    $statusCode = $input["statusCode"];


    

    // ['referenceNubmer'=>$referenceNubmer , 'merchantRefNumber'=>$merchantRefNumber , 'orderStatus'=>$orderStatus , 'statusCode'=>$statusCode]

    add_row($servername , $username , $password , $dbname , 
      "('$referenceNubmer','$merchantRefNumber','$orderStatus','$statusCode' , '$input')"
    , "fawry_feedback"  
    ,"(referenceNubmer,merchantRefNumber,orderStatus,statusCode,paymentMethod)");

}














?>

