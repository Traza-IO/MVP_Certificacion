import { useState } from "react";
import { MVP_Certi_backend } from 'declarations/MVP_Certi_backend';

export const useSendData = () => {
  // const [permissions, setPermissions] = useState<AdmPermissions_Type[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const uploadImage = async (name,img) => {
    console.log(name);
   setError(null);
    try {
         console.log('initializing asaas ');
      await MVP_Certi_backend.uploadImage(name,img);
    } catch (err) {
        console.log(err);
      setError("Error al crear el permiso.");
    } finally {
      console.log('finally');
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    uploadImage
  };
};
