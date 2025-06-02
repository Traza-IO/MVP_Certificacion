import { useState } from "react";
import { MVP_Certi_backend } from '../../../../../declarations/MVP_Certi_backend';

export const useSendData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUnitData = async (unitData) => {
    console.log(unitData[0])
    console.log('initializing createUnitData');
    // desctructure unitData
    const { brand_information, materials, packing, care, tips, trace_supplier, traceability_batch, compliance_supplier, compliance_process, traceability_blockchain_lot, photo_product, information_product, traceability_product, traceability_blockchain_product } = unitData;
    setLoading(true);
    setError(null);
    //try {
    console.log('unitData trying to send');
    await MVP_Certi_backend.createUnitData(unitData[0]);

    //} catch (err) {
    //  console.log(err);
    //  setError("Error al crear el permiso.");
    //} finally {
    //  console.log('finally');
    //  setLoading(false);
    // }
  };


  return {
    loading,
    error,
    createUnitData,
  };
};
