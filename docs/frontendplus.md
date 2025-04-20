---
layout: page
title: <i class="fa-brands fa-angular"></i> Schéma logique – Application **EcoDrop**
description: >
  Rapport ultra détaillé du frontend de l’application EcoDrop, incluant architecture, services, composants, responsive design, accessibilité et sécurité.  
hide_description: true
sitemap: false

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-box"></i> Architecture Générale

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> <i class="fas fa-check-circle"></i> Points forts

| Élément        | Détail technique |
|----------------|------------------|
| **Angular Moderne** | Utilisation des **standalone components** (>= v14) |
| **Organisation** | `core/`, `pages/`, `services/`, `guards/`, `shared/` |
| **Routing** | Utilisation de `app.routes.ts` et `app.routes.server.ts` |
| **UI partagée** | Composants `navbar`, `footer`, `shared.module.ts` |
| **Services** | Injectable via `providedIn: 'root'` |
| **Modèles typés** | Gestion des `interfaces` dans `core/models` |

---

## <i class="fas fa-angle-right"></i> Composants HTML & Logique Fonctionnelle

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔹 `home.component.html`
- Contenu épuré, responsive par nature.
- Structure HTML claire et modulaire.

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔹 `ttn-integration.component.html`
- Affiche les équipements TTN.
- Vue modulaire, gestion du clic, intégration avec `device-details`.

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔹 `dashboard.component.html`
- Présente les données collectées via MQTT/polling.
- Structure pensée pour le temps réel.

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-dna"></i> Logique derrière chaque composant

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔸 `ttn-integration.component.ts`
- `setInterval` pour le polling des devices TTN.
- `loadDevices()` déclenché toutes les 15s.
- Découplage métier via `ttnIntegrationService`.

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔸 `dashboard.component.ts`
- Affiche des données temps réel via `mqtt.service.ts`.
- À enrichir avec des graphes ou historisation.

### <i class="fas fa-caret-right"></i> <i class="fas fa-angle-right"></i> 🔸 `settings.component.ts`
- Centralise les préférences utilisateur.
- Interagit avec l’API via `user-settings.service.ts`.

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-brain"></i> Services et Rôle Métier

| Service | Description |
|--------|-------------|
| `mqtt.service.ts` | Appels REST vers backend MQTT |
| `ttn.service.ts` | Connexion API TTN |
| `auth.service.ts` | Authentification utilisateur |
| `theme.service.ts` | Gestion de thème sombre/clair |
| `user-settings.service.ts` | Stocke et récupère les préférences utilisateur |

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-mobile-alt"></i> Compatibilité Mobile & Responsive Design

- HTML fluide, pas de largeur fixe.
- Bonne utilisation du `overflow-x` dans les blocs `pre`.
- SCSS bien structuré, facilement adaptable à Tailwind ou Material.

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-universal-access"></i> Accessibilité (a11y)

| Élément              | Présence |
|----------------------|----------|
| `alt` pour images    | <i class="fas fa-exclamation-circle"></i> à vérifier |
| `aria-*` roles       | <i class="fas fa-times-circle"></i> à ajouter |
| Contraste couleurs   | <i class="fas fa-check-circle"></i> bon niveau |
| Navigation clavier   | <i class="fas fa-check-circle"></i> possible via structure HTML |

> 🔧 Recommandé : ajouter des `aria-label`, `role`, améliorer la navigation clavier complète.

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-shield-alt"></i> Sécurité Frontend

- Utilisation du **JWT** stocké dans `localStorage`.
- Requêtes HTTP sécurisées avec en-tête `Authorization`.
- `auth.guard.ts` avec vérification `isPlatformBrowser()` pour le SSR.

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-cogs"></i> Performance & Optimisation

| Élément               | Présence |
|-----------------------|----------|
| Lazy loading          | <i class="fas fa-exclamation-circle"></i> à confirmer |
| Cache côté client     | <i class="fas fa-times-circle"></i> non implémenté |
| Optimisation DOM      | <i class="fas fa-check-circle"></i> composants légers |
| Polling MQTT REST     | <i class="fas fa-check-circle"></i> `setInterval + clearInterval` |

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-chart-line"></i> Évolutivité & Maintenabilité

- Modulaire et clair, facile à maintenir.
- Composants isolés et réutilisables.
- Services indépendants et spécialisés.
- Architecture adaptée à la croissance (PWA, micro-frontends...).

---

## <i class="fas fa-angle-right"></i> <i class="fas fa-check-circle"></i> Synthèse finale

| Domaine                    | Niveau de maîtrise | Commentaire |
|----------------------------|--------------------|-------------|
| Architecture Angular       | ⭐⭐⭐⭐☆              | Moderne et modulaire |
| Gestion de l’état          | ⭐⭐⭐☆☆              | Services isolés, pas de NGRX |
| Temps réel / MQTT          | ⭐⭐⭐⭐☆              | Polling REST maîtrisé |
| UI / UX                    | ⭐⭐⭐⭐☆              | Sobre et responsive |
| Responsive / Mobile        | ⭐⭐⭐⭐☆              | Mobile-friendly |
| Accessibilité              | ⭐⭐☆☆☆              | À améliorer |
| Sécurité frontend          | ⭐⭐⭐⭐☆              | Bonne gestion du token |

---

## <i class="fas fa-angle-right"></i> 🚀 Roadmap Technique (Suggestions)

- <i class="fas fa-random"></i> Factoriser certains services (ex : fusion MQTT/TTN)
- <i class="fas fa-shield-alt"></i> Implémenter un `HttpInterceptor` pour injecter automatiquement le token
- <i class="fas fa-file-alt"></i> Ajouter des logs dans la console pour debugger les erreurs TTN/MQTT
- <i class="fas fa-palette"></i> Intégrer un framework UI responsive (ex : Tailwind CSS)
- <i class="fas fa-universal-access"></i> Ajouter rôles ARIA et tests a11y pour l’accessibilité


