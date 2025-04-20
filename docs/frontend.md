---
layout: page
title: <i class="fa-brands fa-angular"></i> Schéma logique – Application EcoDrop
description: >
  Vous verez ici la documentation de la partie sur Angular  
hide_description: true
sitemap: false

---

## <i class="fas fa-boxes-stacked"></i> Structure générale du projet

Le projet Angular est organisé de manière modulaire avec une séparation claire des responsabilités :

```
src/app/
├── core/              # Modèles, services globaux, configuration
├── guards/            # Garde de sécurité (auth.guard)
├── home/              # Composant de la page d'accueil
├── pages/             # Pages principales de l'application
│   ├── dashboard/
│   ├── history/
│   ├── login/
│   ├── register/
│   ├── settings/
│   └── ttn-integration/
├── services/          # Services injectables (auth, mqtt, TTN, paramètres...)
├── shared/            # Composants partagés (navbar, footer)
├── app.component.ts   # Composant racine
└── app.module.ts      # Déclaration principale
```

---

## <i class="fas fa-cube"></i> Composant principal

Fichier : `app.component.ts`

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
```

<i class="fas fa-circle-info"></i> Ce composant est **standalone**, il importe directement la `navbar`, `footer` et les routes.

---

## <i class="fas fa-satellite-dish"></i> TTN Integration

Fichier : `ttn-integration.component.ts`

```ts
@Component({
  selector: 'app-ttn-integration',
  standalone: true,
  imports: [CommonModule, DeviceDetailsComponent],
  templateUrl: './ttn-integration.component.html',
})
export class TtnIntegrationComponent implements OnInit, OnDestroy {
  devices: any[] = [];
  selectedDevice: any = null;
  error: string | null = null;

  constructor(private ttnIntegrationService: TtnIntegrationService) {}

  ngOnInit() {
    // Logique d'initialisation à venir...
  }
}
```

<i class="fas fa-info-circle"></i> Ce composant gère l'affichage des **devices TTN** en consommant un service dédié (`ttnIntegrationService`).

---

## <i class="fas fa-network-wired"></i> Connexion MQTT

Fichier : `mqtt.service.ts`

```ts
@Injectable({ providedIn: 'root' })
export class MqttService {
  constructor(private http: HttpClient) {}

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/mqtt');
  }
}
```

<i class="fas fa-circle-info"></i> Ce service permet de récupérer les **messages MQTT** depuis le backend.

---

## <i class="fas fa-shield-alt"></i> Auth Guard

Fichier : `auth.guard.ts`

```ts
export const authGuard = () => {
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    return authService.isLoggedIn(); // ✅ Côté client uniquement
  }

  return false; // Empêche l'accès en SSR
};
```

<i class="fas fa-circle-info"></i> Permet de **protéger l'accès aux routes** pour les utilisateurs non authentifiés.

---

## <i class="fas fa-sliders-h"></i> Gestion des paramètres utilisateur

Fichier : `user-settings.service.ts`

```ts
@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  private apiUrl = 'http://localhost:3000/api/settings';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // ... méthodes pour get/post settings
}
```

<i class="fas fa-circle-info"></i> Ce service permet de gérer les **préférences** (thème, langue, TTN apps...).

---

## <i class="fas fa-list-check"></i> Résumé des fonctionnalités couvertes

| <i class="fas fa-puzzle-piece"></i> Fonctionnalité                  | <i class="fas fa-code"></i> Implémentation |
|--------------------------------------|---------------------------------------------|
| Authentification sécurisée           | ✅ authentification maison + `auth.service.ts`   |
| Connexion MQTT dynamique             | ✅ `mqtt.service.ts`                        |
| Intégration TTN                      | ✅ `ttn.service.ts`, `ttn-integration`      |
| Paramètres utilisateur               | ✅ `settings`, `user-settings.service.ts`   |
| Navigation et layout responsive      | ✅ `shared/navbar`, `footer`                |
| Protection des routes                | ✅ `auth.guard.ts`                          |

---

## <i class="fas fa-tools"></i> Recommandations possibles

<i class="fas fa-code-branch"></i> **Factoriser** certains services si leur logique est similaire (ex : services TTN)

<i class="fas fa-key"></i> **Utiliser un `HttpInterceptor`** pour centraliser l'ajout du token JWT dans les requêtes HTTP

<i class="fas fa-bug"></i> **Ajouter un système de logs** pour tracer les erreurs TTN/MQTT dans la console développeur

