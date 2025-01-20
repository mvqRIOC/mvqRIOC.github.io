---
layout: page
title: Cahier des charges
slug: Cahier des charges
menu: true
order: 2
accent_color: '#457B9D'
accent_image:       /assets/img/cdc.webp
---

### Cahier des charges

### Objectif du projet
Concevoir un système de gestion automatisée de l'arrosage basé sur la mesure du niveau d'eau d'un réservoir, utilisant des technologies IoT et des protocoles de communication sécurisés et robustes.

### Architecture générale
Le système repose sur les composants suivants :

<iframe frameborder="0" style="width:100%;height:500px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1WwxH-btsl_lDIhhsQXZ52Vtq_VnEjBrY%26export%3Ddownload"></iframe>

#### Équipements physiques :
- **Réservoir d'eau de pluie** : Capacité à définir.  
- **Pompe d'arrosage** : Commandée électroniquement pour l'irrigation automatique.  
- **ESP32 avec module WiFi + Extension LoRa** : Unité de contrôle principale.  
- **Capteur ultrason** : Pour la mesure du niveau d'eau dans le réservoir.  
- **Contacteur** : Commande la mise en marche de la pompe selon des seuils définis.

#### Infrastructure logicielle :
- **VM Debian 1 : MongoDB**  
   - Base de données pour stocker l'historique des niveaux d'eau et les commandes de la pompe.  
   - Capacité : 2 vCPU, 4 Go RAM, 20 Go SSD.  

- **VM Debian 2 : MQTT Broker (Mosquitto)**  
   - Assure la communication entre l'ESP32 et la base de données.  
   - Capacité : 2 vCPU, 2 Go RAM, 20 Go SSD.

### Technologies et Protocoles :
- **LoRa (Long Range)** : Communication longue distance entre les modules IoT.  
- **MongoDB** : Base de données NoSQL pour le stockage des données.  
- **MQTT (Mosquitto)** : Protocole de messagerie léger pour la communication entre l'ESP32 et la base de données.  
- **ESP32** : Carte de développement IoT avec WiFi intégré et extension LoRa pour la gestion des capteurs et actionneurs.  

### Fonctionnalités principales :
- **Mesure du niveau d'eau :** Le capteur ultrason mesure le niveau d'eau et transmet la donnée à l'ESP32.  
- **Gestion de l'arrosage :** Le contacteur active la pompe lorsque le niveau d'eau est suffisant.  
- **Transmission des données :**  
   - Le module LoRa envoie les données du capteur vers la passerelle LoRa.  
   - La passerelle transmet les données au broker MQTT sur la VM Debian.  
   - Le broker MQTT relaie l'information à la base de données MongoDB.  

- **Interface utilisateur :** Visualisation des niveaux d'eau et commandes manuelles via une application web.  

### Répartition des rôles :
- **Valentin (Systèmes et Réseau)** :  
   - Mise en place et sécurisation des VMs Debian.  
   - Configuration du broker MQTT et de la base MongoDB.  
   - Supervision de la connectivité LoRa et de l'intégration réseau.  

- **Quentin (Développement Logiciel)** :  
   - Développement de l'application Web et intégration des bases de données.  
   - Implémentation des API pour la gestion des requêtes de l'ESP32 vers la BDD.  

- **Mathieu (C et IoT)** :  
   - Programmation de l'ESP32 en C.  
   - Gestion des capteurs et actionneurs.  
   - Implémentation du protocole LoRa et MQTT sur l'ESP32.  

### Sécurité :
- Chiffrement des communications LoRa.  
- Utilisation de TLS sur le broker MQTT.  
- Contrôle des accès restreint sur la base MongoDB.  

### Critères de réussite :
- Mesure fiable du niveau d'eau.  
- Commande automatique de la pompe.  
- Transmission LoRa stable sur la distance prévue.  
- Accès web fonctionnel et sécurisé.
