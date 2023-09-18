import DownloadImage from "./components/DownloadImage";
import AlpacaImg from "./components/AlpacaImg";

const App = () => {
  return (
    <div>
      <DownloadImage image={<AlpacaImg />} />
    </div>
  );
};

export default App;
