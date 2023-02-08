import { h } from 'vue';
import TButton from './TButton.vue'

export default {
  setup(props, { slots }) {
    return () => h('div', props, <TButton/>);
  },
};
