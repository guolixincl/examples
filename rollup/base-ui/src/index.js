import Text from "./Text/index.vue";
import Button from "./Button/index.vue";

const components = [Text, Button];

const install = function(Vue) {
  if (!Vue || install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Text,
  Button
}

export default {
  install
};
