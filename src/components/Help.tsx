import useCheckMobile from "../hooks/useCheckMobile";
import Outline from "./Outline";

export default function Help() {
  const isMobile = useCheckMobile();
  const countrySize = isMobile ? 125 : 150;
  return (
    <div className="my-2 space-y-7">
      <h2
        className="text-center text-2xl my-5 font-extrabold"
        style={{ fontFamily: "'Montserrat'" }}
      >
        Wie spielt man
      </h2>
      <p>
        Jeden Tag gibt es ein neues geheimes Land. Dein Ziel ist es das 
        Land mit so wenig wie möglichen Versuchen zu erraten. Jeder 
        falsche Versuch wird auf dem Globus mit einer Farbe angezeigt,
        die angibt, wie nahe er dem geheimen Land ist.
      </p>
      <p>
        Wenn das geheime Land zum Beispiel <b>Japan</b>  ist, dann würden
        die folgenden Länder mit diesen Farben erscheinen:
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {["Frankreich", "Nepal", "Mongolei", "Südkorea"].map((country, idx) => {
          return (
            <Outline key={idx} countryName={country} width={countrySize} />
          );
        })}
      </div>
      <p>Jeden Tag gibt es ein neues geheimes Land!</p>
    </div>
  );
}
