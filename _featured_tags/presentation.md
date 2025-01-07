---
layout: page
title: Présentation
slug: Présentation
menu: true
order: 1
accent_color: '#457B9D'
accent_image:       /assets/img/presentation.webp
---

### Contexte et Enjeux
L'accès à l'eau est une ressource précieuse de plus en plus menacée par les changements climatiques et l'augmentation de la consommation. Notre projet vise à développer une solution technologique innovante permettant la gestion automatisée de l'eau de pluie dans un objectif de réduction de la consommation d'eau potable.

L'idée est de créer un système de récupération d'eau de pluie connecté, permettant une gestion intelligente de l'arrosage tout en optimisant l'utilisation des ressources naturelles. Cette solution répond aux enjeux environnementaux et économiques en réduisant le gaspillage d'eau.

### Objectif du projet
Le projet a pour ambition de :
- Réduire la consommation d'eau potable utilisée pour l'arrosage.
- Automatiser la gestion d'un réservoir d'eau de pluie avec des seuils configurables.
- Offrir un suivi en temps réel du niveau d'eau et des activités d'arrosage.
- Développer une architecture IoT robuste, sécurisée et évolutive.

### Technologies Utilisées
Le système repose sur les technologies suivantes :
- **LoRa (Long Range)** : Communication longue portée entre le réservoir et la passerelle.
- **ESP32 avec module WiFi et extension LoRa** : Gestion locale des capteurs et de l'automatisation.
- **Capteur ultrason** : Mesure précise du niveau d'eau dans le réservoir.
- **Contacteur** : Contrôle de l'alimentation de la pompe d'arrosage.
- **MongoDB** : Base de données pour stocker les historiques d'utilisation.
- **MQTT (Mosquitto)** : Protocole de messagerie pour la communication entre les modules IoT et les serveurs.

### Bénéfices Environnementaux et Économiques
- **Écologique** : Préservation des ressources en eau potable.
- **Économique** : Réduction des coûts liés à l'eau.
- **Autonomie** : Gestion automatisée limitant l'intervention humaine.
- **Suivi** : Accès en temps réel aux données via une interface web.

### Équipe et Répartition des Rôles
Le projet est mené par une équipe complémentaire :
- **Valentin (Systèmes et Réseau)** : Mise en place et gestion des serveurs et de l'infrastructure réseau.
- **Quentin (Développement Logiciel)** : Développement de l'interface web et gestion des bases de données.
- **Mathieu (C et IoT)** : Développement de la logique embarquée sur l'ESP32 et gestion des capteurs.

### Conclusion
Ce projet s'inscrit dans une démarche durable et technologique visant à promouvoir une gestion responsable des ressources en eau. Grâce à l'utilisation de technologies IoT avancées, il sera possible de monitorer et optimiser la gestion de l'eau, contribuant ainsi à la préservation des ressources naturelles tout en offrant une solution pratique pour les utilisateurs.
