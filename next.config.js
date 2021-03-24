const isDev = process.env.NODE_ENV !== "production";
module.exports = {
    basePath: isDev ? "": "/portfolio",
    assetPrefix: isDev ? "": "/portfolio/"
}