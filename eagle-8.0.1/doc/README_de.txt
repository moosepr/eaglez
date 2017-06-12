==============================================

  E A G L E - L A Y O U T - S O F T W A R E
         Hinweise zur Version 8.0.1

==============================================

Update von einer früheren Version
---------------------------------

WICHTIG: Falls Sie von einer früheren EAGLE-Version updaten, lesen Sie
*******  bitte die Datei doc/UPDATE komplett durch bevor Sie beginnen
         mit dieser neuen Version zu arbeiten!

Handbuch + Tutorial
-------------------

Das EAGLE-Handbuch und -Tutorial im PDF-Format befindet sich im Verzeichnis
"doc". Bitte lesen Sie sich zumindest das Tutorial durch, bevor Sie mit
EAGLE zu arbeiten beginnen.

Minimale System-Voraussetzungen
-------------------------------

  - Intel-PC-basierendes Linux
  - Kernel-Version 2.6
  - X11 mit mindestens 8bpp Farbtiefe
  - Libraries:
    libssl.so.1.0.0
    libcrypto.so.1.0.0
    Für 64 Bit ist libc.so.6 mindestens mit Unterversion GLIBC_2.14 erforderlich.
  - CUPS (um zu drucken)
  - Die CPU muß SSE unterstützen (könnte bei älteren CPUs fehlen)

Installation
------------

Führen Sie das selbstentpackende Shell-Script eagle-lin32-8.0.1.run
bzw. eagle-lin64-8.0.1.run aus und warten Sie, bis der
EAGLE-Setup-Dialog erscheint (dies kann einige Sekunden dauern).
Sollten Sie von einer CD-ROM installieren und keine Programme von CD
ausführen können, so kann es erforderlich sein, das Script zunächst auf
Ihre Festplatte zu kopieren.

Falls Sie EAGLE aus einer Shell ohne grafische Anzeige heraus installieren
wollen, können Sie das Script mit dem Namen des Verzeichnisses aufrufen,
in das EAGLE installiert werden soll. Zum Beispiel würde

  eagle-lin64-8.0.1.run /opt

die 64-Bit-Version von EAGLE in das Verzeichnis '/opt/eagle-8.0.1'
installieren.

Benutzung
---------

Um EAGLE zu benutzen starten Sie einfach das Programm

  /home/username/eagle-8.0.1/bin/eagle

(vorausgesetzt, Sie haben EAGLE im vorgeschlagenen Verzeichnis unterhalb
Ihres Benutzerverzeichnisses installiert).

Grafikfehler beim Verschieben des Fensterinhaltes
-------------------------------------------------

Falls Sie Grafikfehler beim Verschieben des Fensterinhaltes feststellen,
kann es sein, dass Sie den "Composite"-Modus in Ihren Grafikeinstellung
abschalten müssen.
Dies kann durch Hinzufügen folgender Zeilen zu Ihrer X-Konfigurationsdatei
erfolgen:

Section "Extensions"
   Option  "Composite" "Disable"
EndSection

Octagon-Blenden im Gerber RS-274X Format
----------------------------------------

Die verschiedenen auf dem Markt befindlichen Gerber-Viewer sind sich
nicht einig darüber, wie im RS-274X-Format Octagon-Blenden darzustellen
sind. Es gibt hier die unterschiedlichsten Auffassungen bezüglich der
Interpretation des Durchmessers und der Rotation.
EAGLE geht bei der Erzeugung von Octagon-Blenden im RS-274X-Format davon
aus, dass der Viewer den Durchmesser als den Abstand zweier
gegenüberliegender Eckpunkte interpretiert, und dass zur Erreichung der
korrekten Rotation eine Drehung um 22.5 Grad nötig ist. Sollte Ihr
spezieller Gerber-Viewer diese Daten anders interpretieren, so können Sie
dies in der Datei 'eagle.def' den speziellen Gegebenheiten Ihres Viewers
anpassen.

WICHTIG: Bevor Sie Daten im RS-274X-Format an Ihren Leiterplattenhersteller
schicken, sollten Sie sich unbedingt mit diesem in Verbindung setzen um zu
erfragen, wie *seine* Software die Octagon-Daten interpretiert.

Sprache
-------

EAGLE benutzt die selbe Sprache wie das Betriebssystem, auf dem es läuft
(vorausgesetzt, die entsprechenden sprachspezifischen Text-Dateien sind
vorhanden). Um dies zu überschreiben, können Sie die Umgebungsvariable
LANG auf den gewünschten Wert setzen, wie in

  SET LANG=en_US     (unter Windows)

bevor Sie EAGLE starten.


                         ===================
========================= VERTRIEBSHINWEISE ===============================
                         ===================

EAGLE ist ein Programm der: CadSoft Computer GmbH
                            Pleidolfweg 15
                            D-84568 Pleiskirchen
                            Tel.    08635/6989-10
                            Fax:    08635/6989-40
                            E-Mail: info@cadsoft.de
                            Web:    http://www.cadsoft.io

EAGLE ist verfügbar für Linux-, Mac OS X- und Windows-Rechner.

===========================================================================
"Linux" ist ein eingetragenes Warenzeichen von Linus Torvalds.
"Mac", "Mac OS" und "Apple" sind eingetragene Warenzeichen von Apple Computer, Inc.
"Windows" ist ein eingetragenes Warenzeichen der Microsoft Corporation.
===========================================================================

Copyright (c) 2016 CadSoft Computer GmbH - Alle Rechte vorbehalten

