# Richelieu Challenge

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
- Il y a un truc de caché dans l'image via LSB (j'y connais rien) -> image/output
- Le reste quand j'ai un peu de temps ....


