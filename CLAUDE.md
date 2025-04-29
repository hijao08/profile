# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test Commands

- Build: `npm run build`
- Lint: `npm run lint`
- Test (all): `npm run test`
- Test (single): `npm test -- -t "test name pattern"`
- Type check: `npm run typecheck`

## Code Style Guidelines

- **language**: use pt-br
- **Formatting**: Use Prettier with default settings
- **Imports**: Group and sort imports (React/libraries first, then local modules)
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Types**: Prefer explicit TypeScript types over `any`
- **Error Handling**: Use try/catch with appropriate error logging
- **Components**: Functional components with hooks preferred over class components
- **State Management**: Use React hooks (useState, useEffect, useContext) for state
- **Comments**: Only add JSDoc for public APIs and complex logic
- **Testing**: Write unit tests for all new functionality
