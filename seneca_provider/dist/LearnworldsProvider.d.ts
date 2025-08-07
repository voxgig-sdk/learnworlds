type LearnworldsProviderOptions = {
    debug: boolean;
    native?: any;
};
declare function LearnworldsProvider(this: any, options: LearnworldsProviderOptions): {
    exports: {
        sdk: () => any;
    };
};
export default LearnworldsProvider;
