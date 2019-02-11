<?php
define("redirectURI", 'http://localhost/folder/index.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Expose-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://localhost:3000');
/*$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");
$servername = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, "project_new");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}*/



include('csv.php');
$csv=new csv();
if(isset($_POST['sub'])){
    //var_dump($_FILES['file']);
    $csv->import($_FILES['file']['tmp_name']);
}




?>























































<?php
//$payload = file_get_contents('php://input');
//$input = json_decode($payload, true);

//?
//$filename=$_FILES["file"]["name"];



/*if (isset($_FILES["file"]["name"])) {
     // echo 'Aya';
    if ( $_FILES["file"]["size"] > 0) {
        // echo 'hhhh';
       // $file = fopen($filename, "r");
         
       /* while (($getData = fgetcsv($file, 10000, ",")) !== false) {
           

            $sql = "INSERT into teacher(fname,mname,lname, id,subject,classid,phone,password ,address,DateBirth)
                   values ('" . $getData[0] . "','" . $getData[1] . "','" . $getData[2] . "','" . $getData[3] . "','" . $getData[4] . "','" . $getData[5] . "','" . $getData[6] . "','" . $getData[7] . "','" . $getData[8] . "','" . $getData[9] .  "')";
             
             echo $sql;
             if (mysqli_query($conn, $sql)) {
                 echo "Records added successfully.";
             } else {
                 echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
             }
        }*/

      //  fclose($file);
   // }
 

//}

    ////if (isset($_POST["Import"])) {

//$filename = $_FILES["file"]["tmp_name"];

/*$tmp_name=$input['file'];
//$filename = $_FILES[$tmp_name]["tmp_name"];

   if(isset($_REQUEST['formm'])){
    $filename = $_FILES[$tmp_name]["tmp_name"];

 
   */


?>
