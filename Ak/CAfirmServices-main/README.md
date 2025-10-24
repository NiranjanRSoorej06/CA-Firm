# TDS Services Website - React Version

This is a React conversion of the TDS Services website for SBCPL. The website provides information about Tax Deducted at Source (TDS) compliance and filing services.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component-Based Structure**: Modular components for easy maintenance
- **Professional UI**: Clean and modern design with smooth interactions

## Components

- **Header**: Navigation bar with logos and menu items
- **Hero**: Large banner section with service introduction
- **Compliance**: Information about TDS compliance support
- **Services**: Grid of TDS services offered
- **Footer**: Contact information and links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd /home/ak/Documents/testing_/html/react-tds-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
react-tds-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Compliance.js
│   │   ├── Services.js
│   │   └── Footer.js
│   ├── assets/
│   │   ├── sbclogo.png
│   │   ├── CAlogo.png
│   │   ├── tax.jpg
│   │   └── world.png
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family for typography

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Customization

The website can be easily customized by:

1. **Modifying Colors**: Update the color scheme in `tailwind.config.js`
2. **Adding Services**: Edit the services array in `Services.js`
3. **Updating Content**: Modify text content in respective component files
4. **Changing Images**: Replace images in the `src/assets` directory

## Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
