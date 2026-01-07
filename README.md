# 🎮 SneezyTyper

Un juego de mecanografía desarrollado con Phaser 3 donde debes escribir palabras correctamente antes de que se acabe el tiempo. ¡Mejora tu velocidad de escritura mientras te diviertes!

## 🎯 Características

- **Sistema de Niveles Dinámico**: La dificultad aumenta cada 5 palabras correctas
- **Palabras Categorizadas**: Las palabras se organizan por longitud para un progreso gradual
- **Sistema de Tiempo Dinámico**: El tiempo límite se ajusta según la longitud de la palabra
- **Sistema de Combos**: Encadena palabras correctas para obtener bonificaciones
- **Sistema de Vidas**: 3 vidas para completar el máximo de palabras posible
- **Música y Efectos de Sonido**: Ambiente sonoro completo con controles de audio
- **Interfaz Atractiva**: Diseño visual pulido con animaciones y efectos

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v16 o superior)
- npm (viene con Node.js)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gara501/sneezytyper.git
cd phaser-typing-game

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El juego estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

### Desarrollo

```bash
npm run dev          # Inicia servidor de desarrollo con hot-reload
```

### Producción

```bash
npm run build        # Build para GitHub Pages
npm run preview      # Preview del build de producción
npm run deploy       # Despliega a GitHub Pages
```

### Itch.io

```bash
npm run build:itch   # Build optimizado para itch.io
npm run package:itch # Crea ZIP listo para subir a itch.io
```

## 🏗️ Estructura del Proyecto

```
phaser-typing-game/
├── src/
│   ├── main.js                 # Punto de entrada
│   ├── game/
│   │   ├── config.js           # Configuración de Phaser
│   │   ├── Game.js             # Clase principal del juego
│   │   ├── scenes/             # Escenas del juego
│   │   │   ├── BootScene.js    # Carga de assets
│   │   │   ├── IntroScene.js   # Pantalla de inicio
│   │   │   ├── HowToPlayScene.js # Instrucciones
│   │   │   ├── PlayScene.js    # Escena principal de juego
│   │   │   ├── GameOverScene.js # Pantalla de fin de juego
│   │   │   └── CreditsScene.js # Créditos
│   │   ├── systems/            # Sistemas del juego
│   │   │   ├── WordSystem.js   # Gestión de palabras
│   │   │   ├── InputSystem.js  # Manejo de entrada de teclado
│   │   │   ├── LevelSystem.js  # Sistema de niveles
│   │   │   └── ComboSystem.js  # Sistema de combos
│   │   ├── ui/                 # Componentes de UI
│   │   │   ├── Background.js   # Fondo del juego
│   │   │   ├── WordText.js     # Texto de palabra objetivo
│   │   │   ├── InputText.js    # Texto de entrada del jugador
│   │   │   ├── TimeBar.js      # Barra de tiempo
│   │   │   ├── LifeBar.js      # Barra de vidas
│   │   │   ├── ComboText.js    # Indicador de combos
│   │   │   ├── MusicButton.js  # Control de música
│   │   │   └── UITheme.js      # Tema visual
│   │   └── data/
│   │       └── words.js        # Diccionario de palabras
│   └── style.css               # Estilos globales
├── public/                     # Assets estáticos
│   ├── bg/                     # Imágenes de fondo
│   ├── images/                 # Sprites e imágenes
│   ├── sounds/                 # Música y efectos de sonido
│   └── keyboard.svg            # Favicon
├── index.html                  # HTML principal
├── vite.config.js              # Config de Vite para GitHub Pages
├── vite.config.itch.js         # Config de Vite para Itch.io
└── package.json                # Dependencias y scripts
```

## 🎮 Cómo Jugar

1. **Inicio**: Presiona ENTER en la pantalla de inicio
2. **Escritura**: Escribe la palabra que aparece en pantalla
3. **Confirmación**: Presiona ENTER para enviar tu respuesta
4. **Corrección**: Usa BACKSPACE para borrar caracteres
5. **Objetivo**: Escribe correctamente el máximo de palabras posible antes de perder todas las vidas

### Mecánicas

- ✅ **Palabra Correcta**: +1 punto, avanza al siguiente nivel cada 5 palabras
- ❌ **Palabra Incorrecta**: -1 vida
- ⏱️ **Tiempo Agotado**: -1 vida
- 🔥 **Combos**: Encadena palabras correctas para bonificaciones
- 📈 **Niveles**: La dificultad aumenta con palabras más largas

## 🌐 Despliegue

### GitHub Pages

El juego está desplegado automáticamente en:
**https://gara501.github.io/sneezytyper**

Para redesplegar:
```bash
npm run build
npm run deploy
```

### Itch.io

Para crear un paquete para itch.io:

```bash
# Generar build y crear ZIP
npm run build:itch
npm run package:itch
```

Esto creará `sneezytyper-itch.zip` (~17 MB) listo para subir a itch.io.

**Pasos para publicar en Itch.io:**

1. Ve a [itch.io](https://itch.io) y crea un nuevo proyecto
2. Configura:
   - Kind of project: **HTML**
   - This file will be played in the browser: ✅
3. Sube `sneezytyper-itch.zip`
4. Configura dimensiones: **800 x 600** (o activa fullscreen)
5. ¡Publica!

## 🛠️ Tecnologías

- **[Phaser 3](https://phaser.io/)** - Framework de juegos HTML5
- **[Vite](https://vitejs.dev/)** - Build tool y dev server
- **JavaScript (ES6+)** - Lenguaje de programación
- **Google Fonts (Lacquer)** - Tipografía

## 📝 Configuración del Juego

Puedes modificar la configuración del juego en:

- **Dimensiones**: `src/game/config.js` (800x600 por defecto)
- **Palabras**: `src/game/data/words.js`
- **Niveles**: `src/game/systems/LevelSystem.js`
- **Tiempo**: `src/game/systems/WordSystem.js`
- **Vidas**: `src/game/scenes/PlayScene.js`

## 🎨 Assets

Los assets del juego incluyen:

- **Imágenes**: Fondos, sprites de personajes, iconos UI
- **Sonidos**: Música de fondo, efectos de acierto/error, voces
- **Fuentes**: Google Fonts (Lacquer)

Todos los assets están en el directorio `public/`.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Gonzalo Ramírez** - [@gara501](https://github.com/gara501)

## 🎯 Roadmap

- [ ] Modo multijugador
- [ ] Tabla de puntuaciones global
- [ ] Más categorías de palabras (inglés, técnicas, etc.)
- [ ] Power-ups y bonificaciones especiales
- [ ] Temas visuales personalizables
- [ ] Modo práctica sin límite de tiempo

## 🐛 Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/gara501/sneezytyper/issues) con:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si es posible

---

**¡Diviértete jugando y mejorando tu velocidad de escritura! ⌨️🎮**
