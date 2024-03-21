import sliderItem from "./SliderItem.vue";

export default {
  title: "SliderItem",
  components: { sliderItem },
};

export const defaultView = () => ({
  components: { sliderItem },
  template: `
    <SliderItem>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
      <h1>Some content here</h1>
    </SliderItem>`,
});
