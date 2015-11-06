<?php 
$file = "urls.txt";
$current = $_POST[url] . "\n";
//$current = "test\n";
file_put_contents($file, $current, FILE_APPEND);


?>