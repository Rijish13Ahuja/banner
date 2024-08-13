<?php
include 'database.php';

$sql = "SELECT * FROM banners WHERE id = 1";
$stmt = $pdo->query($sql);
$banner = $stmt->fetch(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($banner);
