<script>
  import Button from "./Button.svelte";
  import Selector from "./Selector.svelte";
  import QrCode from "svelte-qrcode";
  import QrCodePlaceHolder from "./QrCodePlaceHolder.svelte";

  let text = "";
</script>

<style>
  h1,
  main {
    font-family: sans-serif;
  }
  main {
    text-align: center;
    display: flex; /* or inline-flex */
    flex-wrap: wrap;
    width: 100%;
    min-height: 200px;
  }
  textarea {
    flex: 2;
    min-width: 10ex;
  }
  QrCode {
    flex: 1;
  }
</style>

<h1>QR Code Generator</h1>
<main>
  <textarea bind:value={text}></textarea>
  {#if text.length > 0}
    <QrCode value="{text}" class="code" />
  {:else}
    <QrCode value="Type your text" class="code" />
  {/if}
</main>