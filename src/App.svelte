<script>
  import QrCode from "svelte-qrcode";
  import { onMount } from 'svelte';
  
  const version = __APP_VERSION__, app_name = __APP_NAME__, build_date = __BUILD_DATE__;
  let text = $state(""), customSize = $state(200);
  onMount(() => {
      // Get query string from URL
      const urlParams = new URLSearchParams(window.location.search);
      text = urlParams.get('text') || '';
  });
</script>


<style>
  h1,
  main, aside,
  footer {
    font-family: sans-serif;
    margin: 0 auto 0.2em;
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
<aside>
  <label>Image size
    <input bind:value={customSize} type=number />
  </label> (length: {text.length})
</aside>
<main>
  <textarea bind:value={text}></textarea>
  <div class="code">
  {#if text.length > 0}
    <QrCode value={text} size={customSize}/>
  {/if}
  </div>
</main>
<footer>
  <a href="https://github.com/z720/qrcode-generator" title="{build_date}">{app_name} {version}</a> - <small><a href="https://svelte.dev/">Svelte</a> app using <a href="https://www.npmjs.com/package/svelte-qrcode">svelte-qrcode</a> by <a href="https://z720.net">z720</a></small>
</footer>