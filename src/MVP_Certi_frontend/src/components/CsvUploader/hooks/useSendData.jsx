import { useState } from "react";
import { MVP_Certi_backend } from 'declarations/MVP_Certi_backend';

export const useSendData = () => {
  // const [permissions, setPermissions] = useState<AdmPermissions_Type[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(MVP_Certi_backend)
  const createUnitData = async (unitData) => {
    console.log('initializing createUnitData');
    // desctructure unitData
    const { brand_information, materials, packing, care, tips, trace_supplier, traceability_batch, compliance_supplier, compliance_process, traceability_blockchain_lot, photo_product, information_product, traceability_product, traceability_blockchain_product } = unitData;
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
