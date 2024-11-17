<form use:enhance={handleEnhance}>
  <input type="text" name="name" />
  <input type="file" name="file" />
  <button type="submit">Submit</button>
</form>


//after
<form use:enhance={handleEnhance} enctype="multipart/form-data">
  <input type="text" name="name" />
  <input type="file" name="file" />
  <button type="submit">Submit</button>
</form>
