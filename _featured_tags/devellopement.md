---
layout: page
title: Développement
slug: developpement
menu: true
order: 4
accent_color: '#457B9D'
accent_image: /assets/img/cdc.webp
---

# <i class="fas fa-code text-accent"></i> Développement

## Objectif Général

Le projet **Ecodrop** comprend une application web complète de supervision d’équipements **IoT**, connectés à **The Things Network (TTN)**. Elle permet une **gestion en temps réel**, un **historique des données**, une **intégration MQTT**, et une **interface responsive et dynamique**.


## Technologies Utilisées

### <i class="fas fa-server text-indigo-500"></i> Backend

<div class="text-center my-6">
  <img src="/assets/img/docs/express.png" alt="Node.js + Express" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
</div>

- <i class="fab fa-node-js text-green-600"></i> **Node.js / Express** : serveur d’API REST rapide.
- <i class="fas fa-database text-blue-600"></i> **MongoDB** : base NoSQL idéale pour des données IoT variées.
- <i class="fas fa-cubes text-purple-600"></i> **Mongoose** : ODM facilitant la gestion MongoDB.
- <i class="fas fa-broadcast-tower text-orange-600"></i> **MQTT.js** : abonnement aux topics TTN.
- <i class="fas fa-key text-yellow-600"></i> **JWT** : sécurisation moderne des routes.
- **Dépendances** : `dotenv`, `bcrypt`, `jsonwebtoken`, `nodemailer`

### <i class="fas fa-desktop text-pink-500"></i> Frontend

<div class="text-center my-6">
  <img src="/assets/img/docs/angular.png" alt="Angular" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
</div>

- <i class="fab fa-angular text-red-600"></i> **Angular 17+** : framework SPA robuste.
- <i class="fas fa-paint-brush text-teal-500"></i> **SCSS / Tailwind CSS** : design rapide et responsive.
- <i class="fas fa-route text-indigo-500"></i> **Routing, Guards, Services** : architecture Angular bien structurée.
- <i class="fas fa-plug text-blue-400"></i> **Services Angular** : communication API centralisée.


## Cas d’Usage

- <i class="fas fa-user-plus text-blue-500"></i> Connexion / inscription des utilisateurs  
  <div class="text-center my-4">
    <img src="/assets/img/docs/login.png" alt="Login" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-wave-square text-green-500"></i> Visualisation **temps réel** des capteurs TTN  
  <div class="text-center my-4">
    <img src="/assets/img/docs/meteo.png" alt="Données capteur" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-chart-bar text-purple-500"></i> Interface **Dashboard**  
  <div class="text-center my-4">
    <img src="/assets/img/docs/dashboard.png" alt="Dashboard" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-history text-gray-500"></i> Consultation de l’**historique des messages**  
  <div class="text-center my-4">
    <img src="/assets/img/docs/dashboard_msg.png" alt="Messages" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-cogs text-cyan-600"></i> Paramétrage utilisateur (thème, TTN, langue)  
  <div class="text-center my-4">
    <img src="/assets/img/docs/preference_utilisateur.png" alt="Préférences" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-envelope text-pink-600"></i> Envoi de message via la page **Support**  
  <div class="text-center my-4">
    <img src="/assets/img/docs/Support.png" alt="Support" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>

- <i class="fas fa-plug text-yellow-500"></i> Ajout dynamique d'applications TTN (`appId` + `apiKey`)  
  <div class="text-center my-4">
    <img src="/assets/img/docs/ajout_dynamique.png" alt="Ajout TTN" class="rounded-xl shadow-md border border-gray-300 w-72 mx-auto">
  </div>


## Interactions

L’utilisateur peut ajouter ses objets connectés TTN (comme le récupérateur d’eau connecté), interagir avec eux, et les visualiser dans l’interface.

- <i class="fas fa-sliders-h text-indigo-600"></i> Stockage des préférences utilisateur dans MongoDB.
- <i class="fas fa-plug text-orange-500"></i> Connexion MQTT établie selon les apps TTN ajoutées.
- <i class="fas fa-database text-green-600"></i> Stockage des messages reçus.
- <i class="fas fa-sync-alt text-blue-500"></i> Affichage temps réel des messages.
- <i class="fas fa-tools text-purple-600"></i> Interaction avec les capteurs connectés TTN.


## Arborescence Backend

```bash
.
├── config/
│   ├── db.js
│   └── ttn.js
├── controllers/
│   ├── connectedDevicesController.js
│   ├── dataController.js
│   └── ...
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Message.js
│   └── ...
├── routes/
│   ├── authRoutes.js
│   ├── mqttRoutes.js
│   ├── ttnRoutes.js
│   └── ...
├── services/
│   ├── mqttService.js
│   └── emailService.js
```


## Arborescence Frontend

```bash
.
├── index.html
├── main.ts
├── styles.scss
├── app/
│   ├── core/
│   │   ├── config/
│   │   ├── services/
│   ├── features/
│   │   ├── annonces/
│   │   ├── dashboard/
│   │   └── ttn-integration/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── settings/
│   │   └── support/
│   └── shared/
│       ├── navbar/
│       └── footer/
```


## Points Forts

- <i class="fas fa-network-wired text-green-500"></i> Connexion **MQTT** multi-apps dynamique
- <i class="fas fa-lock text-yellow-600"></i> Authentification **JWT**
- <i class="fas fa-layer-group text-indigo-500"></i> Backend structuré par services / middlewares
- <i class="fas fa-cubes text-pink-500"></i> Frontend modulaire Angular
- <i class="fas fa-mobile-alt text-blue-500"></i> Interface responsive (Tailwind + SCSS)
- <i class="fas fa-save text-gray-700"></i> Persistance des messages et préférences


## Axes d'Amélioration

- <i class="fas fa-user-shield text-red-600"></i> Intégration **SSO** (ex: Keycloak)
- <i class="fas fa-shield-alt text-blue-600"></i> Sécurisation du protocole **MQTT**
- <i class="fab fa-java text-orange-600"></i> Migration possible vers backend **Java / Spring Boot**


## Pourquoi ces Choix Techniques ?

| <i class="fas fa-toolbox"></i> Technologie | Justification principale |
|--------------------------------------------|---------------------------|
| Node.js + Express   | Léger, rapide, parfait pour API temps réel |
| MongoDB             | Flexible et adapté aux données hétérogènes |
| MQTT.js             | Compatible TTN, stable pour les IoT         |
| Angular             | Robuste, structuré, scalable               |
| Tailwind + SCSS     | Rapidité de prototypage, responsive        |
| JWT                 | Authentification moderne                   |
| Mongoose            | Validation simplifiée, efficace            |