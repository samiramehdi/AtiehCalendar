
const { override } = require("customize-cra");
const addlessloader = require("customize-cra-less-loader");
module.exports = override(
  addlessloader({
    lessloaderoptions: {
      lessoptions: {
        javascriptenabled: true,
        modifyvars: {
          // '@primary-color': '#038fde',
        },
      },
    },
  })
);
