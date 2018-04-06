<?php
     header("Content-Type: application/json; charset=UTF-8");
     
     $conn = new mysqli("localhost", "root", "", "assign_data");
     $result = $conn->query("SELECT customerNumber, customerName FROM customers");
     $outp = array();
     $outp = $result->fetch_all(MYSQLI_ASSOC);
     
     echo json_encode($outp);


?>