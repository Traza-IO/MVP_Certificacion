import { useState } from 'react';
import Papa from 'papaparse';
import { useSendData } from './hooks/useSendData';
function CsvUploader() {
  const [csvData, setCsvData] = useState([]);
  const { createUnitData } = useSendData();
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log('Raw CSV Data:', results.data);

          // Campos que quieres parsear como JSON:
          const fieldsToParse = [
            'description_model',
            'brand_information',
            'materials',
            'packing',
            'care',
            'tips',
            'trace_supplier',
            'traceability_batch',
            'compliance_supplier',
            'compliance_process',
            'traceability_blockchain_lot',
            'photo_product',
            'information_product',
            'traceability_product',
            'traceability_blockchain_product',
          ];

          // Transformar cada fila
          const transformedData = results.data.map((row) => {
            const newRow = { ...row };

            fieldsToParse.forEach((field) => {
              if (newRow[field]) {
                try {
                  newRow[field] = JSON.parse(newRow[field]);
                } catch (error) {
                  console.warn(`No se pudo parsear el campo ${field}`, error);
                }
              }
            });

            return newRow;
          });

          console.log('Transformed Data:', transformedData);
          setCsvData(transformedData);
          createUnitData(transformedData);
        },
        error: function (error) {
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
