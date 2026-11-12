<?php

require 'config.php';
require 'funcoes.php';

$veiculos = listarVeiculos($pdo);

require 'includes/header.php';
require 'includes/mensagem.php';

?>


<div class="d-flex justify-content-between align-items-center mb-4">

    <h2>
        <i class="bi bi-car-front-fill"></i>
        Painel de Veículos
    </h2>

    <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#formCadastro"
    >
        <i class="bi bi-plus-circle"></i>
        Novo Veículo
    </button>

</div>


<?php require 'includes/form-cadastro.php'; ?>


<div class="row">

    <?php foreach ($veiculos as $v): ?>

        <?php require 'includes/card-veiculo.php'; ?>

    <?php endforeach; ?>


    <?php if (empty($veiculos)): ?>

        <div class="col-12">

            <div class="alert alert-info">

                <i class="bi bi-info-circle"></i>

                Nenhum veículo cadastrado.

            </div>

        </div>

    <?php endif; ?>

</div>


<?php require 'includes/footer.php'; ?>