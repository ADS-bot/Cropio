<?php
$servername="localhost";
$username="root";
$password="";
$database="cropiodatabase";
$con=mysqli_connect($servername,$username,$password,$database);
if(!$con){
    die("Error Detected".mysqli_error($con));
}
?>