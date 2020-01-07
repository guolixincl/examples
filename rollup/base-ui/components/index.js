import Text from "./Text/index.vue"
import Button from "./Button/index.vue"

const components = {
  Text,
  Button
}

const install = function (Vue) {
  if (!Vue || install.installed) return;

  const componentsName = Object.keys(components)
  componentsName.forEach(name => {
    const component = components[name]
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
