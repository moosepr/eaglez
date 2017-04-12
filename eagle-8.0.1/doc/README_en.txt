==============================================

  E A G L E - L A Y O U T - S O F T W A R E
       Information about Version 8.0.1

==============================================

Updating from older versions
----------------------------

IMPORTANT: If you are updating from an older version of EAGLE, please make
*********  sure you read the file doc/UPDATE entirely before working
           with this new version!

Manual + Tutorial
-----------------

The EAGLE manual and tutorial in PDF format can be found in the "doc"
subdirectory. Please make sure you read at least the tutorial before
beginning to work with EAGLE.

Minimum System Requirements
---------------------------

  - Intel PC based Linux
  - Kernel version 2.6
  - X11 in at least 8bpp mode
  - Libraries:
    libssl.so.1.0.0
    libcrypto.so.1.0.0
    For 64 bit the library libc.so.6 needs to have minimal sub version GLIBC_2.14
  - CUPS (for printing)
  - The cpu needs to support SSE (could miss on older CPUs)

Installation
------------

Run the self extracting shell script eagle-lin32-8.0.1.run
resp. eagle-lin64-8.0.1.run and wait until the EAGLE Setup dialog
appears (this may take a few seconds).
In case you are installing from CD-ROM and can't execute programs from
the CD, you may need to copy this script to your hard disk first.

If you want to install EAGLE from a shell without a graphical display,
you can call the script with the name of the directory into which EAGLE
shall be installed. For example

  eagle-lin64-8.0.1.run /opt

would install the EAGLE 64 bit version into the directory '/opt/eagle-8.0.1'.

Usage
-----

To use EAGLE just run the program

  /home/username/eagle-8.0.1/bin/eagle

(assuming you have installed EAGLE into the default location under
your home directory).

Graphics distortions when scrolling windows
-------------------------------------------

If you encounter graphics distortions when scrolling windows, you may need
to disable "composite" mode in your graphics setup.
This can be done by adding the following lines to your X configuration file:

Section "Extensions"
   Option  "Composite" "Disable"
EndSection

Octagon apertures in Gerber RS-274X format
------------------------------------------

The various Gerber viewers on the market have different ideas about how to
display octagon apertures in RS-274X format. There are all kinds of
interpretations of the diameter and rotation.
When generating octagon apertures in RS-274X format, EAGLE assumes that the
viewer will interpret the diameter as the distance between two opposite
corners, and that it has to be rotated by 22.5 degrees to achieve the
proper alignment. In case your specific viewer interprets these data
differently you can adjust this to your viewer's special needs in the file
'eagle.def'.

IMPORTANT: Before sending data in RS-274X format to your board house you
should make sure you ask them how *their* software will interpret octagon
data.

Electrical Schematics
---------------------

This EAGLE version is suited for drawing schematics and generating other
documentation for electrical projects, according to the European standard.
The descriptions of the specific libraries and user language programs,
as well as the tutorial covering this topic, are written in German.
At present, there are no plans to offer these features for the English-
speaking market. Feel free to use them, but there will be no support
in English.

Language
--------

EAGLE uses the same language as the operating system it is running on
(provided the necessary language specific text files are available).
To override this, you can set the environment variable LANG to the
desired value, as in

  SET LANG=de_DE     (under Windows)

before starting EAGLE.


                         ===================
========================= SALES INFORMATION ===============================
                         ===================

EAGLE is a program of CadSoft Computer GmbH.

CadSoft can be contacted in the USA at:
                         Autodesk - CadSoft Computer
                         15800 Pines Blvd. Suite 338
                         Pembroke Pines, FL 33027
                         Phone:  954-362-5227
                         Hotline:954-362-5228
                         E-Mail: info@cadsoftusa.com
                         Web:    http://www.cadsoft.io

EAGLE is available for Linux, Mac OS X and Windows platforms.

===========================================================================
"Linux" is a registered trademark of Linus Torvalds.
"Mac", "Mac OS" and "Apple" are registered trademarks of Apple Computer, Inc.
"Windows" is a registered trademark of Microsoft Corporation.
===========================================================================

Copyright (c) 2016 CadSoft Computer - All rights reserved

