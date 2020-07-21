module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "network": "@/network",
                "views":"@/views",
            }

        }
  },
  devServer: {

    public: '0.0.0.0:8080',
    hot: true,
    port: 8081,
    disableHostCheck: true,

  }
}
