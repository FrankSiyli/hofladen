"use client"
import React from 'react'
import ArrowLeftSvg from '../../svgCollection/ArrowLeftSvg'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <Link href="/"><ArrowLeftSvg/></Link>
      <div className='mt-32 flex flex-col text-center justify-center border m-5 bg-appGrey/70 p-5 rounded-sm  text-appBlue'>
      <h2 className='text-2xl'>Impressum</h2>

<h2>Angaben gemäß § 5 TMG:</h2>
<p>Hofwiesen-Cafe<br/>Yvonne Stampniok</p>
<h3>Postanschrift:</h3>
<p>Zu den Hofwiesen 3<br/>19075 Warsow<br/></p>
<h3>Kontakt:</h3>
<p>Telefon: 0173-8284 585<br/>E-Mail: hofwiesen-cafe@gmx.de</p>
<p></p><h3>Vertreten durch:</h3>
<p>Yvonne Stampniok<br/></p>
<p></p><h3>Umsatzsteuer-Identifikationsnummer</h3>
<p>087/299/27636<br/></p>
<p><br/></p>
<p></p><h3>Die Berufshaftpflichtversicherung wurde abgeschlossen bei:</h3>
<p>Allianz Versicherungs AG
<br/>10900 Berlin</p>
<h3>Geltungsbereich des Versicherungsschutzes:</h3>
<p>Betriebs-Berufshaftpflichtversicherung<br/></p>
<p></p><h2>Hinweise zur Website</h2>
<p></p><h2>Information gemäß § 36 VSBG</h2>
<p>Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:</p>
<p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
<p></p><p><em>Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/generatoren/impressum/">Impressums-Generator der activeMind AG</a> erstellt.</em></p>
</div>
    </>
  )
}

export default page
