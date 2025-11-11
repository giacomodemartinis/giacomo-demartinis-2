// src/data/projectsData.js
import soldyGif from '../assets/soldy-demo.gif';
import walleGif from '../assets/walle-demo.gif';
import auriGif from '../assets/auri-demo.gif';
import moodtrackerGif from '../assets/moodtracker-demo.gif';

export const projects = [
  {
    slug: 'soldy',
    name: 'Soldy',
    gif: soldyGif,
    overview:
      'Soldy è un’app di gestione del budget (in italiano) che permette di creare categorie di spesa con budget settimanali o mensili e di tracciare entrate e uscite nel tempo.',
    keyFeatures: `
1. Category-based budgeting: l’utente crea categorie personalizzate (con emoji e colore), assegna un budget e sceglie se è settimanale o mensile.
2. Sistema a doppio periodo: alcune categorie possono rinnovarsi ogni settimana, altre ogni mese, a seconda delle abitudini di spesa.
3. Transaction tracking: due tipi di transazioni (spese e entrate), con importo, data, note e frequenza ricorrente.
4. Week-by-week view: vista per scorrere le settimane e vedere spese, entrate e avanzamento dei budget con barre di progresso.
5. Visual budget tracking: per ogni categoria si vede budget, speso e lista delle transazioni.
6. Guided setup: flusso iniziale con signup, scelta categorie, definizione budget e arrivo alla home.
    `,
    techStack: `
Frontend (mobile):
- React Native + Expo con Expo Router (navigazione a tab e file-based)
- Componenti base React Native, icone con Lucide React Native
- Gestione layout con Safe Area, StatusBar e viste ottimizzate per tastiera
- Hook personalizzati per auth, dati utente, navigazione tra le settimane e apertura categorie

Frontend (web):
- Next.js con app router e routing a filesystem

Backend:
- API Next.js/Node.js con endpoint REST per categorie, transazioni, entrate/uscite e autenticazione
- PostgreSQL (su Neon) con tabelle per utenti, categorie e transazioni
- Query SQL dirette senza ORM, con transazioni e indicizzazione

Architettura:
- Monorepo con web e mobile che parlano allo stesso backend
- Autenticazione email/password con sessioni e token
- Localizzazione in italiano
    `,
    githubUrl: 'https://github.com/giacomodemartinis/giacomo-demartinis-2',
  },
  {
    slug: 'walle',
    name: 'Walle',
    gif: walleGif,
    overview:
      'Walle è una web app per scoprire, salvare e organizzare wallpaper in collezioni personalizzate, con ruoli admin per caricare nuovi contenuti.',
    keyFeatures: `
1. Browse Wallpapers: griglia di wallpaper, vista "All" e "Saved", possibilità di aprire il singolo wallpaper in modale e metterlo tra i preferiti.
2. Save & Like System: l’utente può salvare e mettere like; i salvati finiscono in una vista dedicata.
3. Collections: possibilità di creare raccolte personali di wallpaper (come playlist) con anteprima e conteggio elementi.
4. Search: pagina di ricerca per trovare wallpaper tramite tag/metadata.
5. Profile Management: pagina profilo con salvati recenti, gestione collezioni e logout.
6. Admin Features: upload per admin, controllo accessi basato su ruolo.
    `,
    techStack: `
Frontend:
- React 18 + TypeScript
- Vite come bundler e dev server
- React Router DOM 6 per il routing
- TanStack Query (React Query) per gestione stato server e caching

UI e styling:
- Tailwind CSS
- shadcn/ui su Radix UI per componenti accessibili
- lucide-react per le icone
- sonner per i toast
- next-themes / dark mode support opzionale
- eventuale Recharts per analytics

Backend / servizi:
- Supabase (Lovable Cloud) con PostgreSQL, auth email/password, storage per le immagini
- RLS e ruoli per distinguere admin e utenti
- Service worker e vite-plugin-pwa per caching delle immagini e installazione come PWA

Dev e deploy:
- ESLint, TypeScript strict
- Deploy automatico da piattaforma Lovable
    `,
    githubUrl: 'https://github.com/giacomodemartinis/giacomo-demartinis-2',
  },
  {
    slug: 'auri',
    name: 'Auri',
    gif: auriGif,
    overview:
      'Auri è un’app per trasformare contenuti di studio in flashcard tramite AI, organizzandoli in deck e permettendo di studiarli con una UI a schede.',
    keyFeatures: `
1. Home / Content-to-Flashcards: l’utente incolla o scrive il contenuto e l’AI genera domande/risposte dai concetti chiave.
2. Library: libreria personale con tutti i deck creati, possibilità di gestirli, ordinarli e cancellarli.
3. Study mode: interfaccia a flashcard con flip, tracciamento del progresso e sessioni di ripasso.
4. Profile: gestione account, preferenze e statistiche personali.
    `,
    techStack: `
Frontend mobile:
- React Native + Expo con Expo Router e tab
- React Query per stato remoto
- Safe Area, keyboard avoiding, icone lucide

Frontend web:
- Next.js (App Router) con SSR e file-based routing
- Tailwind CSS (implied) per layout responsive
- React Query condiviso per fetch e caching

Backend:
- Next.js API routes / Node.js per CRUD su deck e flashcard
- PostgreSQL con due DB (uno per auth, uno per contenuti)
- Query SQL con utility custom
- Upload e stream per funzioni real-time

Auth:
- NextAuth / email-password
- Protected routes e token sicuri
- Autenticazione condivisa tra web e mobile (webview)

Architettura:
- Monorepo con shared utilities
- Stato centralizzato con React Query e invalidation
    `,
    githubUrl: 'https://github.com/giacomodemartinis/giacomo-demartinis-2',
  },
  {
    slug: 'moodtracker',
    name: 'Moodtracker',
    gif: moodtrackerGif,
    overview:
      'MoodTracker è un’app di journaling emozionale che guida l’utente nella scelta dell’emozione, nella scrittura facoltativa di un diario e nel rivedere la propria storia emotiva.',
    keyFeatures: `
1. Welcome screen con branding e CTA “Get started”.
2. Autenticazione con email/password.
3. Mood tracking guidato: scelta emozione primaria (8 emozioni base), scelta sotto-emozione, nota/journal opzionale.
4. Home dashboard con card di tutte le registrazioni (emoji, nome emozione, data).
5. Mood detail view per rivedere una singola registrazione.
6. Dati filtrati per utente: ognuno vede solo le proprie emozioni.
    `,
    techStack: `
Frontend:
- React 18 + TypeScript
- Vite
- React Router v6 per le pagine e le rotte protette

UI:
- Tailwind CSS con design token personalizzati (beige/moon style)
- shadcn/ui (Radix UI) per componenti accessibili
- tailwindcss-animate per animazioni
- lucide-react per icone

Stato e form:
- TanStack Query per stato server e caching
- React Hook Form + Zod per validazione
- date-fns per formattare le date

Backend / dati:
- Supabase / Lovable Cloud con PostgreSQL
- Supabase Auth per login
- RLS per mostrare solo i dati dell’utente
- Storage e real-time disponibili

Extra:
- Sonner per i toast
- Recharts o simili per eventuali analytics
    `,
    githubUrl: 'https://github.com/giacomodemartinis/giacomo-demartinis-2',
  },
];

