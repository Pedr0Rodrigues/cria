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

    const definirValoresDoChassi = (chassiSelecionado, personalidadeSelecionada) => {
        const chassiAtual = Chassis.find(chassi => chassi.value === chassiSelecionado);
        
        if (chassiAtual) {
            let valoresAtributos = {
                durabilidade: chassiAtual.durabilidade,
                dano: chassiAtual.dano,
                mira: chassiAtual.mira,
                velocidade: chassiAtual.velocidade,
                carapaca: chassiAtual.carapaca,
                bateria: chassiAtual.bateria
            };

            switch (personalidadeSelecionada) {
                case 'astuto':
                    valoresAtributos.mira += 1;
                    valoresAtributos.carapaca -= 1;
                    break;
                case 'bruto':
                    valoresAtributos.dano += 1;
                    valoresAtributos.mira -= 1;
                    break;
                case 'calmo':
                    valoresAtributos.bateria += 1;
                    valoresAtributos.velocidade -= 1;
                    break;
                case 'timido':
                    valoresAtributos.velocidade += 1;
                    valoresAtributos.dano -= 1;
                    break;
                case 'cuidadoso':
                    valoresAtributos.carapaca += 1;
                    valoresAtributos.durabilidade -= 1;
                    break;
                default:
                    break;
            }

            return valoresAtributos;
        } else {
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
        const valoresAtualizados = definirValoresDoChassi(novoChassi, personalidade);
        setValoresCamposNumericos(valoresAtualizados);
    };

    const handlePersonalidadeChange = (novaPersonalidade) => {
        setPersonalidade(novaPersonalidade);
        const valoresAtualizados = definirValoresDoChassi(chassi, novaPersonalidade);
        setValoresCamposNumericos(valoresAtualizados);
    };

    return (
        <div>
            <h2>Ficha de Cria</h2>
            <CampoTexto label="Nome:" value={nome} onChange={setNome} />
            <SelecionarChassi label="Chassi:" options={[{ value: '', nome: '-- Selecione --' }, ...Chassis]} value={chassi} onChange={handleChassiChange} />
            <SelecionarTipo label="Tipo:" options={[{ value: '', nome: '-- Selecione --' }, ...Tipos]} value={tipo} onChange={setTipo} />
            <SelecionarPersonalidade label="Personalidade:" options={[{ value: '', nome: '-- Selecione --' }, ...Personalidades]} value={personalidade} onChange={handlePersonalidadeChange} />

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
