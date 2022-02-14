<template>
  <div>
    <h1>This is a test</h1>
    <p>val from namespaced initial set up store: <b>{{ test }}</b></p>
    <unleash-feature name="myFeature">
      <h2>I'm feature toggled with a component</h2>
    </unleash-feature>
  </div>
</template>

<script>
export default {
  computed: {
    test() {
      return this.$store.getters["test/getTest"].b;
    },
  },
};
</script>
