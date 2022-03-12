import React from "react";
import logoimg from "../../assets/socialwellLogo.png"

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

const image = {
  src: logoimg,
  alt: 'my image',
};

export const WithAnImage = () => <img src={image.src} alt={image.alt} />;