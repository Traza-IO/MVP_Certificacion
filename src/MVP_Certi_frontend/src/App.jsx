import { useState } from 'react';
import { MVP_Certi_backend } from 'declarations/MVP_Certi_backend';
import { CsvUploader } from './components';
function App() {

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <h1>Prototipador</h1>
      <CsvUploader />
    </main>
  );
}

export default App;
