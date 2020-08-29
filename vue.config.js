module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                @import "~@/assets/sass/main.scss";
                @import "~@/assets/scss/_variables.scss";
                @import "~@/assets/scss/_mixins.scss";
                `,
			},
		},
	},
};
