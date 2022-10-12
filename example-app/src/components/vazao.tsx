import '../css/app.css';

const Vazao = () => {
    return (
        <div>
            <div>
                <p>Vazão</p>
                <p>Medida em litros / segundo</p>
            </div>
            <p><input type="range" id="range_l" min="0" max="300"></input></p>
            <div className="medida_l">
                <div>0 litros</div>
                <div>300 litros</div>
            </div>
        </div>
    )
}

export default Vazao;
