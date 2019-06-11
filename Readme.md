#Richelieu Challenge

## Code
- Regarder dans le code source de la page et récupérer le fichier PDF
- Copier coller le code écrit en blanc et le nettoyer (enlever saut de ligne etc)
- C'est une image code/code.jpg

## RSA
- Il y a un zip dans l'image précédente et le mot de passe se trouve en base64 dans l'image à la fin.
- Une fois le zip décompresser
- Regénérer les 2048 versions du prime possible du faite des sed (rsa/rsa_broker/generator.js)
- Trouver lesquels sont des nombres premiers (3) (rsa/rsa_broker/convert.py)
- Récupérer le modulus dans la clé publique 
- Générer les 3 clés privées via (rsa/rsa_broker/rsatool.py)
- Déchiffrer le fichier motDePasseGPG.txt.enc via une des clée (la seule qui fonctionne)
- Récupérer la seconde image lsb_RGB.png via gpg et le mot de passe

## Image
- Il y a un truc de caché dans l'image via LSB (j'y connais rien en LSB) apparement c'est un binaire.
- En utilisant lsb-tools on peut extraire un fichier qui contient de l'hexa (`python2 ./lsb-toolkit-master/lsb-extract.py -f lsb_RGB.png -o binary -b 0 -c rgb`)
- On le nettoie avec cut et on remet tout ca en hexa bien comme il faut `xxd -r -p binaryclean4  binaryfinal`
- On regarde avec un décomplilateur ou le binaire check le mot de passe et on le reconstruit (c'est très long, indice cherchez le xor) maybe il y a plus rapide.
- On peut ouvrir le fichier suite.zip qui nous envoie vers le defi1

## Defi1 
- On se connecte au serveur via les info de suite.txt
- L'idée c'est d'utiliser le programme  prog.bin qui est toujours exécuté avec les permissions de l'utilisateur qui peut lire le flag.
- On créé un faux bin sl qui fait `cat /home/defi1/drapeau.txt` dans un répertoire bin et on le rend exécutable
- On link aussi le binaire cat dans ce répertoire (le systeme ne le trouverait plus sinon une fois le path changé)
- On change le path PATH=~/bin 
- On exécute prog.bin 
- On choisit l'option 3 pour qu'il exécute sl 

## Defi2 
- On se connecte au serveur via les infos du challenge suivant (suite2.txt)
- Je pense que c'est pas de mon niveau ici ... de ce que je vois le prog.bin eclate en segmentationfault quand on lui passe un password trop grand qui respecte les contraintes (Majuscule / char spécial et longeur). Donc je pense qu'on doit pouvoir exploiter cela avec gdb mais bon trop loin de mon niveau pour le moment si c'est ça ... 
Bref le challenge s'arrête ici pour moi pas le temps en ce moment de monter en compétence sur l'exploitation de Buffer over flow.

