const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
    isProduction() {
        return NODE_ENV === 'production';
    }
};
