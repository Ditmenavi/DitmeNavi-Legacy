<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gửi văn mẫu</title>
    <style>
        :root{
            --bg: #181818;
            --text: #ffffff;
        }
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
        }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .container{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--bg);
        }
        .items{
            color: var(--text);
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
        h2{
            font-weight: 800;
            font-size: 25px;
            margin-bottom: 0px;
        }
        p{
            font-weight: 400;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="items">
            <?php
    // $firstname = filter_input(INPUT_POST, 'firstname');
    // $lastname = filter_input(INPUT_POST, 'lastname');
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $lastname2 = "";
    $category = $_POST['category'];
    $host = "localhost";
    $dbusername = "ditmenav_copypastaManager";
    $dbuserpass = "Laggy12200409!";
    $dbname = "ditmenav_copypasta";

    //db connect
    $conn = new mysqli($host, $dbusername, $dbuserpass, $dbname);
    if(mysqli_connect_error()){
        die('Connect error ('. mysqli_connect_errno().') '
            . mysqli_connect_error());
    } else {
        $conn->set_charset('utf8mb4');
        $lastname2 = mysqli_real_escape_string($conn, $lastname);
        $sql = "INSERT INTO Copypasta (Id, Timestamp, Name, Content, Category) VALUES (NULL, CURRENT_TIMESTAMP, '$firstname', '$lastname2', '$category') ";
        if($conn->query($sql)) {
            echo '
            <div class="col1">
                <img src="30-43-64.png" alt="" class="logo">
            </div>
            <div class="col2">
                <h2>Gửi thành công!</h2>
                <p>Quay về trang trước sau 3 giây...</p>
            </div>
            <script>
                setTimeout(function() {
                    history.back();
                }, 3000);
            </script>
            ';
        } else {
            echo '
            <div class="col1">
                <img src="30-43-64.png" alt="" class="logo">
            </div>
            <div class="col2">
                <h2>Gửi thất bại...</h2>
                <p>Đã xảy ra lỗi khi đang quan hệ với mẫu thân của bạn.</p>
                <p>Quay về trang trước sau 3 giây...</p>
            </div>
            <script>
                setTimeout(function() {
                    history.back();
                }, 3000);
            </script>
            ';
        };
        $conn->close();
    }
            ?>
        </div>
    </div>
</body>
</html>