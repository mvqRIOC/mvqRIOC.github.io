---
layout: post
title: La borne d'arcade
description: >
  Réalisation d'une borne d'arcade sous l'OS Recalbox et fabriquer avec tout les outils du Makerspace dans les locaux d'Unilasalle Amiens encadré par Adrien Bracq (Enseignant Chercheur).
comments: true
image: /assets/img/blog/borne_d_arcade/borne-d-arcade.png
tags: [Amiens]
author: author1
accent_image: /assets/img/blog/borne_d_arcade/salle-arcade-mikado.jpg
comments: true

---

## Réalisation d'une borne d'arcade

> **Petite Histoire:**
Les bornes d'arcade ont fait leur apparition dans les années 1930 avec l'introduction de jeux électromécaniques tels que les flippers. Ces machines, souvent de la taille d'un meuble et coûteuses, se sont rapidement popularisées. Peu de particuliers pouvaient se les permettre, ce qui a donné naissance à des salles publiques où des dizaines de ces machines étaient disponibles. Les premières bornes d'arcade intégrant des jeux vidéo ont vu le jour dans les années 1960 aux États-Unis, avant de gagner en popularité en Europe dans les années 1970 et 1980.
Malheureusement, c'est à cette même période que les bornes d'arcade ont commencé à disparaître en Europe en raison de l'arrivée des consoles de jeux portables sur le marché.

### **Le but du projet:**

Ce projet vise à créer une borne d'arcade proposant des jeux d'arcade classiques datant des années 1980.

### Réalisation du projet:

Les étapes que j'ai réalisé pour construire la borne d'arcade sont les suivantes :

- Dessinez un design à la main pour déterminer les dimensions de la borne.

- Utilisez un logiciel de CAO, comme **[FreeCAD](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj5odvWjeCBAxWMV6QEHQQbCjQQFnoECBUQAQ&url=https%3A%2F%2Fwww.freecad.org%2Findex.php%3Flang%3Dfr&usg=AOvVaw17WDYd8I-_k42_OpiwajPK&opi=89978449)**, **[Fusion360](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjQ4obojeCBAxUaVqQEHQGGBs4QFnoECBcQAQ&url=https%3A%2F%2Fwww.autodesk.fr%2Fproducts%2Ffusion-360%2Foverview&usg=AOvVaw0o3YgBfEPtwNNOSe69fjn3&opi=89978449)** ou **[SolidWorks](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwio86HxjeCBAxXTRUEAHeEFAGQQFnoECAgQAQ&url=https%3A%2F%2Fwww.solidworks.com%2Ffr&usg=AOvVaw2PKKzNpHSQdI9BvKXJUuLo&opi=89978449)**, pour réaliser chaque pièce de la borne. Les fichiers peuvent être trouvés sur le lien du drive en bas de page. Pour ma part j'ai utilisé le logiciel de CAO **FreeCAD**.

![utilisation du logiciel de CAO](/assets/img/blog/borne_d_arcade/CAO.png)

- Découpez les pièces à l'aide d'une **[découpeuse laser**](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrHq1XwIzPL4&psig=AOvVaw0GFboQfyNL2UuevHQNS55l&ust=1696636394385000&source=images&cd=vfe&opi=89978449&ved=0CBQQ3YkBahcKEwjAzuebjeCBAxUAAAAAHQAAAAAQCQ)**, ou d'autres solutions telles qu'une scie sauteuse ou une scie. Dans mon cas j'avais à disposition de la découpeuse laser et du logieciel de FAO "Laserbox". Pour etre sur de nos calcules il faut en premier lieu un prototypage en carton.

![Prototypage de la Borne en carton](/assets/img/blog/borne_d_arcade/protocarton_borne.jpg)

- La disposition des **[boutons](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FButtons-EG-STARTS-Joystick-Raspberry%2Fdp%2FB01M2X88QP&psig=AOvVaw24R-zllYnmTKl9GBSw74hN&ust=1696636929855000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiRiZuP4IEDFQAAAAAdAAAAABAG)** et du **[joystick](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FButtons-EG-STARTS-Joystick-Raspberry%2Fdp%2FB01M2X88QP&psig=AOvVaw24R-zllYnmTKl9GBSw74hN&ust=1696636929855000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiRiZuP4IEDFQAAAAAdAAAAABAG)** est cruciale pour une utilisation confortable de la borne d'arcade. Il existe des **[schémas](https://pxlbbq.com/wp-content/uploads/2017/05/sega1_l.png)** pour indiquer la position idéale des boutons. Toujours avec un prototypage en carton ^^

![Réalisation du plateau de commande en 3D](/assets/img/blog/borne_d_arcade/plaque_joystik.png)
![protype carton du plateau de commande](/assets/img/blog/borne_d_arcade/proto.jpg)

- En ce qui concerne la partie électronique, utilisez un écran d'occasion et une **[Raspberry Pi 2+](https://www.raspberrypi.com/documentation/)** ou version ultérieur qui seras connectée aux boutons ou si vous le souhaitez installer le sur votre ordinateur. *Veuillez noter que la taille de votre écran déterminera les dimensions de votre borne*.

- La partie logicielle est un peu plus complexe. Il faut commencer par installer la version appropriée de **[Recalbox](https://www.recalbox.com/fr/)**. Pour cela, vous pouvez vous rendre sur le site web de Recalbox et choisir entre la création d'une **[clé USB bootable](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiv97HRjuCBAxXOR6QEHZBPAUYQtwJ6BAguEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGcRBwI9-eug&usg=AOvVaw2VMXTMaAPA_Otew1gt-L4s&opi=89978449)** ou d'une **[carte SD bootable](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiv97HRjuCBAxXOR6QEHZBPAUYQtwJ6BAguEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGcRBwI9-eug&usg=AOvVaw2VMXTMaAPA_Otew1gt-L4s&opi=89978449)**. *Veuillez noter que si vous utilisez un ordinateur pour faire fonctionner la borne, vous aurez besoin d'un environnement Linux*.
 
- Après avoir construit la borne, vous avez la possibilité de la personnaliser selon vos préférences, que ce soit au niveau de l'apparence visuelle ou en modifiant l'interface de l'OS Recalbox. Vous pouvez personnaliser Recalbox en utilisant des méthodes telles que le  **[scraping](https://www.youtube.com/watch?v=a8-XDy_tYAw)** pour les jeux ou en changeant le **thème Recalbox**. En ce qui concerne les jeux, je vous conseille de consulter des vidéos explicatives, car il existe plusieurs façons d'ajouter des jeux à la console.

![Personnalisation de la borne avec mario pixel graver au laser](/assets/img/blog/borne_d_arcade/personalisation.jpg)
![Borne en train de fonctionner](/assets/img/blog/borne_d_arcade/ingame.png)

- Et enfin, profitez-en et partagez-le avec d'autres !

![Borne en marche au salon du Safra numérique](/assets/img/blog/borne_d_arcade/Safra_numerique.png)


## Téléchargement des ressources 
> Vous pouvez également la réaliser sans avoir à faire quoi que ce soit, en utilisant tous les dossiers qui sont disponibles ici : 

- [La Parties FAO](https://drive.google.com/drive/folders/1l8KBKS_DKK8M51PJvBYQ1OmmrbqSskoz?usp=drive_link) *(sous freecad je precise)*
- [La Parties Scraping](https://drive.google.com/drive/folders/1VqpI_UWtA0QQUX6-7rAunpzHCxvgmyDm?usp=drive_link)
- [La Parties OS recalbox](https://drive.google.com/drive/folders/1BNq80I9mQ7tGICTAPnmZjTvw8rT7d2Sf?usp=drive_link)

<iframe src="//www.ultimedia.com/deliver/generic/iframe/mdtk/01338879/src/q8s8mv5/zone/18/showtitle/1/?autoplay=0" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" hspace="0" vspace="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" width="640" height="360" allow="fullscreen"></iframe>

