<?php
include("./config.php");

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "select * from user where username='$username' and password='$password'";

$res = mysql_query($sql);

$row = mysql_num_rows($res);//返回结果集中行的数目

if($row > 0) {
  echo json_encode(array(
    "res_code" => 1,
    "res_message" => "登录成功"
  ));
}else{
  echo json_encode(array(
    "res_code" => 0,
    "res_message" => "用户名或密码错误"
  ));
}

?>