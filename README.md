# jsTrio

Three Interactive JavaScript Mini Projects demonstrating DOM manipulation, event handling, and local storage.

## Overview

jsTrio is a collection of three practical web applications built with vanilla JavaScript, showcasing essential web development concepts in an interactive and user-friendly way.

## Features

### 1. Fortune Message Generator

Get a random fortune message to brighten your day! This feature demonstrates:

- Random content generation
- DOM manipulation
- Dynamic theme switching
- Smooth animations and transitions

**Path:** `pages/fortuneMsg/fortuneMsg.html`

### 2. Stopwatch

A simple 30-second timer with intuitive controls. This feature demonstrates:

- Event handling
- Timer implementation using `setInterval`
- Button state management
- Real-time display updates

**Path:** `pages/stopwatch/stopwatch.html`

### 3. To-Do List

Organize your tasks efficiently with persistence. This feature demonstrates:

- Local Storage API
- CRUD operations (Create, Read, Update, Delete)
- Task animations
- Data persistence across sessions

**Path:** `pages/todoList/todoList.html`

## Technologies Used

- **Vanilla JavaScript** - Core functionality and interactivity
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind CSS
- **Font Awesome** - Icon library
- **Vercel Analytics** - Web analytics

## Project Structure

```
jsTrio/
├── index.html              # Homepage with hero section and project cards
├── pages/
│   ├── fortuneMsg/
│   │   └── fortuneMsg.html # Fortune message generator
│   │   └── fortuneMsg.js    # Fortune message generator
│   ├── stopwatch/
│   │   └── stopwatch.html  # 30-second stopwatch timer
│   │   └── stopwatch.js    # 30-second stopwatch timer
│   └── todoList/
│       └── todoList.html   # Task management application
│       └── todoList.js     # Task management application
├── scripts/
│   └── components.js       # Shared header and footer components
├── styles/
│   └── style.css           # Custom styles
├── assets/                 # Images and static resources
└── tailwind.config.js      # Tailwind configuration
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A local development server for best experience

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jsTrio.git
```

2. Navigate to the project directory:

```bash
cd jsTrio
```

3. Open `index.html` in your browser or use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

4. Visit `http://localhost:8000` (or the appropriate port) in your browser

## Usage

### Homepage

The homepage provides an overview of all three projects with:

- Hero section introducing jsTrio
- Project cards with descriptions and quick access links
- Technology stack information

### Individual Projects

Click on any project card to explore the individual applications:

- **Fortune Message** - Click the button to generate random fortune messages
- **Stopwatch** - Use Start, Stop, and Reset buttons to control the timer
- **To-Do List** - Add tasks, mark them complete, and delete them as needed

## Features Highlights

### Responsive Design

All pages are fully responsive and work seamlessly across:

- Desktop computers
- Tablets
- Mobile devices

### Smooth Animations

Enhanced user experience with:

- Hover effects on cards
- Fade-in animations
- Task entry/exit animations
- Button state transitions

### Data Persistence

The To-Do List maintains your tasks even after closing the browser using Local Storage.

### Clean Code Architecture

- Modular component system
- Shared header and footer across pages
- Reusable utility functions
- Consistent styling patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Key Concepts Demonstrated

1. **DOM Manipulation**

   - Dynamic element creation and removal
   - Content updates and styling changes
   - Event listener management

2. **Event Handling**

   - Click events
   - Form submissions
   - Keyboard interactions
   - State management

3. **Local Storage**

   - Data serialization (JSON)
   - Persistent state management
   - CRUD operations

4. **Modern CSS**
   - Tailwind utility classes
   - DaisyUI components
   - Responsive design patterns
   - CSS animations and transitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built as a learning project to demonstrate fundamental JavaScript concepts
- Inspired by common web development patterns and best practices
- Uses modern web technologies and frameworks

## Contact

For questions or feedback, please open an issue in the repository.

---

Made with JavaScript, Tailwind CSS, and DaisyUI
