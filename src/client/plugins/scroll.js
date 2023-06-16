export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("scroll", {
    beforeMount(el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.addEventListener("scroll", f);
        }
      };
    },

    beforeDestroy(el, binding) {
      let f = function (evt) {
        window.removeEventListener("scroll", f);
      };
    },
  });
});
