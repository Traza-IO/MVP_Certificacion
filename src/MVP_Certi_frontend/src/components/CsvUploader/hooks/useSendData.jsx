import { useState } from "react";
import { MVP_Certi_backend } from 'declarations/MVP_Certi_backend';

export const useSendData = () => {
  // const [permissions, setPermissions] = useState<AdmPermissions_Type[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(MVP_Certi_backend)
  const createUnitData = async (unitData) => {
    console.log('initializing createUnitData');
    setLoading(true);
    setError(null);
    try {
     unitData.forEach( async (data) => {
      await MVP_Certi_backend.createUnitData(data);
      });
    } catch (err) {
      setError("Error al crear el permiso.");
    } finally {
      console.log('finally');
      setLoading(false);
    }
  };


  return {
    loading,
    error,
    createUnitData,
  };
};
