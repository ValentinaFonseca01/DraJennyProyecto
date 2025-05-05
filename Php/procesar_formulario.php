<?php
if (
    isset($_POST['nombre']) &&
    isset($_POST['email']) &&
    isset($_POST['servicio']) &&
    isset($_POST['celular']) &&
    isset($_POST['mensaje'])
) {
    // Capturar datos
    $nombre = strip_tags($_POST['nombre']);
    $email = strip_tags($_POST['email']);
    $servicio = strip_tags($_POST['servicio']);
    $celular = strip_tags($_POST['celular']);
    $mensaje = strip_tags($_POST['mensaje']);

    // Crear línea para CSV
    $linea = [$nombre, $email, $servicio, $celular, $mensaje, date("Y-m-d H:i:s")];

    // Guardar en archivo CSV
    $archivo = fopen("datos_formulario.csv", "a");
    fputcsv($archivo, $linea);
    fclose($archivo);

    // Mensaje de confirmación
    echo "¡Gracias por contactarnos!";
} else {
    echo "Faltan datos del formulario.";
}
?>
