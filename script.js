
  window.topicAreaMeta = {
    arbeitsrecht: {
      title: 'Arbeitsrecht',
      pageId: 'arbeitsrecht',
      heroBackground: 'assets/t.png',
      advisor: 'Pia-Alexandra Kappus, Noah Kappus und Larissa Faber begleiten Arbeitnehmer, Führungskräfte, Arbeitgeber und Betriebsräte mit klarem juristischen Kurs.',
      contactCopy: 'Wir prüfen Verträge, Schreiben und Fristen kurzfristig und entwickeln eine klare arbeitsrechtliche Strategie für das weitere Vorgehen.',
      lawyers: [
        { name: 'Pia-Alexandra Kappus', title: 'Fachanwältin für Arbeitsrecht', photo: 'assets/anw1.jpg', page: 'pia' },
        { name: 'Noah Kappus', title: 'Rechtsanwalt · Arbeitsrecht', photo: 'assets/noah-photo.jpg', page: 'noah' },
        { name: 'Larissa Faber', title: 'Rechtsanwältin · Arbeitsrecht', photo: 'assets/larissa-photo.jpg', page: 'larissa' }
      ]
    },
    mietrecht: {
      title: 'Mietrecht',
      pageId: 'mietrecht',
      heroBackground: 'assets/t(1).png',
      advisor: 'Michael Borik, Franka Mirbach und Larissa Faber vertreten Mieter, Vermieter, Eigentümer und Wohnungseigentümergemeinschaften strukturiert und wirtschaftlich.',
      contactCopy: 'Wir bewerten Verträge, Abrechnungen und Schreiben präzise und richten das Vorgehen an einer wirtschaftlich sinnvollen Lösung aus.',
      lawyers: [
        { name: 'Michael Borik', title: 'Fachanwalt · Miet- & WEG-Recht', photo: 'assets/rechtsanwalt-ra-borik.jpg', page: 'michael' },
        { name: 'Franka Mirbach', title: 'Rechtsanwältin · Mietrecht', photo: 'assets/anw3.jpg', page: 'franka' },
        { name: 'Larissa Faber', title: 'Rechtsanwältin · Mietrecht', photo: 'assets/larissa-photo.jpg', page: 'larissa' }
      ]
    },
    verkehrsrecht: {
      title: 'Verkehrsrecht',
      pageId: 'verkehrsrecht',
      heroBackground: 'assets/t(2).png',
      advisor: 'Pia-Alexandra Kappus, Jörg Bohne und Noah Kappus vertreten Mandanten bei Unfallregulierung, Bußgeldverfahren und fahrerlaubnisrechtlichen Fragen.',
      contactCopy: 'Wir sichern Unterlagen, übernehmen die Kommunikation und setzen Ansprüche oder Einwendungen mit klarem Blick auf Zeit, Beweise und Taktik durch.',
      lawyers: [
        { name: 'Pia-Alexandra Kappus', title: 'Fachanwältin · ADAC-Vertragsanwältin', photo: 'assets/anw1.jpg', page: 'pia' },
        { name: 'Jörg Bohne', title: 'Fachanwalt für Verkehrsrecht', photo: 'assets/anw2.jpg', page: 'joerg' },
        { name: 'Noah Kappus', title: 'Rechtsanwalt · Verkehrsrecht', photo: 'assets/noah-photo.jpg', page: 'noah' }
      ]
    },
    zivilrecht: {
      title: 'Allgemeines Zivilrecht',
      pageId: 'zivilrecht',
      heroBackground: 'assets/t(3).png',
      advisor: 'Noah Kappus und Larissa Faber begleiten Mandanten bei Vertragsfragen, Forderungen und allgemeinen zivilrechtlichen Streitigkeiten.',
      contactCopy: 'Wir prüfen Unterlagen zügig, ordnen Chancen und Risiken ein und entwickeln ein Vorgehen, das rechtlich belastbar und wirtschaftlich sinnvoll ist.',
      lawyers: [
        { name: 'Noah Kappus', title: 'Rechtsanwalt · Zivilrecht', photo: 'assets/noah-photo.jpg', page: 'noah' },
        { name: 'Larissa Faber', title: 'Rechtsanwältin · Zivilrecht', photo: 'assets/larissa-photo.jpg', page: 'larissa' }
      ]
    }
  };

  window.topicDetailPages = [
    {
      id: 'arbeitsrecht-aufhebungsvertrag',
      areaId: 'arbeitsrecht',
      title: 'Aufhebungsvertrag',
      lead: 'Ein Aufhebungsvertrag sollte nie unter Zeitdruck unterschrieben werden. Wir prüfen die Folgen für Abfindung, Freistellung, Zeugnis und Arbeitslosengeld, bevor Fakten geschaffen werden.',
      body: [
        'Der Aufhebungsvertrag beendet das Arbeitsverhältnis nicht durch Kündigung, sondern durch Vereinbarung. Gerade deshalb werden Beendigungsdatum, Freistellung, Resturlaub, Boni und Wettbewerbsverbote oft in wenigen Klauseln zusammengezogen.',
        'Wir schauen nicht nur auf die Abfindung, sondern auf die wirtschaftliche Gesamtwirkung. Besonders wichtig sind Sperrzeitrisiken beim Arbeitslosengeld, eine saubere Zeugnisregelung und ein klar formulierter Abwicklungsrahmen.'
      ],
      checklist: [
        'Prüfung von Beendigungsdatum, Freistellung und Resturlaubsregelung',
        'Verhandlung von Abfindung, Bonus, Outplacement und Zeugnis',
        'Bewertung von Sperrzeitrisiken und Wettbewerbsverboten',
        'Absicherung offener Ansprüche und sauberer Schlussklauseln'
      ],
      highlights: [],
      approach: 'Wir prüfen den Entwurf kurzfristig, markieren kritische Klauseln und übernehmen auf Wunsch die Nachverhandlung mit dem Arbeitgeber. Ziel ist eine belastbare Beendigungsvereinbarung ohne unnötige Folgerisiken.',
      related: ['arbeitsrecht-kuendigung', 'arbeitsrecht-abfindung', 'arbeitsrecht-zeugnis']
    },
    {
      id: 'arbeitsrecht-kuendigung',
      areaId: 'arbeitsrecht',
      title: 'Kündigung',
      lead: 'Nach einer Kündigung laufen Fristen sofort. Wir prüfen schnell die Erfolgsaussichten einer Kündigungsschutzklage und entwickeln die passende Strategie für Arbeitsplatz oder Vergleich.',
      body: [
        'Ob ordentliche, außerordentliche oder Änderungskündigung: Im Mittelpunkt steht zunächst die Wirksamkeit. Maßgeblich sind Zugang, Fristen, Anhörung des Betriebsrats, soziale Rechtfertigung und die konkrete Begründung.',
        'Viele Verfahren enden nicht mit einem Urteil, sondern mit einer verhandelten Lösung. Wir bewerten deshalb immer zugleich die Chancen vor Gericht, die Vergleichsposition und eine mögliche Abfindung.'
      ],
      checklist: [
        'Sofortige Prüfung der Dreiwochenfrist',
        'Bewertung von Kündigungsgrund und Sozialauswahl',
        'Strategie für Weiterbeschäftigung oder Vergleich',
        'Begleitung im Kündigungsschutzverfahren'
      ],
      highlights: [
        ['Dreiwochenfrist', 'Die Klagefrist nach Zugang der Kündigung ist regelmäßig sehr kurz.'],
        ['Strategie', 'Wir bewerten, ob Fortsetzung oder Trennung wirtschaftlich sinnvoller ist.'],
        ['Verhandlung', 'Auch Abfindung, Freistellung und Zeugnis werden mitgedacht.']
      ],
      approach: 'Wir analysieren die Kündigung mitsamt Unterlagen, legen die sinnvolle Stoßrichtung fest und vertreten Sie konsequent außergerichtlich oder vor dem Arbeitsgericht.',
      related: ['arbeitsrecht-abfindung', 'arbeitsrecht-abmahnung', 'arbeitsrecht-aufhebungsvertrag']
    },
    {
      id: 'arbeitsrecht-abfindung',
      areaId: 'arbeitsrecht',
      title: 'Abfindung',
      lead: 'Eine gute Abfindung ist Ergebnis von Verhandlung, Timing und sauberer Prozessstrategie. Wir holen für Sie wirtschaftlich vernünftige Lösungen heraus.',
      body: [
        'Ein gesetzlicher Anspruch auf Abfindung besteht nur in Sonderfällen. Entscheidend ist deshalb, wie hoch der Druck auf die Arbeitgeberseite ist und welche Risiken sie mit einem Rechtsstreit vermeiden will.',
        'Wir bewerten die Verhandlungslage realistisch und berücksichtigen dabei Beschäftigungsdauer, Position, Prozessrisiko, Zielsetzung und steuerliche Auswirkungen.'
      ],
      checklist: [
        'Realistische Einschätzung der Verhandlungsspanne',
        'Einbindung von Freistellung, Boni und Zeugnis',
        'Bewertung steuerlicher und sozialrechtlicher Folgen',
        'Formulierung rechtssicherer Vergleichs- oder Vertragslösungen'
      ],
      highlights: [
        ['Druckpunkte', 'Prozessrisiken und Fristen bestimmen die Verhandlungskraft.'],
        ['Gesamtpaket', 'Nicht nur die Summe, sondern auch Nebenpunkte zählen.'],
        ['Saubere Umsetzung', 'Wir sichern Fälligkeit, Formulierung und Vollständigkeit ab.']
      ],
      approach: 'Wir verhandeln Abfindungen nicht isoliert, sondern als Teil eines stimmigen Gesamtpakets. So entsteht eine Lösung, die wirtschaftlich trägt und rechtlich belastbar ist.',
      related: ['arbeitsrecht-kuendigung', 'arbeitsrecht-aufhebungsvertrag', 'arbeitsrecht-bonus']
    },
    {
      id: 'arbeitsrecht-abmahnung',
      areaId: 'arbeitsrecht',
      title: 'Abmahnung',
      lead: 'Eine Abmahnung sollte nicht achselzuckend hingenommen werden. Wir prüfen, ob Inhalt, Vorwurf und Form überhaupt wirksam sind und welche Reaktion taktisch sinnvoll ist.',
      body: [
        'Abmahnungen sind oft Vorstufe zu späteren Kündigungen. Schon deshalb lohnt sich eine sorgfältige Prüfung, ob der Sachverhalt zutrifft, ausreichend konkret beschrieben ist und eine Pflichtverletzung überhaupt vorliegt.',
        'Nicht jede unzutreffende Abmahnung muss sofort eingeklagt werden. Häufig ist eine kluge schriftliche Reaktion sinnvoller. In anderen Fällen ist die Entfernung aus der Personalakte der richtige Schritt.'
      ],
      checklist: [
        'Prüfung von Inhalt, Bestimmtheit und formellen Mängeln',
        'Bewertung der Risiken für spätere Kündigungen',
        'Entwurf von Gegendarstellung oder anwaltlicher Antwort',
        'Durchsetzung der Entfernung aus der Personalakte'
      ],
      highlights: [
        ['Vorstufe zur Kündigung', 'Abmahnungen prägen spätere arbeitsrechtliche Auseinandersetzungen.'],
        ['Taktik', 'Nicht jede Reaktion sollte gleich aussehen.'],
        ['Dokumentation', 'Wir sorgen für eine belastbare schriftliche Linie.']
      ],
      approach: 'Wir prüfen, welche Reaktion Ihre Position tatsächlich stärkt, und setzen diese konsequent um. Ziel ist ein sauberer Aktenstand und eine bessere Ausgangslage für alles Weitere.',
      related: ['arbeitsrecht-kuendigung', 'arbeitsrecht-zeugnis', 'arbeitsrecht-arbeitgeberberatung']
    },
    {
      id: 'arbeitsrecht-bonus',
      areaId: 'arbeitsrecht',
      title: 'Bonus',
      lead: 'Variable Vergütung ist oft streitanfällig. Wir prüfen Zielvereinbarungen, Bonuspläne und Stichtagsregelungen und setzen berechtigte Ansprüche durch.',
      body: [
        'Bonusansprüche scheitern häufig nicht an der Leistung, sondern an unklaren Zielsystemen, Ermessensentscheidungen oder widersprüchlichen Vertragsregelungen. Gerade bei Führungskräften sind die wirtschaftlichen Auswirkungen erheblich.',
        'Wir analysieren Verträge, Betriebsvereinbarungen und Zielvereinbarungen im Detail. Dabei geht es um Transparenz, Billigkeitskontrolle, Zielverfehlung, Pro-rata-Regelungen und offene Vergütungsbestandteile.'
      ],
      checklist: [
        'Prüfung von Zielvereinbarung, Bonusplan und Ermessen',
        'Bewertung von Stichtags- und Verfallsklauseln',
        'Durchsetzung offener variabler Vergütung',
        'Beratung bei Austritt, Freistellung und unterjähriger Zielerreichung'
      ],
      highlights: [
        ['Variable Vergütung', 'Gerade Bonusmodelle bergen viel Konfliktpotenzial.'],
        ['Unterlagen', 'Wir werten Verträge, Zielsysteme und interne Kommunikation aus.'],
        ['Durchsetzung', 'Ansprüche werden außergerichtlich und gerichtlich sauber verfolgt.']
      ],
      approach: 'Wir ordnen die Vergütungsstruktur sauber ein, entwickeln eine belastbare Anspruchsbegründung und vertreten Ihre Position mit Blick auf Verhandlung und Prozess.',
      related: ['arbeitsrecht-abfindung', 'arbeitsrecht-kuendigung', 'arbeitsrecht-banken-arbeitsrecht']
    },
    {
      id: 'arbeitsrecht-elternzeit',
      areaId: 'arbeitsrecht',
      title: 'Elternzeit',
      lead: 'Rund um Elternzeit und Rückkehr entstehen viele Missverständnisse. Wir sichern Ansprüche auf Elternzeit, Teilzeit und einen fairen Wiedereinstieg ab.',
      body: [
        'Elternzeit berührt nicht nur die Freistellung, sondern auch Teilzeit, Vertretungsmodelle, Versetzungen und die Rückkehr an den Arbeitsplatz. Fehler in Kommunikation oder Planung führen hier oft unnötig zu Konflikten.',
        'Wir beraten zu Anträgen, Fristen und Rechten während und nach der Elternzeit. Dabei behalten wir immer auch Diskriminierungsrisiken und die praktische Umsetzbarkeit im Unternehmen im Blick.'
      ],
      checklist: [
        'Prüfung von Elternzeit- und Teilzeitanträgen',
        'Beratung zu Rückkehrrecht, Einsatzort und Stundenumfang',
        'Unterstützung bei Benachteiligung oder Diskriminierung',
        'Begleitung bei Verhandlungen mit Arbeitgeber oder HR'
      ],
      highlights: [
        ['Fristen', 'Anträge und Reaktionen müssen formal sauber gestellt werden.'],
        ['Rückkehr', 'Wir sichern die Position nach der Elternzeit strategisch ab.'],
        ['Teilzeit', 'Der gewünschte Zuschnitt muss rechtlich und praktisch passen.']
      ],
      approach: 'Wir helfen frühzeitig bei der Weichenstellung, damit Elternzeit nicht in einen späteren Konflikt mündet. Wenn nötig, setzen wir Ansprüche auch konsequent durch.',
      related: ['arbeitsrecht-zeugnis', 'arbeitsrecht-kuendigung', 'arbeitsrecht-abmahnung']
    },
    {
      id: 'arbeitsrecht-zeugnis',
      areaId: 'arbeitsrecht',
      title: 'Zeugnis',
      lead: 'Ein Arbeitszeugnis entscheidet oft über den nächsten Karriereschritt. Wir prüfen Inhalt, Struktur und verdeckte Negativformulierungen mit Blick auf Ihren tatsächlichen Anspruch.',
      body: [
        'Arbeitszeugnisse wirken nach außen oft neutral, transportieren aber in Wortwahl, Reihenfolge und Gewichtung klare Botschaften. Schon kleine Formulierungsunterschiede können die Gesamtbewertung verändern.',
        'Wir prüfen, ob Tätigkeiten vollständig, Leistungen zutreffend und Führungsverhalten angemessen beschrieben sind. Auf Wunsch formulieren wir konkrete Änderungsvorschläge oder setzen den Anspruch durch.'
      ],
      checklist: [
        'Prüfung von Tätigkeitsbeschreibung und Leistungsbeurteilung',
        'Erkennen verdeckter Negativsignale und Leerstellen',
        'Formulierung konkreter Verbesserungsvorschläge',
        'Durchsetzung des Zeugnisanspruchs außergerichtlich oder gerichtlich'
      ],
      highlights: [
        ['Karrierewirkung', 'Ein gutes Zeugnis ist oft mehr wert als eine Einzelklausel.'],
        ['Feinsprache', 'Wir prüfen Formulierungen mit Blick auf ihre Außenwirkung.'],
        ['Durchsetzung', 'Unklare oder schwache Zeugnisse bleiben nicht unkommentiert.']
      ],
      approach: 'Wir arbeiten mit einem klaren Qualitätsmaßstab und formulieren präzise nach. So entsteht ein Zeugnis, das fachlich trägt und Ihre Position im Bewerbungsprozess stärkt.',
      related: ['arbeitsrecht-aufhebungsvertrag', 'arbeitsrecht-abfindung', 'arbeitsrecht-kuendigung']
    },
    {
      id: 'arbeitsrecht-sozialplan',
      areaId: 'arbeitsrecht',
      title: 'Sozialplan',
      lead: 'Bei Restrukturierungen entscheiden Sozialplan und Interessenausgleich über erhebliche wirtschaftliche Folgen. Wir begleiten Verhandlungen mit klarem Blick auf Ausgleich und Zukunftssicherung.',
      body: [
        'Wenn Standorte geschlossen, Bereiche umgebaut oder Stellen abgebaut werden, kommt es auf die konkrete Ausgestaltung kollektiver Regelungen an. Sozialpläne und Interessenausgleiche bestimmen, wie Lasten verteilt werden.',
        'Wir beraten Arbeitnehmer, Führungskräfte und Betriebsräte zu Abfindungsformeln, Auswahlkriterien, Härtefallregelungen und Übergangsmodellen. Dabei zählt die Kombination aus Verhandlungserfahrung und juristischer Präzision.'
      ],
      checklist: [
        'Prüfung von Interessenausgleich und Sozialplanentwurf',
        'Bewertung von Abfindungsformeln und Auswahlkriterien',
        'Beratung zu Transfergesellschaft, Härtefall und Ausnahmen',
        'Begleitung kollektiver und individueller Verhandlungen'
      ],
      highlights: [
        ['Strukturwandel', 'Wir begleiten komplexe Veränderungsprozesse rechtlich fundiert.'],
        ['Verhandlungsstärke', 'Gute Ergebnisse entstehen aus präziser Vorbereitung.'],
        ['Einzelfallblick', 'Auch individuelle Ansprüche bleiben im Fokus.']
      ],
      approach: 'Wir verbinden kollektive Regelungsfragen mit der individuellen Perspektive der Betroffenen. So lassen sich tragfähige Lösungen besser verhandeln und absichern.',
      related: ['arbeitsrecht-abfindung', 'arbeitsrecht-betriebsraete', 'arbeitsrecht-kuendigung']
    },
    {
      id: 'arbeitsrecht-inhouse-schulungen',
      areaId: 'arbeitsrecht',
      title: 'Inhouse-Schulungen für Arbeitgeber',
      lead: 'Praxisnahe Schulungen schaffen Sicherheit im Tagesgeschäft. Wir entwickeln Inhouse-Formate, die Führungskräfte, HR und Entscheidungsträger direkt anwenden können.',
      body: [
        'Arbeitsrechtliche Fehler entstehen in Unternehmen häufig nicht aus mangelndem Willen, sondern aus uneinheitlichen Prozessen und fehlender Sicherheit bei Standardsituationen. Genau hier setzen gute Inhouse-Schulungen an.',
        'Wir konzipieren Workshops zu Kündigung, Abmahnung, Gesprächsführung, Trennungsprozessen, Befristung, Elternzeit oder Betriebsratsfragen. Inhalt und Niveau richten sich am Bedarf Ihres Teams aus.'
      ],
      checklist: [
        'Schulungen für HR, Führungskräfte und Management',
        'Individuelle Themenauswahl nach Ihrem Unternehmensbedarf',
        'Praxisfälle, Leitfäden und sofort anwendbare Handlungsempfehlungen',
        'Auf Wunsch als Workshop, Intensivformat oder Management-Briefing'
      ],
      highlights: [
        ['Praxisnah', 'Die Inhalte sind auf echte Entscheidungssituationen zugeschnitten.'],
        ['Individuell', 'Wir passen Tiefe und Schwerpunkte an Ihr Unternehmen an.'],
        ['Vorbeugend', 'Gute Schulung reduziert Streit, Fehler und Unsicherheit.']
      ],
      approach: 'Wir entwickeln Schulungen nicht abstrakt, sondern entlang Ihrer Prozesse, Rollen und typischen Konfliktlagen. So entsteht ein Format, das im Alltag wirklich entlastet.',
      related: ['arbeitsrecht-arbeitgeberberatung', 'arbeitsrecht-betriebsraete', 'arbeitsrecht-abmahnung']
    },
    {
      id: 'arbeitsrecht-arbeitgeberberatung',
      areaId: 'arbeitsrecht',
      title: 'Arbeitgeberberatung',
      lead: 'Gute Arbeitgeberberatung verbindet rechtliche Präzision mit operativer Umsetzbarkeit. Wir begleiten Personalmaßnahmen verlässlich und mit Blick auf Konfliktvermeidung.',
      body: [
        'Arbeitgeber brauchen nicht nur juristische Antworten, sondern handhabbare Lösungen. Von Vertragsgestaltung bis Trennungsprozess begleiten wir Maßnahmen so, dass sie im Unternehmen sauber umgesetzt werden können.',
        'Im Fokus stehen personelle Einzelmaßnahmen, Restrukturierungen, Vergütung, Arbeitszeit, Befristung, Compliance und die Zusammenarbeit mit Betriebsräten. Dabei denken wir stets strategisch und präventiv.'
      ],
      checklist: [
        'Laufende Beratung zu Personalmaßnahmen und Vertragsfragen',
        'Begleitung bei Trennung, Restrukturierung und Konflikten',
        'Prüfung von Befristung, Arbeitszeit und Vergütungsmodellen',
        'Unterstützung in der Kommunikation mit Betriebsrat und Führungsebene'
      ],
      highlights: [
        ['Operativ', 'Unsere Beratung passt in den realen Unternehmensalltag.'],
        ['Präventiv', 'Saubere Vorbereitung verhindert spätere Eskalationen.'],
        ['Verlässlich', 'Wir begleiten Maßnahmen von der Planung bis zur Umsetzung.']
      ],
      approach: 'Wir strukturieren den Fall, priorisieren Risiken und schaffen eine rechtlich belastbare Grundlage für Entscheidungen. So bleibt Ihre Arbeitgeberseite handlungsfähig.',
      related: ['arbeitsrecht-inhouse-schulungen', 'arbeitsrecht-betriebsraete', 'arbeitsrecht-banken-arbeitsrecht']
    },
    {
      id: 'arbeitsrecht-betriebsraete',
      areaId: 'arbeitsrecht',
      title: 'Betriebsräte',
      lead: 'Mitbestimmung funktioniert am besten mit klaren Prozessen und rechtssicheren Vereinbarungen. Wir beraten Betriebsräte fundiert und lösungsorientiert.',
      body: [
        'Betriebsratsarbeit verlangt rechtliches Know-how, Verhandlungssicherheit und einen guten Blick für betriebliche Realität. Gerade bei Betriebsänderungen, Einigungsstellen oder personellen Maßnahmen ist saubere Vorbereitung entscheidend.',
        'Wir unterstützen bei Mitbestimmungsrechten, Beschlussverfahren, Betriebsvereinbarungen, Schulungen und strategischen Verhandlungen. Dabei bleibt die Rolle des Gremiums stets klar im Mittelpunkt.'
      ],
      checklist: [
        'Beratung zu Mitbestimmungsrechten und Beteiligungsverfahren',
        'Unterstützung bei Betriebsvereinbarungen und Einigungsstellen',
        'Schulungen für Gremien und Ausschüsse',
        'Begleitung bei Betriebsänderung, Sozialplan und Interessenausgleich'
      ],
      highlights: [
        ['Mitbestimmung', 'Wir stärken die Handlungsfähigkeit des Gremiums.'],
        ['Verhandlung', 'Gute Vorbereitung ist der Schlüssel für belastbare Ergebnisse.'],
        ['Praxisbezug', 'Die betriebliche Realität wird stets mitgedacht.']
      ],
      approach: 'Wir beraten Betriebsräte klar, strukturiert und mit Blick auf die konkrete Situation im Unternehmen. Ziel ist eine sichere Rechtsposition und eine wirksame Verhandlungslinie.',
      related: ['arbeitsrecht-sozialplan', 'arbeitsrecht-arbeitgeberberatung', 'arbeitsrecht-inhouse-schulungen']
    },
    {
      id: 'arbeitsrecht-banken-arbeitsrecht',
      areaId: 'arbeitsrecht',
      title: 'Banken-Arbeitsrecht',
      lead: 'Im Bankensektor gelten besondere Strukturen, Vergütungsmodelle und Compliance-Anforderungen. Wir beraten mit langjähriger Erfahrung in genau diesem Umfeld.',
      body: [
        'Arbeitsrecht im Bankenumfeld ist oft von Bonusmodellen, regulatorischen Anforderungen, restriktiven Vergütungsstrukturen und komplexen Hierarchien geprägt. Standardlösungen greifen hier häufig zu kurz.',
        'Wir beraten Mitarbeitende, Führungskräfte und Arbeitgeber im Finanzsektor mit besonderem Verständnis für branchenspezifische Abläufe. Gerade bei Trennung, Vergütung und Positionierung ist Erfahrung in diesem Umfeld ein echter Vorteil.'
      ],
      checklist: [
        'Beratung zu Bonus, variabler Vergütung und Zielsystemen',
        'Begleitung bei Trennung, Freistellung und Führungswechsel',
        'Einordnung regulatorischer und compliancebezogener Besonderheiten',
        'Vertretung von Arbeitnehmern und Arbeitgebern im Bankensektor'
      ],
      highlights: [
        ['Branchenerfahrung', 'Wir kennen die Sprache und Dynamik des Finanzsektors.'],
        ['Vergütung', 'Variable Modelle verlangen besondere Präzision.'],
        ['Positionierung', 'Gerade Führungskräfte brauchen klare strategische Begleitung.']
      ],
      approach: 'Wir kombinieren arbeitsrechtliche Tiefe mit sektorbezogenem Verständnis und entwickeln Lösungen, die nicht nur rechtlich, sondern auch beruflich sinnvoll sind.',
      related: ['arbeitsrecht-bonus', 'arbeitsrecht-kuendigung', 'arbeitsrecht-arbeitgeberberatung']
    },
    {
      id: 'mietrecht-mietvertrag',
      areaId: 'mietrecht',
      title: 'Mietvertrag',
      lead: 'Ein guter Mietvertrag verhindert spätere Streitigkeiten. Wir prüfen, gestalten und verhandeln Wohn- und Gewerberaummietverträge mit Blick auf Risiken und Interessenlage.',
      body: [
        'Viele Konflikte im Mietrecht entstehen bereits im Vertrag. Unklare Regelungen zu Miete, Nebenkosten, Laufzeit, Renovierung, Kaution oder Nutzung bergen oft jahrelanges Streitpotenzial.',
        'Wir prüfen, welche Klauseln wirksam, ausgewogen und wirtschaftlich sinnvoll sind. Dabei beraten wir sowohl vor Abschluss eines Vertrags als auch bei späteren Auseinandersetzungen über einzelne Bestimmungen.'
      ],
      checklist: [
        'Prüfung und Gestaltung von Wohnraummietverträgen',
        'Begleitung bei Gewerberaummietverträgen und Nachträgen',
        'Bewertung von Klauseln zu Nebenkosten, Kaution und Nutzung',
        'Verhandlung ausgewogener vertraglicher Regelungen'
      ],
      highlights: [
        ['Vertragsklarheit', 'Ein sauberer Vertrag verhindert teure Folgekonflikte.'],
        ['Wirksamkeit', 'Viele Standardklauseln halten einer Prüfung nicht stand.'],
        ['Verhandlung', 'Wir schaffen rechtssichere und praxistaugliche Lösungen.']
      ],
      approach: 'Wir prüfen Verträge nicht nur juristisch, sondern mit Blick auf das spätere Konfliktpotenzial. So lässt sich schon vorab viel Streit vermeiden.',
      related: ['mietrecht-kuendigung', 'mietrecht-schoenheitsreparaturen', 'mietrecht-gewerberaummiete']
    },
    {
      id: 'mietrecht-kuendigung',
      areaId: 'mietrecht',
      title: 'Kündigung',
      lead: 'Kündigungen im Mietrecht sind formal streng. Wir prüfen schnell, ob Eigenbedarf, Zahlungsrückstand oder andere Gründe rechtlich tragen.',
      body: [
        'Im Mietrecht entscheidet oft schon die Form über Wirksamkeit oder Unwirksamkeit. Das gilt für Eigenbedarf, fristlose Kündigung, ordentliche Kündigung und die Reaktion auf Zahlungsrückstände.',
        'Wir vertreten Mieter wie Vermieter und prüfen deshalb nicht nur die Rechtslage, sondern auch die taktisch beste Lösung. Häufig geht es um Räumung, Fortsetzung des Mietverhältnisses oder eine belastbare Einigung.'
      ],
      checklist: [
        'Prüfung von Eigenbedarfskündigung und Begründung',
        'Bewertung fristloser und ordentlicher Kündigungen',
        'Beratung zu Fristen, Widerspruch und Heilungsmöglichkeiten',
        'Vertretung in Räumungs- und Vergleichsverfahren'
      ],
      highlights: [
        ['Form zählt', 'Schon kleine formelle Fehler können entscheidend sein.'],
        ['Schnelligkeit', 'Fristen und Reaktionsmöglichkeiten sollten sofort geprüft werden.'],
        ['Zielorientierung', 'Wir denken immer in Lösungen, nicht nur in Positionen.']
      ],
      approach: 'Wir ordnen die Kündigung kurzfristig ein, bewerten Chancen und Risiken und vertreten Ihre Interessen konsequent in Verhandlung und Verfahren.',
      related: ['mietrecht-mietvertrag', 'mietrecht-kaution', 'mietrecht-gewerberaummiete']
    },
    {
      id: 'mietrecht-schoenheitsreparaturen',
      areaId: 'mietrecht',
      title: 'Schönheitsreparaturen',
      lead: 'Viele Renovierungsklauseln sehen wirksam aus und sind es nicht. Wir prüfen, ob Schönheitsreparaturen tatsächlich geschuldet sind und welche Ansprüche bestehen.',
      body: [
        'Bei Auszug oder Streit über den Zustand der Wohnung kommt es regelmäßig auf die Wirksamkeit einzelner Vertragsklauseln an. Starre Fristen, Endrenovierungspflichten oder Quotenabgeltungsklauseln sind häufig problematisch.',
        'Wir prüfen, ob Renovierungsansprüche überhaupt bestehen, welche Nachweise relevant sind und wie sich Forderungen wirtschaftlich sinnvoll abwehren oder durchsetzen lassen.'
      ],
      checklist: [
        'Prüfung von Renovierungs- und Endrenovierungsklauseln',
        'Bewertung des tatsächlichen Zustands der Mietsache',
        'Abwehr unberechtigter Forderungen oder Durchsetzung berechtigter Ansprüche',
        'Einordnung der Wechselwirkung mit Kaution und Übergabeprotokoll'
      ],
      highlights: [
        ['Klauselkontrolle', 'Die Wirksamkeit entscheidet oft den ganzen Fall.'],
        ['Beweislage', 'Fotos, Protokolle und Kommunikation sind häufig zentral.'],
        ['Wirtschaftlichkeit', 'Nicht jeder Streit lohnt denselben Aufwand.']
      ],
      approach: 'Wir arbeiten die Vertragslage sauber auf und bewerten die Beweissituation nüchtern. So lässt sich meist schnell erkennen, ob sich Verteidigung oder Durchsetzung lohnt.',
      related: ['mietrecht-mietvertrag', 'mietrecht-kaution', 'mietrecht-energiekosten']
    },
    {
      id: 'mietrecht-kaution',
      areaId: 'mietrecht',
      title: 'Kaution',
      lead: 'Bei der Kaution geht es oft um mehr als nur eine Abrechnung. Wir klären Rückzahlungsansprüche, Zurückbehaltungsrechte und offene Gegenforderungen sauber.',
      body: [
        'Nach Beendigung des Mietverhältnisses entsteht häufig Streit darüber, wann die Kaution zurückzuzahlen ist und welche Positionen einbehalten werden dürfen. Dabei spielen Schäden, Nebenkosten und Dokumentation eine große Rolle.',
        'Wir prüfen, ob ein Zurückbehaltungsrecht besteht, ob Einbehalte tragfähig begründet sind und wie sich Rückforderungsansprüche zügig und sauber durchsetzen lassen.'
      ],
      checklist: [
        'Prüfung von Rückzahlungsansprüchen und Einbehalten',
        'Bewertung behaupteter Schäden und offener Nebenkosten',
        'Beratung zu Fristen und Abrechnungszeitpunkt',
        'Durchsetzung oder Abwehr von Kautionsforderungen'
      ],
      highlights: [
        ['Abrechnung', 'Kautionen dürfen nicht pauschal zurückgehalten werden.'],
        ['Dokumentation', 'Übergabeprotokoll und Nachweise sind häufig entscheidend.'],
        ['Tempo', 'Wir setzen berechtigte Rückzahlungsansprüche zügig durch.']
      ],
      approach: 'Wir prüfen Einbehalte präzise, fordern nachvollziehbare Belege an und vertreten Ihre Position mit dem nötigen Druck und Augenmaß.',
      related: ['mietrecht-schoenheitsreparaturen', 'mietrecht-kuendigung', 'mietrecht-energiekosten']
    },
    {
      id: 'mietrecht-gewerberaummiete',
      areaId: 'mietrecht',
      title: 'Gewerberaummiete',
      lead: 'Gewerberaummietverträge sind wirtschaftlich weitreichend und meist komplexer als Wohnraummiete. Wir beraten bei Gestaltung, Konflikten und laufenden Verhandlungen.',
      body: [
        'Im Gewerberaummietrecht sind Vertragsfreiheit und wirtschaftliche Interessen besonders ausgeprägt. Laufzeiten, Indexmiete, Betriebskosten, Konkurrenzschutz oder Ausbaupflichten müssen daher sorgfältig geregelt werden.',
        'Wir vertreten Mieter und Vermieter bei Vertragsgestaltung, Anpassungsverlangen, Mängeln, Beendigung und laufenden Verhandlungen. Entscheidend ist stets die Verbindung von Recht und Wirtschaftlichkeit.'
      ],
      checklist: [
        'Gestaltung und Prüfung von Gewerberaummietverträgen',
        'Beratung zu Laufzeit, Miete, Anpassung und Betriebskosten',
        'Begleitung bei Mängeln, Störungen und Vertragsbeendigung',
        'Unterstützung bei Nachträgen und wirtschaftlichen Neuverhandlungen'
      ],
      highlights: [
        ['Wirtschaftlicher Fokus', 'Bei Gewerberaum zählt die Vertragslogik besonders stark.'],
        ['Verhandlungsstärke', 'Wir sichern klare und belastbare Regelungen ab.'],
        ['Langfristigkeit', 'Fehler wirken oft über Jahre nach.']
      ],
      approach: 'Wir ordnen das Vertragsgefüge präzise ein und helfen, wirtschaftlich vernünftige Lösungen zu verhandeln oder durchzusetzen.',
      related: ['mietrecht-mietvertrag', 'mietrecht-kuendigung', 'mietrecht-maklerrecht']
    },
    {
      id: 'mietrecht-weg',
      areaId: 'mietrecht',
      title: 'WEG',
      lead: 'Im Wohnungseigentumsrecht zählen Fristen, Beschlüsse und saubere Dokumentation. Wir vertreten Eigentümer und Gemeinschaften in typischen Konfliktlagen.',
      body: [
        'Das Wohnungseigentumsrecht ist stark von Beschlussfassungen, Verwalterhandeln und formellen Anforderungen geprägt. Streit entzündet sich oft an Hausgeld, Instandhaltung, Sonderumlagen oder baulichen Veränderungen.',
        'Wir prüfen Beschlüsse, vertreten in Anfechtungsverfahren und beraten zu den Rechten und Pflichten innerhalb der Gemeinschaft. Gerade hier zahlt sich klare Struktur früh aus.'
      ],
      checklist: [
        'Prüfung von Beschlüssen und Anfechtungsfristen',
        'Beratung zu Hausgeld, Sonderumlage und Verwalterfragen',
        'Vertretung in Beschlussmängel- und Zahlungssachen',
        'Einordnung von Nutzungs- und Instandhaltungsfragen'
      ],
      highlights: [
        ['Fristen', 'Im WEG-Recht sind kurze Fristen besonders wichtig.'],
        ['Beschlüsse', 'Die formelle Sauberkeit entscheidet oft über Erfolg oder Misserfolg.'],
        ['Gemeinschaft', 'Wir behalten die Dynamik in Eigentümergemeinschaften im Blick.']
      ],
      approach: 'Wir arbeiten die Beschlusslage strukturiert auf, bewerten die Erfolgsaussichten und vertreten Ihre Interessen mit klarem Blick auf Verfahren und Gemeinschaftsfrieden.',
      related: ['mietrecht-energiekosten', 'mietrecht-gewerberaummiete', 'mietrecht-mietvertrag']
    },
    {
      id: 'mietrecht-energiekosten',
      areaId: 'mietrecht',
      title: 'Energiekosten',
      lead: 'Bei Nebenkosten- und Heizkostenabrechnungen steckt der Streit im Detail. Wir prüfen Abrechnungen strukturiert und setzen Korrekturen oder Rückforderungen durch.',
      body: [
        'Energiekosten, Heizkosten und Betriebskostenabrechnungen werfen regelmäßig Fragen nach Umlagefähigkeit, Verteilerschlüsseln, Verbrauchsdaten und formeller Ordnungsgemäßheit auf. Gerade bei hohen Nachforderungen ist Genauigkeit entscheidend.',
        'Wir prüfen Abrechnungen anhand Vertrag, gesetzlicher Vorgaben und Belegen. Dabei geht es sowohl um Einwendungen gegen Nachforderungen als auch um die Durchsetzung berechtigter Ansprüche.'
      ],
      checklist: [
        'Prüfung von Heizkosten- und Betriebskostenabrechnungen',
        'Bewertung von Umlagefähigkeit und Verteilerschlüssel',
        'Einordnung von Fristen für Einwendungen und Nachforderungen',
        'Durchsetzung von Korrekturen, Rückforderungen oder Zahlung'
      ],
      highlights: [
        ['Abrechnungslogik', 'Schon kleine Fehler können große finanzielle Folgen haben.'],
        ['Belege', 'Eine belastbare Prüfung braucht die richtigen Unterlagen.'],
        ['Durchsetzung', 'Wir vertreten Mieter wie Vermieter klar und präzise.']
      ],
      approach: 'Wir prüfen Abrechnungen strukturiert, isolieren die entscheidenden Positionen und entwickeln daraus eine klare Argumentationslinie für Einigung oder Verfahren.',
      related: ['mietrecht-kaution', 'mietrecht-weg', 'mietrecht-schoenheitsreparaturen']
    },
    {
      id: 'mietrecht-maklerrecht',
      areaId: 'mietrecht',
      title: 'Maklerrecht',
      lead: 'Maklerrecht ist oft provisionsgetrieben und deshalb konfliktanfällig. Wir prüfen, ob Ansprüche wirklich entstanden sind und wie Verträge auszulegen sind.',
      body: [
        'Ob Maklerprovision, Bestellerprinzip, Reservierungsvereinbarung oder Nachweis- und Vermittlungstätigkeit: Im Maklerrecht hängt viel von den konkreten Vertragsunterlagen und dem tatsächlichen Ablauf ab.',
        'Wir prüfen, ob ein Provisionsanspruch entstanden ist, ob Ausschlussgründe greifen und wie sich unklare Vertragsgestaltungen auswirken. Das gilt für Wohn- wie Gewerbeimmobilien.'
      ],
      checklist: [
        'Prüfung von Provisionsansprüchen und Vertragsgrundlagen',
        'Einordnung des Bestellerprinzips und möglicher Ausnahmen',
        'Bewertung von Reservierungs- und Maklerverträgen',
        'Durchsetzung oder Abwehr maklerrechtlicher Forderungen'
      ],
      highlights: [
        ['Provision', 'Wir prüfen, ob die Anspruchsvoraussetzungen wirklich erfüllt sind.'],
        ['Vertrag', 'Maklerverträge verlangen eine präzise Auslegung.'],
        ['Immobilienbezug', 'Die wirtschaftliche Dimension wird stets mitgedacht.']
      ],
      approach: 'Wir ordnen den Ablauf des Geschäfts sauber ein und bewerten die Anspruchslage auf belastbarer Grundlage. So lassen sich unnötige Zahlungen oft vermeiden oder berechtigte Forderungen durchsetzen.',
      related: ['mietrecht-gewerberaummiete', 'mietrecht-mietvertrag', 'mietrecht-kaution']
    },
    {
      id: 'verkehrsrecht-verkehrsunfall',
      areaId: 'verkehrsrecht',
      title: 'Verkehrsunfall',
      lead: 'Nach einem Unfall zählt ein schneller, sauberer Start. Wir übernehmen die rechtliche Abwicklung, damit Haftung, Reparatur, Ausfall und Versicherung korrekt geregelt werden.',
      body: [
        'Bei Verkehrsunfällen geht es selten nur um die Reparaturrechnung. Typisch sind Fragen zu Haftungsquote, Sachverständigenkosten, Nutzungsausfall, Mietwagen, Wiederbeschaffungswert oder Personenschäden.',
        'Wir strukturieren die Regulierung, kommunizieren mit Versicherern und setzen Ihre Ansprüche konsequent durch. Ziel ist eine vollständige und zügige Schadensabwicklung ohne unnötigen Reibungsverlust.'
      ],
      checklist: [
        'Prüfung der Haftungsfrage und Beweislage',
        'Durchsetzung von Reparaturkosten, Ausfall und Nebenkosten',
        'Kommunikation mit Haftpflichtversicherung und Beteiligten',
        'Begleitung bei Totalschaden, Wertminderung und Personenschaden'
      ],
      highlights: [
        ['Schneller Einstieg', 'Frühe Struktur verhindert späteren Streit mit dem Versicherer.'],
        ['Vollständigkeit', 'Wir denken den Schaden nicht nur in einer Position.'],
        ['Regulierung', 'Die Kommunikation läuft zentral und geordnet über uns.']
      ],
      approach: 'Wir übernehmen die Regulierung vom ersten Schreiben an, prüfen Angebote und Kürzungen kritisch und setzen Ihre Ansprüche vollständig und nachvollziehbar durch.',
      related: ['verkehrsrecht-schmerzensgeld', 'verkehrsrecht-unfallflucht', 'verkehrsrecht-fahrzeugkauf']
    },
    {
      id: 'verkehrsrecht-schmerzensgeld',
      areaId: 'verkehrsrecht',
      title: 'Schmerzensgeld',
      lead: 'Schmerzensgeld verlangt eine überzeugende Darstellung von Verletzung, Verlauf und Folgen. Wir bereiten Ansprüche sorgfältig auf und setzen sie konsequent durch.',
      body: [
        'Bei Personenschäden reicht eine bloße Behauptung nicht aus. Entscheidend sind medizinische Unterlagen, Verlauf, Einschränkungen im Alltag und eine nachvollziehbare Darstellung der Dauerfolgen.',
        'Wir bereiten Schmerzensgeldansprüche gemeinsam mit weiteren Positionen wie Haushaltsführungsschaden, Verdienstausfall oder Behandlungskosten strukturiert auf und vertreten Ihre Ansprüche gegenüber Versicherern und Gerichten.'
      ],
      checklist: [
        'Auswertung medizinischer Unterlagen und Dokumentation',
        'Bewertung von Schmerzensgeldhöhe und weiteren Schadenpositionen',
        'Kommunikation mit Haftpflichtversicherung und Gegenseite',
        'Durchsetzung außergerichtlich oder im Klageverfahren'
      ],
      highlights: [
        ['Dokumentation', 'Je besser der Verlauf belegt ist, desto stärker der Anspruch.'],
        ['Gesamtbild', 'Wir betrachten Schmerzensgeld nie isoliert.'],
        ['Konsequenz', 'Unangemessene Regulierung wird von uns nicht akzeptiert.']
      ],
      approach: 'Wir arbeiten die gesundheitlichen und wirtschaftlichen Folgen sorgfältig auf und vertreten Ihre Ansprüche mit der nötigen Genauigkeit und Durchsetzungskraft.',
      related: ['verkehrsrecht-verkehrsunfall', 'verkehrsrecht-alkohol-am-steuer', 'verkehrsrecht-unfallflucht']
    },
    {
      id: 'verkehrsrecht-alkohol-am-steuer',
      areaId: 'verkehrsrecht',
      title: 'Alkohol am Steuer',
      lead: 'Vorwürfe wegen Alkohol am Steuer sind straf- und führerscheinrechtlich heikel. Wir prüfen Messung, Verfahren und Verteidigungsansätze ohne Zeitverlust.',
      body: [
        'Schon ab dem ersten Vorwurf stellen sich parallel Fragen des Straf- oder Bußgeldverfahrens, des Fahrverbots und der Fahrerlaubnis. Gerade deshalb ist eine frühe Verteidigungsstrategie besonders wichtig.',
        'Wir prüfen Akte, Messung, Atem- oder Blutwerte, Verfahrensablauf und Einlassung. Ziel ist es, Risiken realistisch einzuordnen und die bestmögliche Lösung im konkreten Fall zu erreichen.'
      ],
      checklist: [
        'Prüfung von Messung, Blutprobe und Verfahrensablauf',
        'Bewertung von Fahrverbot, Entziehung und MPU-Risiken',
        'Entwicklung einer passenden Verteidigungsstrategie',
        'Vertretung im Bußgeld- oder Strafverfahren'
      ],
      highlights: [
        ['Doppelte Wirkung', 'Neben dem Verfahren drohen Folgen für die Fahrerlaubnis.'],
        ['Akteneinsicht', 'Die Verteidigung beginnt mit einer präzisen Aktenprüfung.'],
        ['Strategie', 'Wir entwickeln eine Lösung, die zum Fall und zur Lebenssituation passt.']
      ],
      approach: 'Wir reagieren früh, sichten die Unterlagen vollständig und beraten offen über Chancen, Grenzen und sinnvolle Schritte im weiteren Verfahren.',
      related: ['verkehrsrecht-unfallflucht', 'verkehrsrecht-blitzer', 'verkehrsrecht-rotlichtverstoss']
    },
    {
      id: 'verkehrsrecht-unfallflucht',
      areaId: 'verkehrsrecht',
      title: 'Unfallflucht',
      lead: 'Der Vorwurf der Unfallflucht ist ernst und kann schnell existenzielle Folgen für Fahrerlaubnis und Verfahren haben. Wir reagieren früh und strategisch.',
      body: [
        'Beim unerlaubten Entfernen vom Unfallort kommt es stark auf die konkrete Situation, Wahrnehmung, Wartezeit und den Ablauf nach dem Ereignis an. Pauschale Bewertungen greifen oft zu kurz.',
        'Wir prüfen die Ermittlungsakte, die Belastungssituation und mögliche Verteidigungsansätze. Gerade in frühen Verfahrensstadien lassen sich wichtige Weichen stellen.'
      ],
      checklist: [
        'Akteneinsicht und Prüfung des Ermittlungsstands',
        'Bewertung von Wahrnehmung, Wartepflicht und Nachmeldung',
        'Einordnung der Risiken für Fahrerlaubnis und Strafverfahren',
        'Strategische Begleitung im gesamten Verfahren'
      ],
      highlights: [
        ['Frühe Reaktion', 'Bei diesem Vorwurf ist die erste Verteidigungslinie besonders wichtig.'],
        ['Einzelfall', 'Kleine Details des Ablaufs können entscheidend sein.'],
        ['Fahrerlaubnis', 'Die Folgen reichen oft weit über das Strafmaß hinaus.']
      ],
      approach: 'Wir analysieren die Beweislage frühzeitig, stimmen die Kommunikation eng ab und entwickeln eine Verteidigung, die den gesamten Fall im Blick behält.',
      related: ['verkehrsrecht-alkohol-am-steuer', 'verkehrsrecht-verkehrsunfall', 'verkehrsrecht-rotlichtverstoss']
    },
    {
      id: 'verkehrsrecht-rotlichtverstoss',
      areaId: 'verkehrsrecht',
      title: 'Rotlichtverstoß',
      lead: 'Rotlichtverstöße führen oft zu Punkten, Bußgeld und Fahrverbot. Wir prüfen Messung, Ampelphase und die konkrete Beweislage im Einzelfall.',
      body: [
        'Ob einfacher oder qualifizierter Rotlichtverstoß vorliegt, hängt oft von technischen Details und dem Ablauf der Messung ab. Gerade bei drohendem Fahrverbot lohnt sich eine genaue Prüfung.',
        'Wir bewerten Messunterlagen, Lichtzeichenanlage, Fotos und Protokolle und prüfen, ob Verfahrens- oder Messfehler vorliegen oder ob besondere Umstände zu berücksichtigen sind.'
      ],
      checklist: [
        'Prüfung von Messverfahren, Unterlagen und Ampelphase',
        'Einordnung von Punkten, Bußgeld und Fahrverbot',
        'Bewertung besonderer Umstände des Einzelfalls',
        'Vertretung im Einspruchs- und Gerichtsverfahren'
      ],
      highlights: [
        ['Technische Prüfung', 'Messunterlagen und Anlagenlogik werden genau ausgewertet.'],
        ['Fahrverbot', 'Wir prüfen, ob es abgewendet oder reduziert werden kann.'],
        ['Einzelfallumstände', 'Nicht jeder Sachverhalt passt in ein Standardschema.']
      ],
      approach: 'Wir prüfen den Vorwurf nicht schematisch, sondern anhand der konkreten Mess- und Verkehrssituation. So lassen sich Verteidigungsoptionen belastbar bewerten.',
      related: ['verkehrsrecht-blitzer', 'verkehrsrecht-alkohol-am-steuer', 'verkehrsrecht-unfallflucht']
    },
    {
      id: 'verkehrsrecht-blitzer',
      areaId: 'verkehrsrecht',
      title: 'Blitzer',
      lead: 'Nicht jeder Blitzerbescheid ist belastbar. Wir kontrollieren Messverfahren, Unterlagen und Verfahrensfehler mit Blick auf einen sinnvollen Einspruch.',
      body: [
        'Geschwindigkeitsverstöße wirken auf den ersten Blick eindeutig. In der Praxis lohnt sich aber oft der Blick auf Messgerät, Aufstellung, Eichung, Auswertung und Dokumentation.',
        'Wir prüfen, ob das Verfahren angreifbar ist und wie hoch das praktische Entlastungspotenzial tatsächlich ist. Gerade bei drohendem Fahrverbot ist eine klare Bewertung wichtig.'
      ],
      checklist: [
        'Prüfung von Messgerät, Eichung und Auswerteunterlagen',
        'Bewertung von Verfahrensfehlern und Dokumentationsmängeln',
        'Einordnung von Punkten, Bußgeld und Fahrverbot',
        'Vertretung im Einspruchsverfahren'
      ],
      highlights: [
        ['Messprüfung', 'Technische Unterlagen werden von uns gezielt ausgewertet.'],
        ['Realistische Einschätzung', 'Wir sagen offen, wann sich ein Einspruch lohnt.'],
        ['Fahrverbot', 'Die Konsequenzen für Alltag und Beruf werden mitbedacht.']
      ],
      approach: 'Wir prüfen die Messsituation gründlich und entwickeln auf dieser Basis eine klare Empfehlung für Einspruch, Verhandlung oder Erledigung.',
      related: ['verkehrsrecht-rotlichtverstoss', 'verkehrsrecht-alkohol-am-steuer', 'verkehrsrecht-unfallflucht']
    },
    {
      id: 'verkehrsrecht-fahrzeugkauf',
      areaId: 'verkehrsrecht',
      title: 'Fahrzeugkauf',
      lead: 'Beim Fahrzeugkauf stehen häufig Mängel, Gewährleistung und Rückabwicklung im Raum. Wir begleiten Käufer und Verkäufer mit klarem Blick auf Vertrag und Beweise.',
      body: [
        'Streit beim Fahrzeugkauf dreht sich oft um Sachmängel, zugesicherte Eigenschaften, Rücktritt, Nachbesserung oder Schadensersatz. Entscheidend sind Vertragsinhalt, Übergabezustand und nachträgliche Entwicklung.',
        'Wir prüfen Kaufvertrag, Kommunikation, Gutachten und Mangelbild und entwickeln daraus eine belastbare Linie für Durchsetzung oder Verteidigung. Das gilt für Neuwagen, Gebrauchtwagen und Händlerfälle.'
      ],
      checklist: [
        'Prüfung von Kaufvertrag, Mangelbild und Gewährleistungsfragen',
        'Beratung zu Nacherfüllung, Rücktritt und Minderung',
        'Einbindung von Gutachten und technischer Bewertung',
        'Vertretung gegenüber Verkäufer, Händler oder Hersteller'
      ],
      highlights: [
        ['Beweise', 'Beim Fahrzeugkauf ist die Dokumentation des Mangels zentral.'],
        ['Vertragsinhalt', 'Was zugesichert wurde, ist oft der Schlüssel zum Fall.'],
        ['Lösung', 'Wir denken in praktikablen Ergebnissen statt in unnötiger Eskalation.']
      ],
      approach: 'Wir prüfen die kaufrechtliche Ausgangslage präzise, sichern die Beweissituation und setzen Ansprüche oder Einwendungen mit klarer Zielrichtung um.',
      related: ['verkehrsrecht-verkehrsunfall', 'verkehrsrecht-dieselskandal', 'verkehrsrecht-schmerzensgeld']
    },
    {
      id: 'verkehrsrecht-dieselskandal',
      areaId: 'verkehrsrecht',
      title: 'Dieselskandal',
      lead: 'Im Dieselskandal kommt es auf Fahrzeugtyp, Herstellerangaben und aktuelle Anspruchslage an. Wir prüfen, welche rechtlichen Wege wirtschaftlich sinnvoll sind.',
      body: [
        'Ansprüche im Zusammenhang mit unzulässigen Abschalteinrichtungen verlangen eine genaue Prüfung von Fahrzeugdaten, Kaufzeitpunkt, Herstellerbezug und bestehender Rechtsprechung. Nicht jeder Fall ist gleich gelagert.',
        'Wir bewerten, ob Schadensersatz, Rückabwicklung oder andere Ansätze realistisch sind und welche Nachweise benötigt werden. Dabei steht immer die wirtschaftlich vernünftige Entscheidung im Vordergrund.'
      ],
      checklist: [
        'Prüfung von Fahrzeugtyp, Hersteller und Anspruchslage',
        'Einordnung von Kaufdatum, Nutzung und möglichem Schaden',
        'Bewertung wirtschaftlich sinnvoller Anspruchswege',
        'Begleitung außergerichtlicher und gerichtlicher Schritte'
      ],
      highlights: [
        ['Einzelfallprüfung', 'Fahrzeugtyp und Erwerbssituation sind entscheidend.'],
        ['Wirtschaftlichkeit', 'Nicht jeder rechtliche Weg ist auch der beste Weg.'],
        ['Herstelleransprüche', 'Wir bewerten Chancen nüchtern und konkret.']
      ],
      approach: 'Wir prüfen Ihren Fall strukturiert, ordnen die aktuelle Anspruchslage ein und empfehlen nur Schritte, die rechtlich und wirtschaftlich überzeugen.',
      related: ['verkehrsrecht-fahrzeugkauf', 'verkehrsrecht-verkehrsunfall', 'verkehrsrecht-blitzer']
    }
  ];

  (function() {
    const root = document.getElementById('topic-pages-root');
    if (!root || !Array.isArray(window.topicDetailPages)) return;

    const topicMap = Object.fromEntries(window.topicDetailPages.map(function(topic) {
      return [topic.id, topic];
    }));

    root.innerHTML = window.topicDetailPages.map(function(topic) {
      const area = window.topicAreaMeta[topic.areaId];
      const heroStyle = area.heroBackground ? ' style="background-image:url(\'' + area.heroBackground + '\')"' : '';
      const insightCards = topic.highlights.map(function(item) {
        return '<article class="topic-insight-card"><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>';
      }).join('');
      const body = topic.body.map(function(paragraph) {
        return '<p>' + paragraph + '</p>';
      }).join('');
      const checklist = topic.checklist.map(function(item) {
        return '<li>' + item + '</li>';
      }).join('');
      const related = topic.related.map(function(id) {
        const entry = topicMap[id];
        if (!entry) return '';
        return '<li><a href="#" data-page-target="' + entry.id + '">' + entry.title + '</a></li>';
      }).join('');

      return '' +
        '<div id="' + topic.id + '" class="page">' +
          '<div class="topic-detail-hero"' + heroStyle + '>' +
            '<div class="topic-detail-overlay"></div>' +
            '<div class="topic-detail-shell">' +
              '<div class="topic-detail-eyebrow">' + area.title + '</div>' +
              '<h1 class="topic-detail-title">' + topic.title + '</h1>' +
              '<p class="topic-detail-lead">' + topic.lead + '</p>' +
              '<a href="#" class="btn btn-gold" onclick="showPage(\'kontakt\');return false;">Jetzt Beratung anfragen</a>' +
            '</div>' +
          '</div>' +
          '<div class="topic-detail-body">' +
            '<div class="topic-detail-grid">' +
              '<div>' +
                '<div class="topic-copy-card">' +
                  '<h2>Worum es geht</h2>' +
                  body +
                '</div>' +
                '<div class="topic-copy-card">' +
                  '<h2>Typische Schwerpunkte</h2>' +
                  '<ul class="topic-checklist">' + checklist + '</ul>' +
                '</div>' +
                '<div class="topic-copy-card">' +
                  '<h2>Unsere Beratung</h2>' +
                  '<p>' + topic.approach + '</p>' +
                '</div>' +
              '</div>' +
              '<aside>' +
                '<div class="sidebar-card">' +
                  '<h3>Jetzt beraten lassen</h3>' +
                  '<span class="sidebar-phone">069 299 8920</span>' +
                  '<p>' + area.contactCopy + '</p>' +
                  '<a href="#" class="btn" style="width:100%;text-align:center;display:block" data-page-target="kontakt">Termin anfragen</a>' +
                '</div>' +
                '<div class="sidebar-card-white">' +
                  '<h3>Passend dazu</h3>' +
                  '<ul class="topic-related-list">' + related + '</ul>' +
                  '<a href="#" class="topic-area-link" data-page-target="' + area.pageId + '">Zurück zu ' + area.title + '</a>' +
                '</div>' +
                '<div class="sidebar-card-white">' +
                  '<h3>Ihre Anwälte</h3>' +
                  area.lawyers.map(function(l,idx){
                    var mb = idx < area.lawyers.length-1 ? 'margin-bottom:14px;' : '';
                    return '<div style="display:flex;align-items:center;gap:12px;' + mb + 'cursor:pointer" onclick="showPage(\'' + l.page + '\')">' +
                      '<img src="' + l.photo + '" style="width:60px;height:60px;object-fit:cover;object-position:top;border-radius:2px;flex-shrink:0">' +
                      '<div><strong style="font-size:13px">' + l.name + '</strong><br><span style="font-size:11px;color:var(--teal)">' + l.title + '</span></div>' +
                    '</div>';
                  }).join('') +
                '</div>' +
              '</aside>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');
  })();



  (function() {
    const feedSource = document.getElementById('blog-feed-data');
    const homeGrid = document.getElementById('home-blog-preview-grid');
    const archiveGrid = document.getElementById('blog-archive-grid');
    const filterBar = document.getElementById('blog-filter-bar');
    const paginationWrap = document.getElementById('blog-archive-pagination');
    const pageStatus = document.getElementById('blog-archive-page-status');
    const pageDots = document.getElementById('blog-archive-page-dots');

    if (!feedSource || !archiveGrid || !filterBar || !paginationWrap || !pageStatus || !pageDots) return;

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function formatDate(value) {
      const date = new Date(value + 'T12:00:00');
      if (Number.isNaN(date.getTime())) return value;
      return date.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }

    function trimExcerpt(value) {
      const text = String(value || '').trim();
      if (text.length <= 230) return text;
      return text.slice(0, 227).trim() + '...';
    }

    const blogPosts = feedSource.textContent
      .trim()
      .split('\n')
      .filter(Boolean)
      .map(function(line) {
        const parts = line.split('\t');
        return {
          date: parts[0],
          category: parts[1],
          title: parts[2],
          excerpt: parts[3],
          url: parts[4]
        };
      });

    const preferredOrder = ['Alle', 'Aktuelles', 'Arbeitsrecht', 'Verkehrsrecht', 'Mietrecht', 'Allgemein', 'News', 'Rechtssprechung'];
    const categories = Array.from(new Set(blogPosts.map(function(post) {
      return post.category;
    })));
    const orderedCategories = preferredOrder.filter(function(category) {
      return category === 'Alle' || categories.indexOf(category) !== -1;
    }).concat(categories.filter(function(category) {
      return preferredOrder.indexOf(category) === -1;
    }));

    let activeCategory = 'Alle';
    let activePage = 1;
    const postsPerPage = 6;
    const maxVisibleDots = 7;

    function getVisiblePosts() {
      if (activeCategory === 'Alle') return blogPosts;
      return blogPosts.filter(function(post) {
        return post.category === activeCategory;
      });
    }

    function getTotalPages(visiblePosts) {
      return Math.max(1, Math.ceil(visiblePosts.length / postsPerPage));
    }

    function getVisiblePageNumbers(totalPages) {
      if (totalPages <= maxVisibleDots) {
        return Array.from({ length: totalPages }, function(_, index) {
          return index + 1;
        });
      }

      const halfWindow = Math.floor(maxVisibleDots / 2);
      let start = Math.max(1, activePage - halfWindow);
      let end = start + maxVisibleDots - 1;

      if (end > totalPages) {
        end = totalPages;
        start = end - maxVisibleDots + 1;
      }

      return Array.from({ length: end - start + 1 }, function(_, index) {
        return start + index;
      });
    }

    var blogImages = {
      'Arbeitsrecht':    'assets/blog-1.avif',
      'Verkehrsrecht':   'assets/blog-2.avif',
      'Mietrecht':       'assets/blog-designwohnung.avif',
      'Allgemein':       'assets/blog-3.avif',
      'Aktuelles':       'assets/blog-1.avif',
      'News':            'assets/blog-2.avif',
      'Rechtssprechung': 'assets/blog-3.avif'
    };
    var fallbackImages = ['assets/blog-1.avif', 'assets/blog-2.avif', 'assets/blog-3.avif'];

    function renderCard(post, index) {
      var img = blogImages[post.category] || fallbackImages[(index || 0) % 3];
      return '' +
        '<a class="blog-card" href="' + escapeHtml(post.url) + '" target="_blank" rel="noopener noreferrer">' +
          '<div class="blog-card-img" style="background-image:url(\'' + escapeHtml(img) + '\')"></div>' +
          '<div class="blog-content">' +
            '<div class="blog-meta">' +
              '<div class="blog-date">' + escapeHtml(formatDate(post.date)) + '</div>' +
              '<span class="blog-category">' + escapeHtml(post.category) + '</span>' +
            '</div>' +
            '<h3 class="blog-title">' + escapeHtml(post.title) + '</h3>' +
            '<span class="blog-readmore">Zum Beitrag &rarr;</span>' +
          '</div>' +
        '</a>';
    }

    function renderHomePreview() {
      if (homeGrid) {
        homeGrid.innerHTML = blogPosts.slice(0, 3).map(renderCard).join('');
        if (window.MotionController) window.MotionController.prepare(homeGrid);
      }
    }

    function renderArchive() {
      const visiblePosts = getVisiblePosts();
      const totalPages = getTotalPages(visiblePosts);

      if (activePage > totalPages) {
        activePage = totalPages;
      }
      if (activePage < 1) {
        activePage = 1;
      }

      const pageStart = (activePage - 1) * postsPerPage;
      const pagedPosts = visiblePosts.slice(pageStart, pageStart + postsPerPage);

      archiveGrid.innerHTML = pagedPosts.map(renderCard).join('');
      renderPagination(totalPages);
      if (window.MotionController) window.MotionController.prepare(archiveGrid);
    }

    function renderPagination(totalPages) {
      if (totalPages <= 1) {
        paginationWrap.hidden = true;
        pageStatus.textContent = '';
        pageDots.innerHTML = '';
        return;
      }

      paginationWrap.hidden = false;
      pageStatus.textContent = 'Seite ' + activePage + ' von ' + totalPages;
      pageDots.innerHTML = getVisiblePageNumbers(totalPages).map(function(pageNumber) {
        const activeClass = pageNumber === activePage ? ' active' : '';
        return '<button type="button" class="blog-page-dot' + activeClass + '" data-blog-page="' + pageNumber + '" aria-label="Seite ' + pageNumber + '"' + (pageNumber === activePage ? ' aria-current="page"' : '') + '></button>';
      }).join('');
    }

    function renderFilters() {
      filterBar.innerHTML = orderedCategories.map(function(category) {
        const activeClass = category === activeCategory ? ' active' : '';
        return '<button type="button" class="blog-filter-btn' + activeClass + '" data-blog-filter="' + escapeHtml(category) + '">' + escapeHtml(category) + '</button>';
      }).join('');
    }

    filterBar.addEventListener('click', function(event) {
      const button = event.target.closest('[data-blog-filter]');
      if (!button) return;
      activeCategory = button.getAttribute('data-blog-filter');
      activePage = 1;
      renderFilters();
      renderArchive();
    });

    pageDots.addEventListener('click', function(event) {
      const button = event.target.closest('[data-blog-page]');
      if (!button) return;
      activePage = Number(button.getAttribute('data-blog-page')) || 1;
      renderArchive();
    });

    renderHomePreview();
    renderFilters();
    renderArchive();
  })();



  (function() {
    const lawyerPages = Array.from(document.querySelectorAll('.page')).filter(function(page) {
      return page.querySelector('.lawyer-copy') && page.querySelector('.lawyer-name');
    });

    lawyerPages.forEach(function(page) {
      if (page.querySelector('.lawyer-copy-toggle')) return;

      const copy = page.querySelector('.lawyer-copy');
      const name = page.querySelector('.lawyer-name');
      const detailPanel = page.querySelector('.lawyer-hero > div:last-child');
      if (!copy || !name) return;

      const toggleSections = detailPanel ? Array.from(detailPanel.querySelectorAll('.qual-section')).filter(function(section) {
        const heading = section.querySelector('h4');
        const label = heading ? heading.textContent.trim() : '';
        return label === 'Qualifikationen' || label === 'Mitgliedschaften';
      }) : [];

      const toggleTargets = toggleSections.concat(copy);
      toggleTargets.forEach(function(target, index) {
        target.id = target.id || (page.id + '-details-' + index);
        target.hidden = true;
      });

      const wrap = document.createElement('div');
      wrap.className = 'lawyer-copy-toggle-wrap';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lawyer-copy-toggle';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', toggleTargets.map(function(target) {
        return target.id;
      }).join(' '));
      button.setAttribute('aria-label', 'Mehr über ' + name.textContent.trim() + ' lesen');

      const icon = document.createElement('span');
      icon.className = 'lawyer-copy-toggle-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '▾';

      const label = document.createElement('span');
      label.textContent = 'Mehr anzeigen';

      button.appendChild(icon);
      button.appendChild(label);
      wrap.appendChild(button);
      const insertionTarget = toggleSections[0] || copy;
      insertionTarget.parentNode.insertBefore(wrap, insertionTarget);

      button.addEventListener('click', function() {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        toggleTargets.forEach(function(target) {
          target.hidden = expanded;
        });
        label.textContent = expanded ? 'Mehr anzeigen' : 'Weniger anzeigen';
      });
    });
  })();



  (function() {
    const pages = Array.from(document.querySelectorAll('.page'));
    const topNavIds = ['nav-home', 'nav-anwaelte', 'nav-rechtsgebiete', 'nav-adac', 'nav-blog', 'nav-kosten', 'nav-ki-bot', 'nav-aktuelles'];
    const navGroupMap = {
      home: 'nav-home',
      kanzlei: 'nav-home',
      'ueber-uns': 'nav-home',
      impressum: 'nav-home',
      kontakt: 'nav-home',
      anwaelte: 'nav-anwaelte',
      pia: 'nav-anwaelte',
      joerg: 'nav-anwaelte',
      andreas: 'nav-anwaelte',
      michael: 'nav-anwaelte',
      franka: 'nav-anwaelte',
      larissa: 'nav-anwaelte',
      noah: 'nav-anwaelte',
      rechtsgebiete: 'nav-rechtsgebiete',
      arbeitsrecht: 'nav-rechtsgebiete',
      verkehrsrecht: 'nav-rechtsgebiete',
      mietrecht: 'nav-rechtsgebiete',
      zivilrecht: 'nav-rechtsgebiete',
      adac: 'nav-adac',
      blog: 'nav-blog',
      kosten: 'nav-kosten',
      'ki-bot': 'nav-ki-bot',
      aktuelles: 'nav-aktuelles'
    };

    (window.topicDetailPages || []).forEach(function(topic) {
      navGroupMap[topic.id] = 'nav-rechtsgebiete';
    });

    function setActiveTopNav(targetId) {
      topNavIds.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
      });
      if (targetId && document.getElementById(targetId)) {
        document.getElementById(targetId).classList.add('active');
      }
    }

    
  window.toggleLawyerDetails = function(btn) {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    var details = btn.closest('.lp-split').nextElementSibling;
    if (!expanded) {
      details.removeAttribute('hidden');
      setTimeout(function(){ details.scrollIntoView({behavior:'smooth',block:'start'}); }, 60);
    } else {
      details.setAttribute('hidden', '');
    }
  };

  window.showPage = function(pageId) {
      const target = document.getElementById(pageId);
      if (!target) return;
      pages.forEach(function(page) { page.classList.remove('active'); });
      target.classList.add('active');
      setActiveTopNav(navGroupMap[pageId] || 'nav-home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof window.updateNavState === 'function') window.updateNavState();
    };

    document.addEventListener('click', function(event) {
      const trigger = event.target.closest('[data-page-target]');
      if (trigger) {
        event.preventDefault();
        window.showPage(trigger.getAttribute('data-page-target'));
        return;
      }
      const a = event.target.closest('a[href="#"]');
      if (a) event.preventDefault();
    });

    document.addEventListener('keydown', function(event) {
      const trigger = event.target.closest('[data-page-target]');
      if (!trigger || trigger.tagName === 'A') return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.showPage(trigger.getAttribute('data-page-target'));
      }
    });

    document.querySelectorAll('img[alt="ADAC"], img[alt="ADAC Vertragsanwalt"]').forEach(function(img) {
      img.style.cursor = 'pointer';
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', 'Zur ADAC-Seite');
      img.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.showPage('adac');
      });
      img.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopPropagation();
          window.showPage('adac');
        }
      });
    });

    setActiveTopNav('nav-home');
  })();

  // Populate new blog preview grid on home page
  (function() {
    var grid = document.getElementById('home-blog-preview-grid-new');
    if (!grid || !window.blogPosts) return;
    var posts = window.blogPosts.slice(0, 3);
    grid.innerHTML = posts.map(function(p) {
      return '<div class="blog-card-new" onclick="showBlogPost(\''+p.id+'\')">'+
        '<div class="blog-card-img-wrap"><img class="blog-card-img-new" src="'+p.image+'" alt="'+p.title+'"></div>'+
        '<div class="blog-card-body">'+
        '<span class="blog-tag">'+p.category+'</span>'+
        '<div class="blog-card-title-new">'+p.title+'</div>'+
        '<div class="blog-card-date">'+p.date+'</div>'+
        '</div></div>';
    }).join('');
    if (window.MotionController) window.MotionController.prepare(grid);
  })();




  (function() {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var observer = null;
    var interactiveSelector = [
      '.practice-smk-card',
      '.value-card-new',
      '.testimonial-card-new',
      '.blog-card-new',
      '.blog-card',
      '.practice-card',
      '.team-card-new',
      '.team-card',
      '.topic-card',
      '.sidebar-card',
      '.sidebar-card-white',
      '.topic-copy-card',
      '.contact-form',
      '.value-card',
      '.schwerpunkt-card',
      '.home-about-collage-item',
      '.number-item',
      '.contact-pill',
      '.lawyer-link-list a',
      '.contact-detail'
    ].join(', ');

    var revealGroups = [
      { selector: 'nav', effect: 'nav-drop', baseDelay: 40, distance: 24 },
      { selector: '#home .hero-eyebrow', effect: 'fade-right', baseDelay: 120, distance: 36 },
      { selector: '#home .hero-title', effect: 'fade-right', baseDelay: 220, distance: 56 },
      { selector: '#home .hero-info-pill', effect: 'rise', baseDelay: 420, step: 90, distance: 28 },
      { selector: '#home .hero-info-cta', effect: 'fade-left', baseDelay: 620, distance: 34 },
      { selector: '.page-hero-content .section-eyebrow, .hero-bg-content .section-eyebrow, .topic-detail-eyebrow', effect: 'fade-right', baseDelay: 80, distance: 30 },
      { selector: '.page-hero-content h1, .hero-bg-content h1, .topic-detail-title', effect: 'rise', baseDelay: 160, distance: 46 },
      { selector: '.page-hero-content p, .hero-bg-content p, .topic-detail-lead', effect: 'rise', baseDelay: 240, distance: 34 },
      { selector: '.topic-detail-actions .btn, .cta-strip-actions .btn', effect: 'rise', baseDelay: 320, step: 90, distance: 26 },
      { selector: '.section-label, .section-eyebrow', effect: 'fade-right', baseDelay: 40, distance: 24 },
      { selector: '.section-heading, .section-title', effect: 'rise', baseDelay: 110, distance: 34 },
      { selector: '.section-rule, .section-divider', effect: 'line', baseDelay: 160 },
      { selector: '.about-grid > :first-child, .practice-smk-wrap > :first-child, .kanzlei-intro > :first-child, .content-with-sidebar > :first-child, .topic-detail-grid > :first-child, .contact-grid > :first-child, .lawyer-hero > :first-child, .welcome-grid > :first-child', effect: 'fade-right', baseDelay: 120, distance: 52 },
      { selector: '.about-grid > :last-child, .practice-smk-wrap > :last-child, .kanzlei-intro > :last-child, .content-with-sidebar > :last-child, .topic-detail-grid > :last-child, .contact-grid > :last-child, .lawyer-hero > :last-child, .welcome-grid > :last-child', effect: 'fade-left', baseDelay: 210, distance: 52 },
      { selector: '.home-about-collage-item, .office-grid > *, .lawyer-photo', effect: 'zoom', baseDelay: 120, step: 90, distance: 24 },
      { selector: '.value-grid > *, .kanzlei-values > *, .team-grid-new > *, .testimonials-grid-new > *, .blog-grid-new > *, .practice-grid > *, .team-grid > *, .testimonials-grid > *, .topics-grid > *, .topic-insights-grid > *, .numbers-strip > *, .footer-inner > *', effect: 'rise', baseDelay: 120, step: 80, distance: 30 },
      { selector: '.contact-detail, .sidebar-card, .sidebar-card-white, .topic-copy-card, .lawyer-copy-block, .qual-section, .article-wrap > *, .schwerpunkt-card, .footer-bottom-bar > *', effect: 'rise', baseDelay: 90, step: 70, distance: 26 }
    ];

    function collect(root, selector) {
      var nodes = [];
      if (!root) return nodes;
      if (root.matches && root.matches(selector)) nodes.push(root);
      return nodes.concat(Array.from(root.querySelectorAll(selector)));
    }

    function ensureObserver() {
      if (observer || reduceMotion.matches) return;
      observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('reveal-ready');
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
      });
    }

    function registerReveal(el, effect, options) {
      if (!el || el.dataset.revealBound === 'true') return;
      el.dataset.revealBound = 'true';
      el.dataset.reveal = effect;
      if (options && typeof options.delay === 'number') {
        el.style.setProperty('--reveal-delay', String(options.delay) + 'ms');
      }
      if (options && typeof options.distance === 'number') {
        el.style.setProperty('--reveal-distance', String(options.distance) + 'px');
      }
      el.classList.remove('reveal-ready');
      el.classList.add('is-visible');
    }

    function registerInteractive(root) {
      collect(root, interactiveSelector).forEach(function(el) {
        if (el.dataset.interactiveBound === 'true') return;
        el.dataset.interactiveBound = 'true';
        el.classList.add('interactive-sheen');
        el.style.setProperty('--pointer-x', '50%');
        el.style.setProperty('--pointer-y', '50%');
        el.addEventListener('pointermove', function(event) {
          var rect = el.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          var x = ((event.clientX - rect.left) / rect.width) * 100;
          var y = ((event.clientY - rect.top) / rect.height) * 100;
          el.style.setProperty('--pointer-x', x.toFixed(2) + '%');
          el.style.setProperty('--pointer-y', y.toFixed(2) + '%');
        });
        el.addEventListener('pointerleave', function() {
          el.style.setProperty('--pointer-x', '50%');
          el.style.setProperty('--pointer-y', '50%');
        });
      });
    }

    function prepare(root) {
      var scope = root || document;
      revealGroups.forEach(function(group) {
        collect(scope, group.selector).forEach(function(el, index) {
          registerReveal(el, group.effect, {
            delay: (group.baseDelay || 0) + ((group.step || 0) * index),
            distance: group.distance
          });
        });
      });
      registerInteractive(scope);
    }

    function refresh(pageId) {
      var page = pageId ? document.getElementById(pageId) : document.querySelector('.page.active');
      if (!page) page = document;
      prepare(page);
    }

    function wrapShowPage() {
      if (!window.showPage || window.showPage.__motionWrapped) return;
      var originalShowPage = window.showPage;
      var wrapped = function(pageId) {
        originalShowPage(pageId);
        window.requestAnimationFrame(function() {
          refresh(pageId);
        });
      };
      wrapped.__motionWrapped = true;
      window.showPage = wrapped;
    }

    window.MotionController = {
      prepare: prepare,
      refresh: refresh
    };

    prepare(document);
    wrapShowPage();
    refresh('home');
  })();



/* ── NAV SCROLL SHADOW + HERO PARALLAX ──────────────────── */
(function() {
  var nav    = document.querySelector('nav');
  var heroBg = document.querySelector('.hero-bg-img');
  var homePage = document.getElementById('home');

  function updateNavState() {
    if (!nav) return;
    var sy = window.scrollY;
    var isHomeActive = !!(homePage && homePage.classList.contains('active'));

    if (!isHomeActive || sy > 20) nav.classList.add('nav--scrolled');
    else nav.classList.remove('nav--scrolled');
  }

  function onScroll() {
    var sy = window.scrollY;

    updateNavState();

    /* parallax — only while hero is in view */
    if (heroBg) {
      var heroEl = heroBg.closest('.hero');
      if (heroEl && sy < heroEl.offsetHeight) {
        /* move image up at 38% of scroll speed — smooth & subtle */
        heroBg.style.transform = 'translateY(' + (sy * 0.38) + 'px)';
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.updateNavState = updateNavState;
  onScroll(); /* init */
})();



/* ── SCROLL REVEAL OBSERVER ─────────────────────────────── */
(function(){
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -48px 0px'});

  function observe(){
    /* only observe elements inside the active home page */
    var home = document.getElementById('home');
    if(!home) return;
    home.querySelectorAll('[data-reveal],[data-stagger]').forEach(function(el){
      observer.observe(el);
    });
  }

  /* run on initial load */
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }

  /* re-run whenever showPage() switches to home */
  var _orig = window.showPage;
  window.showPage = function(id){
    _orig && _orig(id);
    if(id==='home') setTimeout(observe, 80);
  };
})();




/* ── DIRECT NAV OVERRIDE — bypasses all wrapper chains ── */
(function(){
  var allPages = Array.from(document.querySelectorAll('.page'));
  var navIds   = ['nav-home','nav-anwaelte','nav-rechtsgebiete','nav-adac','nav-blog','nav-kosten','nav-ki-bot'];
  var navMap   = {home:'nav-home',kanzlei:'nav-home','ueber-uns':'nav-home',impressum:'nav-home',kontakt:'nav-home',anwaelte:'nav-anwaelte',pia:'nav-anwaelte',joerg:'nav-anwaelte',andreas:'nav-anwaelte',michael:'nav-anwaelte',franka:'nav-anwaelte',larissa:'nav-anwaelte',noah:'nav-anwaelte',arbeitsrecht:'nav-rechtsgebiete',verkehrsrecht:'nav-rechtsgebiete',mietrecht:'nav-rechtsgebiete',zivilrecht:'nav-rechtsgebiete','arbeitsrecht-aufhebungsvertrag':'nav-rechtsgebiete','arbeitsrecht-abfindung':'nav-rechtsgebiete','arbeitsrecht-abmahnung':'nav-rechtsgebiete','arbeitsrecht-arbeitgeberberatung':'nav-rechtsgebiete','arbeitsrecht-banken-arbeitsrecht':'nav-rechtsgebiete','arbeitsrecht-betriebsraete':'nav-rechtsgebiete','arbeitsrecht-bonus':'nav-rechtsgebiete','arbeitsrecht-elternzeit':'nav-rechtsgebiete','arbeitsrecht-inhouse-schulungen':'nav-rechtsgebiete','arbeitsrecht-kuendigung':'nav-rechtsgebiete','arbeitsrecht-sozialplan':'nav-rechtsgebiete','arbeitsrecht-zeugnis':'nav-rechtsgebiete','verkehrsrecht-alkohol-am-steuer':'nav-rechtsgebiete','verkehrsrecht-blitzer':'nav-rechtsgebiete','verkehrsrecht-dieselskandal':'nav-rechtsgebiete','verkehrsrecht-fahrzeugkauf':'nav-rechtsgebiete','verkehrsrecht-rotlichtverstoss':'nav-rechtsgebiete','verkehrsrecht-schmerzensgeld':'nav-rechtsgebiete','verkehrsrecht-unfallflucht':'nav-rechtsgebiete','verkehrsrecht-verkehrsunfall':'nav-rechtsgebiete','mietrecht-energiekosten':'nav-rechtsgebiete','mietrecht-gewerberaummiete':'nav-rechtsgebiete','mietrecht-kaution':'nav-rechtsgebiete','mietrecht-kuendigung':'nav-rechtsgebiete','mietrecht-maklerrecht':'nav-rechtsgebiete','mietrecht-mietvertrag':'nav-rechtsgebiete','mietrecht-schoenheitsreparaturen':'nav-rechtsgebiete','mietrecht-weg':'nav-rechtsgebiete',adac:'nav-adac',blog:'nav-blog',kosten:'nav-kosten','ki-bot':'nav-ki-bot'};
  window.showPage = function(id){
    /* refresh page list to catch dynamically inserted pages */
    var pages = document.querySelectorAll('.page');
    var target = document.getElementById(id);
    if(!target) return;
    Array.from(pages).forEach(function(p){ p.classList.remove('active'); });
    target.classList.add('active');
    /* update nav active state */
    navIds.forEach(function(nid){ var el=document.getElementById(nid); if(el) el.classList.remove('active'); });
    var navTarget = navMap[id] || 'nav-home';
    var navEl = document.getElementById(navTarget);
    if(navEl) navEl.classList.add('active');
    window.scrollTo(0,0);
  };
})();
