# Research: Docusaurus Setup for Physical AI Textbook

## Decision: Docusaurus Version and Core Dependencies
- **Decision**: Use Docusaurus 3.x (latest stable version) with React 18+ and MDX 2.x
- **Rationale**: Docusaurus 3.x is the current stable version with latest features and security updates. React 18+ provides concurrent features and better performance. MDX 2.x enables rich content with embedded React components.
- **Alternatives considered**:
  - Docusaurus 2.x: Would miss out on latest features and improvements
  - Other static site generators (Next.js, Gatsby): Docusaurus is specifically designed for documentation sites and has built-in features for educational content

## Decision: Search Implementation
- **Decision**: Use Algolia DocSearch for search functionality
- **Rationale**: Algolia DocSearch is the recommended search solution for Docusaurus sites, provides excellent performance and relevance, and has a free tier for open-source projects
- **Alternatives considered**:
  - Local search plugins: Less powerful than Algolia
  - Custom search: Would require significant development effort

## Decision: Code Syntax Highlighting
- **Decision**: Use Prism.js for syntax highlighting (built into Docusaurus)
- **Rationale**: Docusaurus includes Prism.js by default with support for many languages including Python, C++, JavaScript, etc. Easy to configure and customize
- **Alternatives considered**:
  - Other syntax highlighters: Would require additional configuration and may not integrate as well with Docusaurus

## Decision: Diagram Support
- **Decision**: Use Mermaid for architecture visualizations
- **Rationale**: Mermaid diagrams are supported natively in Docusaurus and allow creating flowcharts, sequence diagrams, class diagrams, etc. using simple text syntax
- **Alternatives considered**:
  - Static images: Less maintainable and harder to update
  - Other diagramming tools: Would require additional dependencies

## Decision: Code Example Tabs
- **Decision**: Use Docusaurus Tabs component for different code examples
- **Rationale**: Docusaurus provides a built-in Tabs component that works well for showing code examples in different languages (Python, C++, etc.) with synchronized tab selection
- **Alternatives considered**:
  - Custom tab implementation: Would require additional development work

## Decision: Admonitions (Tips, Warnings, Notes)
- **Decision**: Use Docusaurus Admonitions component
- **Rationale**: Docusaurus provides built-in admonition types (note, tip, warning, danger) with appropriate styling that's accessible and recognizable
- **Alternatives considered**:
  - Custom callout components: Would require additional CSS and potentially not be as accessible

## Decision: Theme Support
- **Decision**: Implement dark/light theme toggle using Docusaurus' built-in theme support
- **Rationale**: Docusaurus has native support for light/dark themes with automatic system preference detection and manual toggle options
- **Alternatives considered**:
  - Custom theme implementation: Would require significant CSS and JavaScript work

## Decision: Content Organization
- **Decision**: Organize content in docs/ folder by educational modules and weeks as specified
- **Rationale**: This follows Docusaurus conventions and makes content easily navigable by students following a structured learning path
- **Alternatives considered**:
  - Different organizational structure: Would not align with educational goals

## Decision: Deployment Strategy
- **Decision**: Use GitHub Pages with GitHub Actions for automated CI/CD
- **Rationale**: GitHub Pages is free, reliable, and integrates well with GitHub repositories. GitHub Actions provides automated building and deployment
- **Alternatives considered**:
  - Other hosting providers (Netlify, Vercel): Would require additional configuration and potentially have costs

## Decision: Multi-language Support Implementation
- **Decision**: Use Docusaurus' built-in i18n support with separate directories for each language
- **Rationale**: Docusaurus provides comprehensive i18n support with language switching, URL routing, and content organization that aligns with the constitution requirement for Urdu translation
- **Alternatives considered**:
  - Custom translation solution: Would require significant development effort

## Research: Testing Strategy
- **Decision**: Use Jest for unit tests and Cypress for E2E tests
- **Rationale**: Jest is the standard for React component testing and Cypress is excellent for testing the static site functionality. Both integrate well with Docusaurus projects.
- **Alternatives considered**:
  - Other testing frameworks: These are the most established and well-supported options