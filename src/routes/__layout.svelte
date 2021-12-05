<script>
  import '../app.css';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
</script>

{#if (window.location.hostname != 'localhost')}
  <GoogleAnalytics properties={[ 'G-DZ1WT5YXMP' ]} />
{/if}
<slot />
