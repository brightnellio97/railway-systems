<?php
if (isset($_POST['Book'])) {
    function validate($data)
    {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // getting user input and validating
    $train = validate($_POST['train']);
    $customer = validate($_POST['customer']);
    $station = validate($_POST['station']);
    $booking= validate($_POST['booking']);
    $employees = validate($_POST['employees']);
    $ticket= validate($_POST['ticket']);
    $payment = validate($_POST['Train_number']);

    //print_r($_POST);
} ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>   
<body>
<?php
require 'database_credentials.php';
// connect to database
$conn = new mysqli("localhost", "root", "", "railway");

//checking if a passenger has alreeady booked and inserting user input to database
$check_email = mysqli_query(
    $conn, 
    "SELECT  * FROM booking where customer = '$passenger_n'  AND Train_Number = '$Train_Number'   AND email = '$email'"
);
// var_dump($check_email);
if (mysqli_num_rows($check_email) > 0) {
    echo "<script LANGUAGE='JavaScript'>
    window.alert('You are already a passenger of $Train_number');
    window.location.href='Services.html';
    </script>";
} else {
    $sql = "INSERT INTO passenger_booking_details(fname, lname, email, passenger_on, gender,ways, Train_name) Values('$fname','$lname','$email','$passenger_no','$gender','$ways','$Train_number')";
    $results = mysqli_query($conn, $sql);
    if ($results) {
        echo "<script LANGUAGE='JavaScript'>
        window.alert('You have successfully signed up to $Train_number');
        window.location.href='Services.html';
        </script>";
    }
}
?>
 
 
    
</body>
</html>