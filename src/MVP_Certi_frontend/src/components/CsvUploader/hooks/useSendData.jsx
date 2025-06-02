import { useState } from "react";
import { MVP_Certi_backend } from '../../../../../declarations/MVP_Certi_backend';

export const useSendData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUnitData = async (unitData) => {
    console.log('initializing createUnitData');
    setLoading(true);
    setError(null);
    try {
      console.log('unitData trying to send');
      await MVP_Certi_backend.createUnitData(unitData);

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
