import { colors } from './colors'

export const variables = {
  spacings: {
    smallPadding: `padding: 1em;`,
    mediumPadding: `padding: 2em;`,
    largePadding: `padding: 2em;`,
  },
  inputs: {
    radio: colors.others.mediumGray,
    string: colors.background.secondary 
      + colors.text.default,
  },
  texts: {
    navText: colors.text.default 
      + `font-family: 'Titillium Web', sans-serif;
        font-weight: 200;
        font-size: 16px;
        text-transform: capitalize;`,
    sideBar: colors.text.default 
      + `font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;`,
  },
  shadow: {
    small: `box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.25);`
  },

  layout: {
    h100: `height: 100%;`,
    w0: `width: 0;`,
    w100: `width: 100%;`,
    grow: `flex-grow: 1;`,
    flexRow: `
      display: flex;
      flex-direction: row;
    `,
    flexCol: `
      display: flex;
      flex-direction: column;
    `,
    justifyBetween: `
      justify-content: space-between;
    `,

    justifyCenter: `
      justify-items: center;
      margin: auto;
    `,

    itemsCenter: `
      align-items: center;
    `,

    container: `
      margin: auto;
      max-width: 1290px;
      width: 100%;
    `
  },
  circle: `border-radius: 100%;`,
  transition: `transition: 0.4s ease-in;`
};
