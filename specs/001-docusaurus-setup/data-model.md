# Data Model: Docusaurus Setup for Physical AI Textbook

## Content Structure

### Textbook Module
- **Entity**: Module
- **Fields**:
  - id: string (unique identifier, e.g., "foundations", "robotics-math")
  - title: string (display title)
  - description: string (brief description of the module)
  - order: number (sequence for navigation)
  - prerequisites: array of strings (other modules that should be completed first)
  - learningObjectives: array of strings (what students will learn)
  - weeks: array of Week entities

### Week
- **Entity**: Week
- **Fields**:
  - id: string (unique identifier within module, e.g., "week-1", "week-2")
  - title: string (display title)
  - description: string (brief description of the week's content)
  - order: number (sequence within module)
  - learningObjectives: array of strings (what students will learn in this week)
  - sections: array of Section entities

### Section
- **Entity**: Section
- **Fields**:
  - id: string (unique identifier within week, e.g., "introduction", "math-foundations")
  - title: string (display title)
  - contentPath: string (path to the MDX file)
  - order: number (sequence within week)
  - learningObjectives: array of strings (what students will learn in this section)
  - duration: string (estimated time to complete, e.g., "30 minutes")
  - prerequisites: array of strings (other sections that should be completed first)
  - relatedSections: array of strings (other sections that complement this one)

## Content Features

### Code Example
- **Entity**: CodeExample
- **Fields**:
  - id: string (unique identifier)
  - title: string (optional descriptive title)
  - description: string (explanation of what the code does)
  - languages: object (key-value pairs where key is language name and value is code)
  - explanation: string (step-by-step explanation of the code)
  - difficulty: string (beginner, intermediate, advanced)

### Diagram
- **Entity**: Diagram
- **Fields**:
  - id: string (unique identifier)
  - title: string (optional descriptive title)
  - type: string (mermaid type: flowchart, sequence, class, etc.)
  - code: string (mermaid syntax)
  - description: string (explanation of what the diagram represents)
  - caption: string (caption to display below diagram)

### Admonition
- **Entity**: Admonition
- **Fields**:
  - id: string (unique identifier)
  - type: string (note, tip, warning, danger)
  - title: string (optional title)
  - content: string (the admonition content)
  - position: number (where in the content this appears)

### Tab Set
- **Entity**: TabSet
- **Fields**:
  - id: string (unique identifier)
  - title: string (optional overall title for the tab set)
  - tabs: array of Tab entities
  - defaultActive: string (which tab should be active by default)

### Tab
- **Entity**: Tab
- **Fields**:
  - id: string (unique identifier)
  - title: string (display title for the tab)
  - content: string (content for this tab)
  - language: string (programming language if applicable)

## Navigation Structure

### Sidebar
- **Entity**: Sidebar
- **Fields**:
  - id: string (unique identifier)
  - label: string (display name for the sidebar)
  - items: array of SidebarItem entities
  - collapsible: boolean (whether sections can be collapsed)

### SidebarItem
- **Entity**: SidebarItem
- **Fields**:
  - type: string (doc, category, link)
  - id: string (reference to document or category)
  - label: string (display name)
  - href: string (URL if type is link)
  - items: array of SidebarItem entities (if type is category)
  - className: string (CSS class for custom styling)

## Internationalization

### Translation
- **Entity**: Translation
- **Fields**:
  - language: string (language code, e.g., "en", "ur")
  - contentId: string (reference to the content being translated)
  - title: string (translated title)
  - content: string (translated content)
  - status: string (draft, reviewed, approved)

## User Interface Elements

### Theme
- **Entity**: Theme
- **Fields**:
  - mode: string (light, dark, auto)
  - primaryColor: string (hex color for primary theme)
  - secondaryColor: string (hex color for secondary elements)
  - fontFamily: string (font family for text)
  - codeFontFamily: string (font family for code blocks)

### Layout
- **Entity**: Layout
- **Fields**:
  - sidebar: boolean (whether to show sidebar)
  - toc: boolean (whether to show table of contents)
  - prevNextButtons: boolean (whether to show prev/next navigation)
  - breadcrumbs: boolean (whether to show breadcrumb navigation)
  - footer: boolean (whether to show footer navigation)