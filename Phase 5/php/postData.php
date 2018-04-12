<?php
 header("Content-Type: application/json");
     $data = json_decode(stripslashes(file_get_contents("php://input")));
     $conn = new mysqli("localhost", "root", "", "assign_data");
     $a1 = urldecode($data->name);
     $a2 = urldecode($data->clname);
     $a3 = urldecode($data->cfname);
     $a4 = urldecode($data->number);
     $a5 = urldecode($data->addressl1);
     $a6 = urldecode($data->addressl2);
     $a7 = urldecode($data->city);
     $a8 = urldecode($data->state);
     $a9 = urldecode($data->postalcode);
     $a10 = urldecode($data->country);
     $a11 = urldecode($data->salesrepnumber);
     $a12 = urldecode($data->creditlimit);
     $result = $conn->query("INSERT INTO customers (customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) VALUES ('$a1', '$a2', '$a3', '$a4', '$a5', '$a6', '$a7', '$a8', '$a9', '$a10', '$a11', '$a12')");
     if($result)
        {
        echo "Data Entered Successfully";

        }
        else
        {
        echo "Error Occured While Entering Data Please Try Again!";

        }
?>