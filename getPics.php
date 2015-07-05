<?php
//header('Content-type:text/html;charset="utf-8"');

$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;

//使用代理的方式请求资源

$url = 'http://www.wookmark.com/api/json/popular?page=' . $cpage;

$content = file_get_contents($url);


echo $content;

?>