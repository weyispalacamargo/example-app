import '../css/app.css';

const Queda_Desnivel = () => {
    return (
        <div>
            <div>
                <p>QUEDA / DESNÍVEL</p>
                <p>Medida em metros</p>
            </div>
            <p><input type="range" id="range_m" min="15" max="75"></input></p>
            <div className="medida_m">
                <div>15 metros</div>
                <div>70 metros</div>
            </div>
        </div>
    )
}

export default Queda_Desnivel;
