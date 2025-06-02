import { useState } from "react";
import { MVP_Certi_backend } from '../../../../../declarations/MVP_Certi_backend';

export const useSendData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUnitData = async (unitData) => {
    console.log('initializing createUnitData');
    setLoading(true);
    setError(null);
    await MVP_Certi_backend.createUnitData(unitData);

  };


  return {
    loading,
    error,
    createUnitData,
  };
};
