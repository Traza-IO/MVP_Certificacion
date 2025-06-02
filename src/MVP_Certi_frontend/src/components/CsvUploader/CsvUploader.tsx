import { useState } from 'react';
import Papa, { ParseResult } from 'papaparse';

// Define el tipo de cada fila del CSV
type CsvRow = {
  name: string;
  email: string;
  age: string; // o number, si usas dynamicTyping
};

function CsvUploader() {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse<CsvRow>(file, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false, // si quieres convertir automáticamente a number pon true
        complete: function (results: ParseResult<CsvRow>) {
          console.log('Resultados:', results.data);
          setCsvData(results.data);
        },
        error: function (error: Error) {
          console.error('Error al parsear CSV:', error);
        }
      });
    }
  };

  return (
    <div>
      <h2>Subir CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      
      {csvData.length > 0 && (
        <div>
          <h3>Datos capturados:</h3>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CsvUploader;
