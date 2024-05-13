import React from 'react';

function SelecionarPersonalidade({ nome, options, value, onChange }) {
    return (
        <div>
            <label>{nome}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.nome}</option>
                ))}
            </select>
        </div>
    );
}

export default SelecionarPersonalidade;