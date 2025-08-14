import { useState } from 'react';
import { useSendData }  from './hooks/useSendData';
function CsvUploader() {
  const [imgData, setImgData] = useState([]);
    const { uploadImage, loading, error } = useSendData();
   async function uploadImageToB(file) {
         const arrayBuffer = await file.arrayBuffer();
         const uint8Array = new Uint8Array(arrayBuffer);
        console.log(uint8Array);
         await uploadImage(
            file.name,
            Array.from(uint8Array) // Motoko espera [Nat8]
          );
          console.log('Image uploaded successfully');
        }
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
   
    if (file) {
         await uploadImageToB(file);
         
    }
  };

  return (
    <div>
      <h2>Subir IMG</h2>
      <input type="file" accept=".jpg" onChange={handleFileChange} />
      
      {imgData.length > 0 && (
        <div>
          <h3>Datos capturados:</h3>
          <pre>{imgData}</pre>
        </div>
      )}
    </div>
  );
}

export default CsvUploader;
