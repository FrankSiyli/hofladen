"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center">
        <Link href="/">
          <ArrowLeftSvg />
        </Link>
        <div className="mt-48 px-10 backdrop-blur-md backdropSafari text-appBlue rounded-xl mb-10 p-5">
          <h2 className="mb-20 text-2xl">Datenschutz</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
            EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p>Yvonne Stampniok</p>
          <br />
          <p>favicon source https://icons8.com</p>
          <br />
          <h2>Ihre Betroffenenrechte</h2>
          <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
            können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul>
            <li>
              Auskunft über Ihre bei uns gespeicherten Daten und deren
              Verarbeitung (Art. 15 DSGVO),
            </li>
            <li>
              Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
            </li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>
              Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
              aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18
              DSGVO),
            </li>
            <li>
              Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21
              DSGVO) und
            </li>
            <li>
              Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
              eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben
              (Art. 20 DSGVO).
            </li>
          </ul>
          <p>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Sie können sich jederzeit mit einer Beschwerde an eine
            Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde
            des Bundeslands Ihres Wohnsitzes oder an die für uns als
            verantwortliche Stelle zuständige Behörde.
          </p>
          <p>
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich)
            mit Anschrift finden Sie unter:{" "}
            <a
              className="underline"
              href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
              target="_blank"
              rel="noopener nofollow"
            >
              https://www.bfdi.bund.de
            </a>
            .
          </p>
          <p></p>
          <h2>SSL-Verschlüsselung</h2>
          <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
            verwenden wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
          </p>
          <p></p>
          <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
          <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
          <p>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
            personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO
            (Datenverarbeitung auf der Grundlage einer Interessenabwägung)
            erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese
            Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
          </p>
          <p>
            Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten
            nicht mehr verarbeiten, es sei denn, wir können zwingende
            schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
            Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung
            dient der Geltendmachung, Ausübung oder Verteidigung von
            Rechtsansprüchen.
          </p>
          <h3>Empfänger eines Widerspruchs</h3>
          <p>Yvonne Stampniok</p>
          <h2>Änderung unserer Datenschutzbestimmungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
            erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
          <h2>Fragen an den Datenschutzbeauftragten</h2>
          <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an die für den Datenschutz
            verantwortliche Person in unserer Organisation:
          </p>
          Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt,
          den Experten für{" "}
          <a
            className="underline"
            href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
            target="_blank"
            rel="noopener"
          >
            {" "}
            externe Datenschutzbeauftragte{" "}
          </a>{" "}
          (Version #2020-09-30).
          <br />
          <br />
          <p>Nutzung von Google Analytics</p>
          <p>
            Wir verwenden Google Analytics, um die Website-Nutzung zu
            analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere
            Website sowie Werbemaßnahmen zu optimieren.
          </p>
          <p>
            Google Analytics wird uns von Google Ireland Limited (Gordon House,
            Barrow Street, Dublin 4, Irland) bereitgestellt. Google verarbeitet
            die Daten zur Website-Nutzung in unserem Auftrag und verpflichtet
            sich vertraglich zu Maßnahmen, um die Sicherheit und Vertraulichkeit
            der verarbeiteten Daten zu gewährleisten.
          </p>
          <p>
            Während Ihres Website-Besuchs werden u.a. folgende Daten an Google
            übermittelt: Aufgerufene Seiten Die Erreichung von Website-Zielen
            (z.B. Kontaktanfragen und Newsletter-Anmeldungen) Ihr Verhalten auf
            den Seiten (beispielsweise Verweildauer, Klicks, Scrolltiefe) Ihr
            ungefährer Standort (Land und Stadt) Ihre Internetadresse
            (IP-Adresse) Technische Informationen wie Browser, Internetanbieter,
            Endgerät und Bildschirmauflösung Herkunftsquelle Ihres Besuchs (d.h.
            über welche Website bzw. über welches Werbemittel Sie zu uns
            gekommen sind) Eine zufallsgenerierte User-ID Es werden keine
            persönliche Daten wie Name, Anschrift oder Kontaktdaten an Google
            Analytics übertragen.
          </p>
          <p>
            Diese Daten werden an Server von Google in den USA übertragen. Wir
            weisen darauf hin, dass in den USA datenschutzrechtlich nicht das
            gleiche Schutzniveau wie innerhalb der EU garantiert werden kann.
          </p>
          <p>
            Google Analytics speichert Cookies in Ihrem Webbrowser für die Dauer
            von zwei Jahren seit Ihrem letzten Besuch. Diese Cookies enthaltene
            eine zufallsgenerierte User-ID, mit der Sie bei zukünftigen
            Website-Besuchen wiedererkannt werden können.
          </p>
          <p>
            Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten
            User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile
            ermöglicht. Diese nutzerbezogenen Daten werden automatisch nach 14
            Monaten gelöscht. Sonstige Daten bleiben in aggregierter Form
            unbefristet gespeichert.
          </p>
          <p>
            Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie
            diese mit der einmaligen Installation des Browser-Add-ons zur
            Deaktivierung von Google Analytics unterbinden.
          </p>
          <p>Quelle: traffic3.net</p>
        </div>
      </div>
    </>
  );
};

export default Page;
