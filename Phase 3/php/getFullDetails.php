<?php
header("Content-Type: application/json; charset=UTF-8");
$customerNumber = $_GET['customerid'];
     $conn = new mysqli("localhost", "root", "", "assign_data");
     $result = $conn->query("SELECT * FROM customers WHERE customerNumber = $customerNumber ");
     $outp = array();
     $outp = $result->fetch_all(MYSQLI_ASSOC);
     echo json_encode($outp);

?>