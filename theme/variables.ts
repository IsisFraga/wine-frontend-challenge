import { colors } from './colors'

export const variables = {
  spacings: {
    smallPadding: `padding: 1em;`,
    smallHorizPadding: `padding: 0 1em;`,
    smallVertPadding: `padding: 0.5em 0;`,
    mediumPadding: `padding: 1.5em;`,
    mediumHorizPadding: `padding: 0 1.5em;`,
    largePadding: `padding: 2.5em;`,
    largeHorizPadding: `padding: 0 2.5em;`,
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
    default: colors.text.default 
      + `font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;`,
  },
  shadow: {
    small: `box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.25);`
  },

  layout: {
    h0: `height: 0;`,
    h100: `height: 100%;`,
    hAuto: `height: auto;`,
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
      justify-content: center;
      margin: auto;
    `,

    justifyStart: `
      justify-content: flex-start;
    `,

    itemsCenter: `
      align-items: center;
    `,

    itemsEnd: `
      align-items: flex-end;
    `,

    container: `
      margin: auto;
      max-width: 1290px;
      width: 100%;
    `
  },
  circle: `border-radius: 100%;`,
  transition: `transition: 0.4s ease-in;`,


  inputRadio: 
  `border: 1px solid #eee;
  border-radius: 5px;
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5em;


  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }


  .checkmark {
    position: absolute;
    top: -2px;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: white;
    border: 2px solid #B6116E;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 3px;
    left: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #B6116E;
  }
  `
};
