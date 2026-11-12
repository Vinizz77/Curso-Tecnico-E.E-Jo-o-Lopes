<div
    class="collapse mb-4"
    id="formCadastro"
>

    <div class="card card-body shadow-sm">

        <form
            action="acoes/cadastrar.php"
            method="POST"
            class="row g-3"
        >

            <div class="col-md-3">

                <label class="form-label">
                    Tipo
                </label>

                <select
                    name="tipo"
                    class="form-select"
                    required
                >

                    <option value="">
                        Selecione
                    </option>

                    <option value="carro">
                        Carro
                    </option>

                    <option value="moto">
                        Moto
                    </option>

                </select>

            </div>


            <div class="col-md-3">

                <label class="form-label">
                    Placa
                </label>

                <input
                    type="text"
                    name="placa"
                    class="form-control"
                    maxlength="10"
                    required
                >

            </div>


            <div class="col-md-4">

                <label class="form-label">
                    Modelo
                </label>

                <input
                    type="text"
                    name="modelo"
                    class="form-control"
                    maxlength="100"
                    required
                >

            </div>


            <div class="col-md-2 d-flex align-items-end">

                <button
                    type="submit"
                    class="btn btn-success w-100"
                >

                    <i class="bi bi-check-circle"></i>

                    Salvar

                </button>

            </div>

        </form>

    </div>

</div>