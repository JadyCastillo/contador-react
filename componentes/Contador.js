const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);
    return (
        <div>
            <div id="contador" className={contador <= 0 ? "red" : "green"}>
                {contador}
            </div>
            <hr />
            <div class="flexStyle">
                <button id="btn1" onClick={aumentar}>
                    <i class="fas fa-plus"></i>
                </button>
                <button id="btn2" onClick={disminuir}>
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
    );
};
