<template>
  <h1>Params</h1>
  <pre>{{ paramId }}</pre>
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      paramId: this.$route.params.id,
    };
  },
};
</script>
