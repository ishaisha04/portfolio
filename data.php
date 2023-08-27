<?php
$server="localhost";
$username="root";
$password="";

$con= mysqli_connect($server, $username, $password);

if(!$con){
    die("connection to this database failed due to".
    mysql_connect_error());
}
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$sql=INSERT INTO `contact_details` (`name`, `email`, `message`) VALUES ('$name', '$email', '$message');
echo $sql;
?>