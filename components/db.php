<?
function pdo() {
   $host="localhost";
   $dbname="portfoliio";
   $dbuser="root";
   $pass="root";
   
   return new PDO("mysql:host=$host;dbname=$dbname", $dbuser, $pass);
}
function user ($name,$number,$selection,$date,$commen) {
$pdo=pdo();
$query="INSERT INTO `users`( name, number, selection, date, commen) VALUES (?,?,?,?,?)";
$driver= $pdo->prepare($query);
$result=$driver->execute([$name,$number,$selection,$date,$commen]);
}
var_dump(user("dfsd","8","s","56","cfdfdfsfssd"));



