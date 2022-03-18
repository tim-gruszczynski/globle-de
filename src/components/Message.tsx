import useCheckMobile from "../hooks/useCheckMobile";
import { answerName } from "../util/answer";

type Props = {
  win: boolean;
  error: string;
  guesses: number;
};

export function Message({ win, error, guesses }: Props) {
  const isMobile = useCheckMobile();
  if (error) {
    return <p className="text-red-700 ">{error}</p>;
  } else if (win) {
    return (
      <p className="text-green-800 dark:text-green-300 ">
        Das geheime Land ist {answerName}!
      </p>
    );
  } else if (guesses === 0) {
    return (
      <p className="text-gray-700 dark:text-gray-400 ">
        Geben Sie den Namen eines beliebigen Landes ein, um zu starten.
      </p>
    );
  } else if (guesses === 1) {
    return (
      <p className="text-gray-700 dark:text-gray-400 ">
        Bewegen, {isMobile ? "tap" : "click"}, und zoomen Sie an Globus heran,
        um Ihre nächste Antwort zu geben.
      </p>
    );
  } else {
    return <p className="text-red-700 "></p>;
  }
}
