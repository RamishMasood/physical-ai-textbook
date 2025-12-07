# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git version control system
- A GitHub account (for deployment)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd physical-ai-textbook
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```
This command starts a local development server and opens the site in your browser at `http://localhost:3000`.

### 4. Project Structure
```
physical-ai-textbook/
├── docusaurus.config.js    # Main Docusaurus configuration
├── package.json           # Project dependencies and scripts
├── docs/                  # Textbook content by modules
│   ├── foundations/       # Foundations module content
│   ├── robotics-math/     # Robotics math module
│   └── ...
├── src/                   # Custom React components
│   ├── components/        # Reusable components
│   ├── pages/             # Custom pages
│   └── css/              # Custom styles
├── static/                # Static assets (images, files)
└── i18n/                  # Internationalization files
    ├── en/               # English translations
    └── ur/               # Urdu translations
```

## Adding Content

### Creating a New Module
1. Create a new directory in the `docs/` folder:
   ```
   docs/my-new-module/
   ```

2. Add an `index.md` file as the main page:
   ```md
   ---
   title: My New Module
   sidebar_position: 1
   ---

   # My New Module

   This is the introduction to my new module.
   ```

3. Add additional pages in the same directory:
   ```md
   ---
   title: First Lesson
   sidebar_position: 2
   ---

   # First Lesson

   Content for the first lesson...
   ```

### Using Advanced Features

#### Code Tabs for Multiple Languages
```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python">
    ```python
    def hello_robot():
        print("Hello, Robot!")
    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
    ```cpp
    #include <iostream>
    void helloRobot() {
        std::cout << "Hello, Robot!" << std::endl;
    }
    ```
  </TabItem>
</Tabs>
```

#### Admonitions for Notes and Warnings
```mdx
import Info from '@theme/Admonition';

<Info>
  This is an important note about robotics!
</Info>

<Tip>
  This is a helpful tip for understanding the concept.
</Tip>

<Warning>
  This is a warning about a common mistake.
</Warning>
```

#### Mermaid Diagrams
```mdx
import Mermaid from '@theme/Mermaid';

<Mermaid>
graph TD;
    A[Robot] --> B[Sensors];
    B --> C[Processor];
    C --> D[Actuators];
</Mermaid>
```

## Internationalization (i18n)

### Adding Translations
1. Create a new language directory in `i18n/`:
   ```
   i18n/es/  # For Spanish
   ```

2. Copy the `code.json` from another language directory and translate the UI strings

3. To translate content, run:
   ```bash
   npm run write-translations -- --locale es
   ```

### Building for Different Languages
```bash
# Build for English (default)
npm run build

# Build for Urdu
npm run build -- --locale ur

# Build for all languages
npm run build
```

## Deployment

### GitHub Pages Deployment
The site is configured for GitHub Pages deployment. To deploy:

1. Make sure your GitHub repository is set up
2. Update the `deploymentBranch` in `docusaurus.config.js` if needed
3. Run the deployment command:
   ```bash
   GIT_USER=<your-github-username> npm run deploy
   ```

### Environment Variables
Create a `.env` file in the root directory for environment-specific settings:
```
ALGOLIA_APP_ID=your_algolia_app_id
ALGOLIA_SEARCH_API_KEY=your_algolia_search_api_key
ALGOLIA_INDEX_NAME=your_algolia_index_name
```

## Useful Commands

```bash
# Start local development server
npm start

# Build static files for production
npm run build

# Build for a specific locale
npm run build -- --locale ur

# Serve built files locally for testing
npm run serve

# Generate/update translation files
npm run write-translations -- --locale ur

# Check for broken links
npm run swizzle @docusaurus/remark-plugin-npm2yarn -- --typescript

# Clean the build directory
npm run clear
```

## Custom Components

### Available Components
- `@theme/Admonition` - For notes, warnings, tips
- `@theme/Tabs` - For tabbed content
- `@theme/Mermaid` - For diagrams
- Custom components in `src/components/`

### Creating Custom Components
1. Create a new component in `src/components/`
2. Import and use in your MDX files

Example:
```jsx
// src/components/RobotDiagram.js
import React from 'react';

export default function RobotDiagram({ children }) {
  return (
    <div className="robot-diagram">
      <h3>Robot Architecture</h3>
      {children}
    </div>
  );
}
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Build fails with memory error**
   ```bash
   # Increase Node.js memory limit
   export NODE_OPTIONS="--max_old_space_size=4096"
   npm run build
   ```

3. **Translations not showing**
   - Make sure the locale is added in `docusaurus.config.js`
   - Run `npm run write-translations -- --locale <locale>` to generate translation files

### Getting Help
- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Review the [repository issues](https://github.com/your-repo/issues)
- Contact the development team