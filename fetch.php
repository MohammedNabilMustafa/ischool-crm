
<?php

// get_header();
header("Access-Control-Allow-Origin: *");

//local
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ischool";
// $dbname = "havy_test";

//public
// $servername = "localhost";
// $username = "ischool4_admin";
// $password = "123456";
// $dbname = "ischool4_operation";


if (isset($_POST["status"])){

  // echo 'here';

        if($_POST["status"] == "Getall")
        {
            get_all_users($servername , $username , $password , $dbname , $_POST["table"]);
        }
        else if($_POST["status"] == "Add")
        {
            $Data_rows = array();
            $x = 0;

            foreach ($_POST["cols_data"] as $key => $value) {
              $Data_rows[$x] = $value;
              $x++;
          }

          add_row($servername , $username , $password , $dbname , $Data_rows , $_POST["table"]  , $_POST["cols"]);
        }
        else if($_POST["status"] == "Delete")
        {
            delete_row($servername , $username , $password , $dbname  , $_POST["table"] , $_POST["index_counter"]  );
        }
        else if($_POST["status"] == "Getoneuser")
        {
            get_one_users($servername , $username , $password , $dbname  , $_POST["table"] , $_POST["index_counter"]  );
        }
        else if($_POST["status"] == "Update")
        {
            update_row($servername , $username , $password , $dbname  , $_POST["table"] , $_POST["index_counter"] , $_POST["cols_data"]);
        }
        else if($_POST["status"] == "GetJoin")
        {
            get_join_table($servername , $username , $password , $dbname );
        }


}

function get_all_users($servername , $username , $password , $dbname ,  $tableName )
{

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM $tableName";

$result = $conn->query($sql);
$no_data = "true";

if ($result->num_rows > 0) {
    // output data of each row


    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    
    echo json_encode($set);

} else {
    // $data_var = $no_data;
    echo json_encode($result->fetch_assoc() );
}

$conn->close();

}



function get_one_users($servername , $username , $password , $dbname, $tableName , $User_index )
{
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM $tableName WHERE id='$User_index' ";
        $result = $conn->query($sql);

        echo json_encode($result->fetch_assoc());

        $conn->close();
}

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

function Sql_values_update($Data_rows)
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

        $all_value = Sql_values_add($Data_rows);

        $sql = "INSERT INTO $tableName $Data_cols
        VALUES $all_value";

        if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
}

function delete_row($servername , $username , $password , $dbname , $tableName  , $row_index )
{
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to delete a record
$sql = "DELETE FROM $tableName  WHERE id='$row_index'";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
}


function update_row($servername , $username , $password , $dbname , $tableName  , $row_index , $Data_rows )
{
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE $tableName SET $Data_rows  WHERE id='$row_index'";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

}

function get_join_table($servername , $username , $password , $dbname  )
{
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT students.students_id , students.std_id , students.st_name , parent.id , parent.name , students.free_session_status , 
students.std_status , students.age , students.birthdate , employee.emp_name  FROM parent";

$sql = $sql." RIGHT JOIN students ON parent.id = students.parent_id";
$sql = $sql." RIGHT JOIN employee ON employee.employee_id = COALESCE(parent.customer_agent_id, 9) ";

// $sql = $sql." RIGHT JOIN att_feed ON students.students_id = att_feed.student_id";

// $sql = $sql." RIGHT JOIN sessions ON sessions.id = att_feed.session_id";
// $sql = $sql." RIGHT JOIN groups ON sessions.groups_id = groups.id";
// $sql = $sql." RIGHT JOIN level ON level.id = groups.level_id";

// echo $sql;

$result = $conn->query($sql);
$no_data = "true";

if ($result->num_rows > 0) {
    // output data of each row
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    
    echo json_encode($set);

} else {
    // $data_var = $no_data;
    echo json_encode($result->fetch_assoc() );
}


$conn->close();


}













?>

