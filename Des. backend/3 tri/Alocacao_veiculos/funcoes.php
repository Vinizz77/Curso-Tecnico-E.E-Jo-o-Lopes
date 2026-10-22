<?php
    require_once 'config.php';
    function ListarVeiculos(PDO $pdo): array{
        $sql = "SELECT * FROM veiculos ORDER BY tipo, placa";
        return $pdo->query($sql)->fetchAll();
    }

    print_r(ListarVeiculos($pdo));

    function buscarVeiculo(PDO $pdo, int $id): ?array{
        $stmt = $pdo->prepare("SELECT *FROM veiculos where id = ?");
        $stmt->execute([$id]);
        $veiculo = $stmt->fetch();
        return $veiculo ?: null;
    }
    echo "<br>";
    print_r(buscarVeiculo($pdo,1));
?>