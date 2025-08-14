import { useState, useEffect } from 'react';
import { MVP_Certi_backend } from 'declarations/MVP_Certi_backend';

function ImgBlockch() {
  const [imgUrl, setImgUrl] = useState(null);
  const [inputName, setInputName] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadImageFromC(name) {
    setLoading(true);
    setImgUrl(null);
    try {
      const bytes = await MVP_Certi_backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return null;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      return URL.createObjectURL(blob);
    } finally {
      setLoading(false);
    }
  }

  const handleLoadImage = async () => {
    if (inputName) {
      const url = await loadImageFromC(inputName);
      setImgUrl(url);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre de la imagen"
        value={inputName}
        onChange={e => setInputName(e.target.value)}
      />
      <button onClick={handleLoadImage} disabled={loading || !inputName}>
        Cargar imagen
      </button>
      {loading && <p>Cargando imagen...</p>}
      {imgUrl && <img src={imgUrl} alt={inputName} />}
    </div>
  );
}

export default ImgBlockch;
