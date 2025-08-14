import { CsvUploader,ImgUploader, GetImg} from './components';
function App() {

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <h1>Prototipador</h1>
      <CsvUploader />
      <ImgUploader />
      <GetImg />
    </main>
  );
}

export default App;
