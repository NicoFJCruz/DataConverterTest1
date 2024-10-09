import React, { useState } from 'react';
import { Convertidor } from './utils/dateConverter';

function App() {
  const [year, setYear] = useState<number>(0);
  const [calendar, setCalendar] = useState<string>('Convenio');
  const [convertedYears, setConvertedYears] = useState<Record<string, string>>(
    {}
  );

  const calendarOrder = [
    { key: 'Convenio', name: 'Calendario del Convenio Galáctico' },
    { key: 'Sith', name: 'Calendario del Nuevo Imperio Sith' },
    { key: 'Yavin', name: 'Calendario de la Batalla de Yavin' },
    { key: 'Imperio', name: 'Calendario de la Formación del Imperio' },
    { key: 'Naboo', name: 'Calendario de Naboo' },
    { key: 'Ruusan', name: 'Calendario Reforma de Ruusan' },
    { key: 'Lothal', name: 'Calendario de Lothal' },
    { key: 'Kaas', name: 'Calendario Redescubrimiento de Kaas' },
    { key: 'Hosnian', name: 'Calendario de Recuento de Coruscant' },
    { key: 'Doman', name: 'Calendario Acuerdo de Domanción' },
  ];

  const handleConvert = () => {
    const result = Convertidor(year, calendar);
    setConvertedYears(result);
  };

  return (
    <div className="min-h-screen bg-black bg-[url('https://i.redd.it/dwrs5i2kvni71.jpg')] bg-cover bg-center bg-fixed  flex items-center justify-center p-4">
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-md text-gray-300 border border-yellow-600">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-500 uppercase tracking-wider font-star-wars">
          Conversor de Fechas Galácticas
        </h1>
        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium mb-1 text-yellow-500"
          >
            Año:
          </label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full px-3 py-2 bg-gray-800 border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="calendar"
            className="block text-sm font-medium mb-1 text-yellow-500"
          >
            Calendario:
          </label>
          <select
            id="calendar"
            value={calendar}
            onChange={(e) => setCalendar(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          >
            {calendarOrder.map(({ key, name }) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConvert}
          className="w-full bg-yellow-600 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors font-bold uppercase tracking-wider"
        >
          Convertir
        </button>
        {Object.keys(convertedYears).length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3 text-yellow-500">
              Resultados:
            </h2>
            <ul className="space-y-2">
              {calendarOrder.map(({ key, name }) => (
                <li key={key} className="flex justify-between">
                  <span className="font-medium text-yellow-500">{name}:</span>
                  <span className="text-gray-300">{convertedYears[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
