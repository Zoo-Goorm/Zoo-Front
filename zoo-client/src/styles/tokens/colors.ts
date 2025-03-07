const COLOR_TOKEN = {
  bw: {
    white: 'rgb(255,255,255)',
    black: 'rgb(0,0,0)',
  },
  'grey-n': {
    10: '#f9f9f9',
    50: 'rgb(240, 240, 240)',
    100: 'rgb(209,209,209)',
    200: 'rgb(187,187,187)',
    300: 'rgb(156,156,156)',
    400: 'rgb(137,137,137)',
    500: 'rgb(107,107,107)',
    600: 'rgb(97,97,97)',
    700: 'rgb(76,76,76)',
    800: 'rgb(59,59,59)',
    900: 'rgb(45,45,45)',
  },
  'grey-c': {
    10: '#f1f4f7',
    50: 'rgb(239,240,241)',
    100: 'rgb(206,208,212)',
    200: 'rgb(182,186,192)',
    300: 'rgb(149,154,163)',
    400: 'rgb(129,134,145)',
    500: 'rgb(97,104,117)',
    600: 'rgb(88,95,106)',
    700: 'rgb(69,74,83)',
    800: 'rgb(53,57,64)',
    900: 'rgb(41,44,49)',
  },
  green: {
    50: 'rgb(230,254,248)',
    100: 'rgb(177,253,234)',
    200: 'rgb(139,252,223)',
    300: 'rgb(85,251,209)',
    400: 'rgb(53,250,200)',
    500: 'rgb(2,249,186)',
    600: 'rgb(2,227,169)',
    700: 'rgb(1,177,132)',
    800: 'rgb(1,137,102)',
    900: 'rgb(1,105,78)',
  },
  purple: {
    50: 'rgb(237,223,255)',
    100: 'rgb(198,187,255)',
    200: 'rgb(171,154,255)',
    300: 'rgb(132,108,255)',
    400: 'rgb(109,80,255)',
    500: 'rgb(72,36,255)',
    600: 'rgb(66,33,232)',
    700: 'rgb(51,26,181)',
    800: 'rgb(40,20,140)',
    900: 'rgb(30,15,107)',
  },
  red: {
    50: 'rgb(251,232,232)',
    100: 'rgb(241,184,184)',
    200: 'rgb(234,149,149)',
    300: 'rgb(225,101,101)',
    400: 'rgb(219,71,71)',
    500: 'rgb(210,25,25)',
    600: 'rgb(191,23,23)',
    700: 'rgb(149,18,18)',
    800: 'rgb(116,14,14)',
    900: 'rgb(88,11,11)',
  },
  yellow: {
    50: 'rgb(255,253,237)',
    100: 'rgb(255,248,200)',
    200: 'rgb(255,244,173)',
    300: 'rgb(255,239,136)',
    400: 'rgb(255,236,113)',
    500: 'rgb(255,231,77)',
    600: 'rgb(232,210,70)',
    700: 'rgb(181,164,55)',
    800: 'rgb(140,127,42)',
    900: 'rgb(107,97,32)',
  },
  blue: {
    50: 'rgb(230,242,255)',
    100: 'rgb(176,214,255)',
    200: 'rgb(138,194,255)',
    300: 'rgb(84,167,255)',
    400: 'rgb(51,149,255)',
    500: 'rgb(0,123,255)',
    600: 'rgb(0,112,232)',
    700: 'rgb(0,87,181)',
    800: 'rgb(0,68,140)',
    900: 'rgb(0,52,107)',
  },
};

const colors = {
  /* background */
  bg: {
    primary: COLOR_TOKEN.bw.white,
    secondary: COLOR_TOKEN['grey-n'][10],
    thirary: COLOR_TOKEN['grey-n'][50],
    black: COLOR_TOKEN.bw.black,
    'badge-subject': COLOR_TOKEN.yellow[200],
  },

  /* fill */
  'fill-primary': COLOR_TOKEN.purple[500],
  'fill-thirary': COLOR_TOKEN['grey-c'][50],
  fill: {
    primary: {
      hover: COLOR_TOKEN.purple[600],
      pressed: COLOR_TOKEN.purple[800],
      disabled: COLOR_TOKEN['grey-c'][200],

      list: 'rgba(72, 36, 255, 80)',
    },
    secondary: COLOR_TOKEN.green[500],
    thirary: {
      hover: '#ced0d4',
      pressed: '#818691',
      disabled: 'f1f4f7',
      list: 'rgba(239, 240, 241, 80)',
    },

    'kakao-login': '#fee500',
    active: COLOR_TOKEN['grey-n'][500],
    inactive: COLOR_TOKEN['grey-n'][100],
  },

  /* text */
  'text-primary': COLOR_TOKEN.purple[500],
  text: {
    primary: {
      hover: COLOR_TOKEN.purple[600],
      pressed: COLOR_TOKEN.purple[800],
    },
    secondary: COLOR_TOKEN.green[500],
    thirary: COLOR_TOKEN['grey-n'][400],
    disabled: COLOR_TOKEN['grey-c'][50],
    main: COLOR_TOKEN['grey-n'][900],
    sub: COLOR_TOKEN['grey-n'][500],
    headline: '#2D2D2D',
    figure: COLOR_TOKEN['grey-n'][300],
    error: COLOR_TOKEN.red[500],
    success: COLOR_TOKEN.blue[500],
    care: COLOR_TOKEN.yellow[500],
    white: COLOR_TOKEN.bw.white,
  },

  /* stroke */
  'stroke-primary': COLOR_TOKEN.purple[500],
  stroke: {
    primary: {
      hover: COLOR_TOKEN.purple[600],
      pressed: COLOR_TOKEN.purple[800],
      disabled: COLOR_TOKEN.purple[200],

      secondary: COLOR_TOKEN.green[500],
      thirary: COLOR_TOKEN['grey-c'][200],
      quaternary: COLOR_TOKEN['grey-c'][800],
    },
  },

  /* divider */
  divider: {
    primary: COLOR_TOKEN['grey-n'][700],
    secondary: COLOR_TOKEN['grey-n'][100],
  },

  /* material */
  material: {
    overlay: 'rgba(0, 0, 0, 0.60)',
    'blur-effect': '20',
  },
};

export default colors;
