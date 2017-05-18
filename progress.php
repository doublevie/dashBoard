$remote = fopen('remote-file', 'r');
$local = fopen('local-file', 'w');

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
