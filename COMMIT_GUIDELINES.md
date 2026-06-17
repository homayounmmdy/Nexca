# Contributing to Nexca

Thank you for contributing to this project! To keep our commit history clean, readable, and automated, we strictly follow the **Conventional Commits** specification.

Please read this guide before making any commits or opening a Pull Request.

## 📝 Commit Message Format

Every commit message must follow this structure:

```text
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### 1. `<type>` (Required)

The type must be one of the following:
| Type | Description |
| :--- | :--- |
| `feat` | A new feature (triggers a `MINOR` version bump) |
| `fix` | A bug fix (triggers a `PATCH` version bump) |
| `docs` | Documentation only changes |
| `style` | Formatting, missing semi-colons, etc. (no code logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | A code change that improves performance |
| `test` | Adding or correcting tests |
| `build` | Changes to build system or external dependencies (e.g., npm, webpack) |
| `ci` | Changes to CI configuration files and scripts |
| `chore` | Maintenance tasks, updating dev dependencies, etc. |
| `revert` | Reverts a previous commit |

### 2. `<scope>` (Optional but Recommended)

A short, lowercase phrase indicating what part of the codebase is affected (e.g., `auth`, `api`, `ui`, `database`, `deps`).

### 3. `<subject>` (Required)

- Use the **imperative, present tense**: "add" not "added" or "adds". _(Think: "If applied, this commit will [subject]")_
- **Do not** capitalize the first letter.
- **Do not** end with a period (`.`).
- Keep it concise (under 72 characters).

### 4. `<body>` and `<footer>` (Optional)

- **Body**: Explain _what_ and _why_ (not _how_). Wrap at 72 characters.
- **Footer**: Use for breaking changes (`BREAKING CHANGE: ...`) or to reference issues (`Closes #123`).

## ✅ Good Examples

```text
feat(auth): add JWT token validation middleware

fix(api): resolve null pointer exception on user fetch

docs(readme): update installation instructions for macOS

refactor(database): migrate user schema to use UUIDs

chore(deps): bump lodash from 4.17.20 to 4.17.21
```

## ❌ Bad Examples

```text
# ❌ Missing type and scope, uses past tense, ends with period
Added the new login feature.

# ❌ Vague, no context
fixed bug

# ❌ Capitalized subject, uses "update" instead of imperative "add"
Feat(UI): Updates the button color
```