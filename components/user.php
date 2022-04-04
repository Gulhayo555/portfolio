<?

include_once('./db.php');
$name=($_POST)['name'];
$number=($_POST)['number'];
$selection=($_POST)['selection'];
$date=($_POST)['date'];
$commen=($_POST)['commen'];

$user=user($name,$number,$selection,$date,$commen);
