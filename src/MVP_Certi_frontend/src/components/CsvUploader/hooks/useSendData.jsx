import { useState } from "react";
import { MVP_Certi_backend } from "declarations/MVP_Certi_backend";

export const useSendData = () => {
  // const [permissions, setPermissions] = useState<AdmPermissions_Type[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPermissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await MVP_Certi_backend.readAllPermissions();
      // const formattedData = data.map(([_, permission]) => ({
      //   userCreated: permission.userCreated,
      //   permissions: permission.permissions,
      //   descriptionPermissions: permission.descriptionPermissions,
      //   updateDate: permission.updateDate,
      //   state: permission.state,
      //   idPermissions: permission.idPermissions,
      //   creationDate: permission.creationDate
      // }));
      // setPermissions(formattedData);
    } catch (err) {
      setError("Error al cargar los permisos.");
    } finally {
      setLoading(false);
    }
  };


  return {
    // permissions,
    loading,
    error,
    fetchPermissions,
    // createPermission
  };
};
