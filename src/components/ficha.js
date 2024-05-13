import React, { useState } from 'react';
import CampoTexto from './campoTexto';
import SelecionarChassi from './selecionarChassi';
import SelecionarPersonalidade from './selecionarPersonalidade';
import SelecionarTipo from './selecionarTipo';
import { Chassis } from '../data/chassis';
import { Tipos } from '../data/tipos';
import { Personalidades } from '../data/personalidades';

function Ficha() {
    const [nome, setNome] = useState('');
    const [chassi, setChassi] = useState('');
    const [tipo, setTipo] = useState('');
    const [personalidade, setPersonalidade] = useState('');

    // Função para definir os valores dos campos numéricos com base no chassi selecionado
    const definirValoresDoChassi = (chassiSelecionado) => {
        // Encontra o chassi correspondente ao valor selecionado
        const chassiAtual = Chassis.find(chassi => chassi.value === chassiSelecionado);
        
        // Se o chassi correspondente for encontrado, retorna os valores dos atributos
        if (chassiAtual) {
            return {
                durabilidade: chassiAtual.durabilidade,
                dano: chassiAtual.dano,
                mira: chassiAtual.mira,
                velocidade: chassiAtual.velocidade,
                carapaca: chassiAtual.carapaca,
                bateria: chassiAtual.bateria
            };
        } else {
            // Se nenhum chassi correspondente for encontrado, retorna valores padrão (0)
            return {
                durabilidade: 0,
                dano: 0,
                mira: 0,
                velocidade: 0,
                carapaca: 0,
                bateria: 0
            };
        }
    };

    const [valoresCamposNumericos, setValoresCamposNumericos] = useState({
        durabilidade: 0,
        dano: 0,
        mira: 0,
        velocidade: 0,
        carapaca: 0,
        bateria: 0
    });

    const handleChassiChange = (novoChassi) => {
        setChassi(novoChassi);
        const valoresAtualizados = definirValoresDoChassi(novoChassi);
        setValoresCamposNumericos(valoresAtualizados);
    };

    return (
        <div>
            <h2>Ficha de Cria</h2>
            <CampoTexto label="Nome:" value={nome} onChange={setNome} />
            <SelecionarChassi label="Chassi:" options={Chassis} value={chassi} onChange={handleChassiChange} />
            <SelecionarTipo label="Tipo:" options={Tipos} value={tipo} onChange={setTipo} />
            <SelecionarPersonalidade label="Personalidade:" options={Personalidades} value={personalidade} onChange={setPersonalidade} />
            <div>
                <label>Durabilidade:</label>
                <input type="number" value={valoresCamposNumericos.durabilidade} readOnly />
            </div>
            <div>
                <label>Dano:</label>
                <input type="number" value={valoresCamposNumericos.dano} readOnly />
            </div>
            <div>
                <label>Mira:</label>
                <input type="number" value={valoresCamposNumericos.mira} readOnly />
            </div>
            <div>
                <label>Velocidade:</label>
                <input type="number" value={valoresCamposNumericos.velocidade} readOnly />
            </div>
            <div>
                <label>Carapaça:</label>
                <input type="number" value={valoresCamposNumericos.carapaca} readOnly />
            </div>
            <div>
                <label>Bateria:</label>
                <input type="number" value={valoresCamposNumericos.bateria} readOnly />
            </div>
        </div>
    );
}

export default Ficha;
