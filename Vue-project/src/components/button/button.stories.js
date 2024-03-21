import xButton from "./button.vue";

export default {
  title: "Button",
  component: { xButton },
  argTypes: {
    text: {
      control: { type: "text" }
    }
  }
};


const template = (args) => ({
  components: { xButton },
  data() {
    return { args };
  },
  template: `
    <xButton v-bind="args">Some text</xButton>`
});

export const Default = template.bind({});

Default.args = {
  text: "Follow me"
};
