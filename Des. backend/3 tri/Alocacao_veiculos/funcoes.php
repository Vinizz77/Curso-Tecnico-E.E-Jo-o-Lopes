<?php

function listarVeiculos(PDO $pdo): array
{
    $sql = "
        SELECT *
        FROM veiculos
        ORDER BY tipo, placa
    ";

    return $pdo->query($sql)->fetchAll();
}


function buscarVeiculo(PDO $pdo, int $id): ?array
{
    $stmt = $pdo->prepare("
        SELECT *
        FROM veiculos
        WHERE id = ?
    ");

    $stmt->execute([$id]);

    $veiculo = $stmt->fetch();

    return $veiculo ?: null;
}


function cadastrarVeiculo(
    PDO $pdo,
    string $tipo,
    string $placa,
    string $modelo
): bool {

    $stmt = $pdo->prepare("
        INSERT INTO veiculos
            (tipo, placa, modelo)
        VALUES
            (?, ?, ?)
    ");

    return $stmt->execute([
        $tipo,
        $placa,
        $modelo
    ]);
}


function excluirVeiculo(
    PDO $pdo,
    int $id
): bool {

    $stmt = $pdo->prepare("
        DELETE FROM veiculos
        WHERE id = ?
    ");

    return $stmt->execute([$id]);
}


function alterarStatusVeiculo(
    PDO $pdo,
    int $id,
    string $status
): bool {

    $stmt = $pdo->prepare("
        UPDATE veiculos
        SET status = ?
        WHERE id = ?
    ");

    return $stmt->execute([
        $status,
        $id
    ]);
}


function criarAlocacao(
    PDO $pdo,
    int $veiculoId,
    string $responsavel,
    string $observacao
): bool {

    $stmt = $pdo->prepare("
        INSERT INTO alocacoes
            (
                veiculo_id,
                responsavel,
                data_saida,
                observacao
            )
        VALUES
            (?, ?, NOW(), ?)
    ");

    return $stmt->execute([
        $veiculoId,
        $responsavel,
        $observacao ?: null
    ]);
}


function devolverVeiculo(
    PDO $pdo,
    int $veiculoId
): bool {

    $stmt = $pdo->prepare("
        UPDATE alocacoes
        SET data_devolucao = NOW()
        WHERE veiculo_id = ?
        AND data_devolucao IS NULL
    ");

    return $stmt->execute([
        $veiculoId
    ]);
}


function possuiAlocacaoAberta(
    PDO $pdo,
    int $veiculoId
): bool {

    $stmt = $pdo->prepare("
        SELECT id
        FROM alocacoes
        WHERE veiculo_id = ?
        AND data_devolucao IS NULL
        LIMIT 1
    ");

    $stmt->execute([
        $veiculoId
    ]);

    return (bool) $stmt->fetch();
}


function listarHistorico(PDO $pdo): array
{
    $sql = "
        SELECT
            a.*,
            v.tipo,
            v.placa,
            v.modelo
        FROM alocacoes a
        INNER JOIN veiculos v
            ON v.id = a.veiculo_id
        ORDER BY a.data_saida DESC
    ";

    return $pdo->query($sql)->fetchAll();
}


function redirecionar(
    string $mensagem,
    string $tipo = 'success',
    string $pagina = '../index.php'
): void {

    header(
        'Location: ' .
        $pagina .
        '?' .
        http_build_query([
            'msg' => $mensagem,
            'tipo' => $tipo
        ])
    );

    exit;
}