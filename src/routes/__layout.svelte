<script>
  import '../app.css';
</script>

{#if (window.location.hostname != 'localhost')}
  <GoogleAnalytics properties={[ 'G-DZ1WT5YXMP' ]} />
{/if}
<slot />
