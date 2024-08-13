<?php
include 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $is_visible = $_POST['is_visible'];
    $description = $_POST['description'];
    $timer = $_POST['timer'];
    $link = $_POST['link'];

    $sql = "UPDATE banners SET is_visible = ?, description = ?, timer = ?, link = ? WHERE id = 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$is_visible, $description, $timer, $link]);
}
