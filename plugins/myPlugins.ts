import global from "~/mixins/global";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.mixin(global);
  console.log(nuxtApp);

  console.log("Hello plugins");
});
