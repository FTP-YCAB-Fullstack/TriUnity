const jimp = require("jimp");
const path = require("path");

// const originalImage = "./1634571750425-photo.png";
const orignalLogo = path.join(__dirname, "../data/assets/logo.png");
const logoMarginPercentage = 10;

const watermarkImage = async (originalImage, originalName) => {
  const filename = path.join(
    __dirname,
    "../data/image",
    originalName + "-watermark.png"
  );

  const [image, logo] = await Promise.all([
    jimp.read(originalImage),
    jimp.read(orignalLogo)
  ]);

  logo.resize(image.bitmap.width / 5, jimp.AUTO);

  const xMargin = (image.bitmap.width * logoMarginPercentage) / 100;
  const yMargin = (image.bitmap.height * logoMarginPercentage) / 100;

  const X = image.bitmap.width - logo.bitmap.width - xMargin;
  const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  const imageWithWatermark = image.composite(logo, X, Y, [
    {
      mode: jimp.BLEND_SCREEN,
      opacitySource: 0.1,
      opacityDest: 1
    }
  ]);

  imageWithWatermark.write(filename);
};

module.exports = watermarkImage;
