import { useState } from "react";

function Item({ q, a }: { q: string; a: any }, idx: number) {
  const [open, setOpen] = useState(false);
  const question = (
    <dt
      key={1}
      className="font-bold cursor-pointer pb-3"
      onClick={(e) => setOpen(!open)}
    >
      {`${idx + 1}. ${q}`}
    </dt>
  );
  if (open) {
    return (
      <div className="" key={idx}>
        {[question, a]}
      </div>
    );
  } else {
    return <div key={idx}>{question}</div>;
  }
}

type Props = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

export default function Info({ setScreen }: Props) {
  const faqs = [
    {
      q: "Wie wird der Abstand zwischen der Antwort und meiner Vermutung berechnet?",
      a: (
        <dd key={2}>
          Die Entfernung zwischen Ländern ist definiert als der
          Mindestabstand zwischen ihren Grenzen.
        </dd>
      ),
    },
    {
      q: "Wie kann ich das Spiel spielen, wenn ich farbenblind oder sehbehindert bin?",
      a: (
        <dd key={2}>
          Ein kontrastreicher Farbblindmodus kann aktiviert werden in den{" "}
          <button className="underline" onClick={(e) => setScreen("Settings")}>
          Einstellungen
          </button>
          .
        </dd>
      ),
    },
    {
      q: "Wie entscheidet das Spiel, was ein richtiges Land ist?",
      a: (
        <dd key={2}>
          {" "}
          Globle benutzt{" "}
          <a
            className="underline"
            href="https://www.sporcle.com/blog/2013/01/what-is-a-country/"
          >
            dieses framework
          </a>{" "}
          um zu bestimmen, was eine gültige Antwort ist.{" "}
        </dd>
      ),
    },
    {
      q: "Sind autonome, aber nicht souveräne Länder im Spiel enthalten?",
      a: (
        <dd key={2}>
          Einige Länder werden in einer neutralen Farbe erscheinen, wenn ihr
          Land erraten wird, z. B. Grönland für Dänemark. Die Lage dieser
          Territorien hat keinen Einfluss auf die Farbe des souveränen Landes. 
          Die meisten kleinen Gebiete erscheinen nicht im Spiel, z. B. Curaçao.
        </dd>
      ),
    },
    {
      q: "Ich habe das geheime Land von heute herausgefunden! Wann kann ich wieder spielen?",
      a: (
        <dd key={2}>
          Um Mitternacht wird das Land und ihre Antworten zurückgesetzt.
        </dd>
      ),
    },
    {
      q: "Sind alternative Schreibweisen für Länder möglich?",
      a: (
        <dd key={2}>
          Es gibt viele Länder mit mehreren zulässigen Namen. Einige
          alternative Schreibweisen und frühere Namen werden akzeptiert,
          z. B. Burma für Myanmar. Auch Abkürzungen sind für einige Länder
           mit mehreren Wörtern zulässig. Bei Ländern wie z. B. 
           den Vereinigte Arabische Emirate ist UAE zulässig.
        </dd>
      ),
    },
    {
      q: "Ein Land fehlt oder eine Grenze ist falsch. Was kann ich dagegen tun?",
      a: (
        <dd key={2}>
          Geografie kann ein sensibles Thema sein, und die Grenzen einiger 
          Länder sind umstritten. Wenn du der Meinung bist, dass eine Korrektur
          vorgenommen werden sollte, melde dich bitte höflich auf {" "}
          <a
            className="underline"
            href="https://github.com/the-abe-train/globle"
          >
            GitHub
          </a>{" "}
          oder er DM auf{" "}
          <a
            className="underline"
            href="https://twitter.com/theAbeTrain"
            aria-label="Twitter"
          >
            Twitter
          </a>
          .
        </dd>
      ),
    },
  ];
  return (
    <div className="my-2 space-y-7">
      <h2
        className="text-center text-2xl my-5 font-extrabold"
        style={{ fontFamily: "'Montserrat'" }}
      >
        FAQ
      </h2>
      <dl className="space-y-8">{faqs.map((faq, idx) => Item(faq, idx))}</dl>
    </div>
  );
}
