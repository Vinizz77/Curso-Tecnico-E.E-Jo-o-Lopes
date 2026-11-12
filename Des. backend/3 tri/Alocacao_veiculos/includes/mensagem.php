<?php

$msg = $_GET['msg'] ?? null;
$tipo = $_GET['tipo'] ?? 'success';

if ($msg):

?>

<div
    class="alert alert-<?= htmlspecialchars($tipo) ?>
           alert-dismissible fade show"
    role="alert"
>

    <?= htmlspecialchars($msg) ?>

    <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
    ></button>

</div>

<?php endif; ?>