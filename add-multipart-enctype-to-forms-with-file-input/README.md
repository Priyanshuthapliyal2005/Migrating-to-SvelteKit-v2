This codemod automatically adds the enctype="multipart/form-data" attribute to forms containing file input fields. It ensures that forms with file inputs properly handle file uploads during non-JS submissions, which is a requirement for SvelteKit v2.

### What it does
Transforms: It identifies forms that contain <input type="file"> but lack the enctype="multipart/form-data" attribute.
Adds: The enctype="multipart/form-data" attribute to those forms.

### Why it's necessary
If a form contains an <input type="file"> element but does not specify enctype="multipart/form-data", non-JS submissions will omit the file. SvelteKit v2 enforces this requirement and will throw an error if a form like this is encountered during a use:enhance submission.

## Example
### Before

```ts
<form use:enhance={handleEnhance}>
  <input type="text" name="name" />
  <input type="file" name="file" />
  <button type="submit">Submit</button>
</form>

```

### After

```ts

<form use:enhance={handleEnhance} enctype="multipart/form-data">
  <input type="text" name="name" />
  <input type="file" name="file" />
  <button type="submit">Submit</button>
</form>
```

