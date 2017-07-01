# UNITY Mac OSX STANDALONE GAME

buildsettings
x86 == 32bit
x86_64 == 64bit

[Tutorial Build](https://youtu.be/7nxKAtxGSn8?t=10m45s)

[dmg converter](https://web.archive.org/web/20140928093634/http://codevarium.gameka.com.br:80/how-to-create-your-own-beautiful-dmg-files/)



### Mac OSX build
###### Key: _All caps == desired name_
Building Directory Heiarchy:
1.  Inside of **PROJECTFOLDER**:
```sh
mkdir builds
```

*  Inside of **PROJECTFOLDER/builds**:
```sh
mkdir Mac
```

* Inside of **PROJECTFOLDER/builds/mac**:
```sh
mkdir x86_64
```
  - "x86_64" denotes 64 bit architecture.
  - Use "x86" for 32 bit systems

* Inside Unity go to build settings:
  `Shift CMD B` _or_ via toolbar: File ➡️ Build Settings
  ![](https://raw.githubusercontent.com/christiantaggart/taggart_capstone/master/NOTES/images/tutorial/buildsettingsdropdown.png)

* Click build
![](https://github.com/christiantaggart/taggart_capstone/blob/master/NOTES/images/tutorial/macosxbuildsettings.png)

* Choose Directory **PROJECTFOLDER/builds/mac/x86_64**
 - This will create your Unity Mac standalone application

* Unity
