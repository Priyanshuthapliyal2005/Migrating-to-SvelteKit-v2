## Codemod Description
This codemod is designed to replace specific patterns in TypeScript files with updated code logic. It transforms instances of `goto($A)` into `window.location.href = $A;` when the `$A` value is a URL starting with `http://` or `https://`. This refactor makes external navigation more explicit by using `window.location.href`.

---

## Features
- **Pattern Matching**: Identifies instances of `goto($A)` in TypeScript files.
- **Conditional Replacement**: Applies transformations only when the matched node contains URLs starting with `http://` or `https://`.
- **Automated Code Refactoring**: Updates all matching files automatically.
- **Logging**: Displays original and transformed code snippets for review.

---

## Workflow Details
The codemod works by finding and replacing `goto($A)` with `window.location.href = $A;` based on the condition that `$A` is an external URL starting with `http://` or `https://`.

### Code Transformations:
- **Pattern**: `goto($A)`
- **Regex Filters**:
  - `http://`
  - `https://`
- **Replacement**:
  - `window.location.href = $A;`

---

## Before and After Examples

### Example 1: Internal Navigation (Unchanged)
#### Before
```typescript
import { goto } from '$app/navigation';

function navigateInternal() {
    goto('/dashboard', { state: { userId: 42, from: 'home' } });
    goto('/dashboard');
}
```

#### After
```typescript
import { goto } from '$app/navigation';

function navigateInternal() {
    goto('/dashboard', { state: { userId: 42, from: 'home' } });
    goto('/dashboard');
}
```
- **Explanation**: Internal URLs (like `/dashboard`) remain unchanged, as they do not match the transformation condition.

---

### Example 2: External Navigation with `http://`
#### Before
```typescript
function navigateExternal() {
    goto('http://example.com');
}
```

#### After
```typescript
function navigateExternal() {
    window.location.href = 'http://example.com';
}
```
- **Explanation**: External URLs starting with `http://` are transformed into `window.location.href = $A;`.

---

### Example 3: External Navigation with `https://`
#### Before
```typescript
function navigateExternal() {
    goto('https://example.com');
}
```

#### After
```typescript
function navigateExternal() {
    window.location.href = 'https://example.com';
}
```
- **Explanation**: External URLs starting with `https://` are also transformed in the same way.

---

## How It Works
1. The script scans all TypeScript files (`*.ts`) in your project.
2. It searches for instances of `goto($A)` and checks if `$A` matches either `http://` or `https://`.
3. When a match is found, the `goto($A)` pattern is replaced with `window.location.href = $A;`.
4. Internal navigation paths are left unchanged, as they do not match the regex condition.

---

## Conclusion
This codemod provides an efficient way to refactor external navigation in your TypeScript code by converting `goto($A)` into `window.location.href = $A;` for URLs starting with `http://` or `https://`. It helps make external link handling more explicit and consistent across your project.

---

## License
This codemod is open-source and licensed under the MIT License.
```