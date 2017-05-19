
<?php
error_reporting(E_ALL);

$link = "http://frequency-dz.com/api/em/updates/master/201.zip";
/*$remote = fopen($link, 'r');
$local = fopen('201.zip', 'w');

$read_bytes = 0;
while(!feof($remote)) {
  $buffer = fread($remote, 2048);
  fwrite($local, $buffer);

  $read_bytes += 2048;

  //Use $filesize as calculated earlier to get the progress percentage
  $progress = min(100, 100 * $read_bytes / $filesize);
   //you'll need some way to send $progress to the browser.
  //maybe save it to a file and then let an Ajax call check it?
}
fclose($remote);
fclose($local);

*/
$zip = new ZipArchive;
file_put_contents("Tmpfile.freq", fopen($link,'r'));
sleep(1);
$res = $zip->open('Tmpfile.freq');



if ($res === TRUE) {
  $zip->extractTo('./');
  $zip->close();
    echo 'OK';

} else {
  var_dump($res);
}

?>