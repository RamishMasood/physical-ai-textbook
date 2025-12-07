---
sidebar_position: 4
---

# Internationalization (i18n)

The Physical AI & Humanoid Robotics textbook supports multiple languages, including Urdu as specified in the constitution.

## Supported Languages

The textbook currently supports:
- English (en) - primary language
- Urdu (ur) - secondary language as required by constitution

## Translation Structure

Translations are organized in the `i18n/` directory:

```
i18n/
├── en/
│   └── docusaurus-plugin-content-docs/
│       └── current/
│           ├── foundations/
│           ├── robotics-math/
│           └── ...
└── ur/
    └── docusaurus-plugin-content-docs/
        └── current/
            ├── foundations/
            ├── robotics-math/
            └── ...
```

## Adding Translations

### For New Content

When adding new content, create the English version first in the `docs/` directory. Then create the translation in the appropriate language directory under `i18n/ur/`.

### Translation Process

1. Create the directory structure in `i18n/ur/docusaurus-plugin-content-docs/current/` that mirrors the English content
2. Translate the content, preserving the file names and frontmatter structure
3. Ensure all code examples and technical terms are accurately translated
4. Maintain the same sidebar positioning and navigation structure

### Code Examples

Keep code examples in English as programming languages are universal. However, comments and documentation strings can be translated:

```python
# URDU COMMENT: یہ فنکشن روبوٹ کی کینیمیٹکس کیلئے حساب کتاب کرتا ہے
def calculate_kinematics(joint_angles):
    # Calculate forward kinematics
    pass
```

## Technical Considerations

### Right-to-Left Support

Urdu is a right-to-left language. The Docusaurus theme supports RTL layout through CSS adjustments. When creating custom components, ensure they respect text direction.

### Font Support

The site uses fonts that support Arabic script characters required for Urdu text. This includes proper rendering of connected letters and appropriate typography.

### Date and Number Formatting

Dates and numbers follow locale-specific formatting when displayed in translated content.

## Maintaining Quality

### Consistency

- Maintain consistent terminology across translations
- Use the same technical terms as established in Urdu robotics literature
- Keep mathematical notation consistent with international standards

### Review Process

All translations should be reviewed by:
- Native Urdu speakers with technical knowledge
- Robotics/AI subject matter experts
- Accessibility reviewers

## Adding New Languages

To add support for additional languages:

1. Add the locale to the `i18n` configuration in `docusaurus.config.ts`
2. Create the appropriate directory structure under `i18n/[locale]/`
3. Translate the necessary files
4. Update the locale switcher configuration

## Contributing Translations

Contributions to translations are welcome! Please follow the contributing guidelines and ensure translations maintain technical accuracy while being accessible to Urdu-speaking students.