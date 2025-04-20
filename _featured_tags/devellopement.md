---
layout: page
title: Dévellopement
slug: Dévellopement
menu: true
order: 4
accent_color: '#457B9D'
accent_image:       /assets/img/cdc.webp
---

## Objectif Général
Le projet **Ecodrop** tourne aussi autour d'une application web complète de supervision d'équipements IoT, en particulier connectés à **The Things Network (TTN)**, avec gestion de données en temps réel, historique, intégration MQTT, et une interface utilisateur dynamique.


## Technologies Utilisées

### Backend
<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/express.png" alt="Node.js + Express" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 
- **Node.js / Express** : serveur d'API REST rapide et léger.
- **MongoDB** : base NoSQL idéale pour des données IoT variées et dynamiques.
- **Mongoose** : ODM facilitant l'accès aux collections MongoDB.
- **MQTT.js** : pour l’abonnement aux topics TTN via MQTT.
- **JWT** : pour sécuriser les routes avec un système d’authentification moderne.
- **Autres dépendances** : `dotenv`, `bcrypt`, `jsonwebtoken`, `nodemailer`.

### Frontend
<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/angular.png" alt="Angular" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 
- **Angular 17+** : framework complet pour construire l’interface SPA (Single Page Application).
- **SCSS / Tailwind CSS** : styles modulaires et modernes.
- **HttpClient, Guards, Routing** : architecture Angular bien structurée.
- **Services Angular** : communication API et logique métier isolée.


## Cas d’Usage

- Connexion / inscription des utilisateurs.
<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/login.png" alt="Angular" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Affichage **temps réel** des données des capteurs TTN.

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/meteo.png" alt="Information Capteur" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Vue **Dashboard** de supervision.

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/dashboard.png" alt="Dashboard" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Accès à l’**historique** des messages.

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/dashboard_msg.png" alt="Dashboard message" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Paramétrage utilisateur (thème, langue, préférences TTN).

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/preference_utilisateur.png" alt="Préference Utilisateur" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Envoi de message via la page **Support**.

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/Support.png" alt="Support" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 

- Ajout dynamique d’applications TTN (`appId` + `apiKey`).

<div style="text-align: center; margin: 20px 0;"> <img src="/assets/img/docs/ajout_dynamique.png" alt="Ajout Dynamique" width="300" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 2px solid #ccc;" /></div> 


## Interactions

L'objectif est que l'utilisateur ajoute les objets connectés qu'il souhaite et qu'il puisse interagir avec. Le but ici est d'ajouter le recuperateur d'eau connecté mais cela peut aller plus loin avec cette application. On peut donc avoir differente façon de gerer tout cela selon le besoin.  

- L’utilisateur configure ses préférences → stockées en base MongoDB.
- Le backend établit une connexion MQTT en fonction de ses ajouts TTN.
- Les messages reçus sont enregistrés en base (`Message.js`).
- Le frontend récupère dynamiquement les messages et les affiche **en direct**.
- L’utilisateur interagit avec ses appareils connectés TTN.


## 🗂️ Arborescence Backend (src)

```
- .
- config
  - db.js
  - ttn.js
- controllers
  - connectedDevicesController.js
  - dataController.js
  - weatherController.js
- middleware
  - authMiddleware.js
- models
  - Data.js
  - Devices.js
  - Message.js
  - User.js
  - UserSettings.js
- routes
  - api.js
  - authRoutes.js
  - connectedDevicesRoutes.js
  - dashboardRoutes.js
  - dataRoutes.js
  - messages.js
  - mqttRoutes.js
  - settingsRoutes.js
  - supportRoutes.js
  - ttnRoutes.js
  - weatherRoutes.js
- services
  - emailService.js
  - mqttService.js
  - ttnService.js
```

---

## 🗂️ Arborescence Frontend (src)

```
- .
  - index.html
  - main.ts
  - server.ts
  - styles.scss
- app
  - app.component.*
  - app.module.ts / app.routes.ts
  - core
    - config
    - models
    - services
  - guards
  - home
  - pages
    - dashboard
    - history
    - login
    - register
    - settings
    - support
    - ttn-integration
      - device-details
  - services
  - shared
    - footer
    - navbar
```


## Points Forts

- Connexion dynamique **MQTT** multi-applications.
- Authentification **JWT** sécurisée.
- Backend structuré par **services, routes, middlewares**.
- Frontend Angular modulaire (`core`, `shared`, `features`).
- Interface responsive avec **SCSS + Tailwind CSS**.
- Persistance des données/messages et préférences utilisateurs.


## Axe d'amélioration

- Connexion avec une plateforme adapté exemple keycloak
- Sécurisation des flux MQTT
- Backend en java (plus sécurisé)


## 💡 Pourquoi ces Choix Techniques ?

|   Technologie       |   Justification principale                                                  |
|---------------------|-----------------------------------------------------------------------------|
| Node.js + Express   | Léger, performant, adapté aux API REST temps réel, facile à prototyper     |
| MongoDB             | Flexible, bien adapté aux données hétérogènes de type IoT                  |
| MQTT.js             | Client parfait pour le protocole MQTT (TTN)                                |
| Angular             | SPA robuste, scalable, bien outillée                                       |
| SCSS / Tailwind     | Styles organisés, responsive, avec rapidité de développement               |
| JWT                 | Authentification moderne, facile à intégrer                                |
| Mongoose            | Simplifie la gestion de MongoDB et la validation des schémas               |



