<?php
header('Content-Type: application/json');

// Verificar si es una petición POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $interes = $_POST['interes'] ?? '';

    // Configurar el correo
    $to = "tu_correo@ejemplo.com"; // Reemplaza con tu correo
    $subject = "Nuevo contacto de Alcalde Mil";
    
    // Crear el mensaje
    $message = "Nuevo contacto desde el sitio web:\n\n";
    $message .= "Nombre: " . $nombre . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Teléfono: " . $telefono . "\n";
    $message .= "Interés: " . $interes . "\n";

    // Cabeceras del correo
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Intentar enviar el correo
    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Correo enviado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?> 