<?php
// api/check_auth.php

session_start();
header("Content-Type: application/json; charset=UTF-8");

if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    echo json_encode(["authenticated" => true, "user" => $_SESSION['admin_user']]);
} else {
    echo json_encode(["authenticated" => false]);
}
?>