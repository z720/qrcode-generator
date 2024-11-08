<script>
  import QrCode from "svelte-qrcode";
  let text = "", customSize = 200;
</script>

<style>
  h1,
  main, aside,
  footer {
    font-family: sans-serif;
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  textarea {
    flex: 1 1 auto;
    min-width: 400px;
    min-height: 200px;
  }
  .code {
    flex: 0 0 200px;
  }
</style>

<h1>QR Code Generator</h1>
<main>
  <textarea bind:value={text}></textarea>
  <div class="code">
  {#if text.length > 0}
    <QrCode value="{text}" size="{customSize}"/>
  {/if}
  </div>
</main>
<aside>
  <label>Image size
    <input bind:value={customSize} type=number />
  </label>

</aside>
<footer>
  <a href="https://svelte.dev/">Svelte</a> app using <a href="https://www.npmjs.com/package/svelte-qrcode">svelte-qrcode</a> by <a href="https://z720.net">z720</a>
</footer>