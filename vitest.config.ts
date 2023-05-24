import path from 'path'

export default {
  resolve: {
    alias: {
      '@errors': path.resolve(__dirname, './src/errors'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@config': path.resolve(__dirname, './src/config'),
      '@env': path.resolve(__dirname, './src/env'),
    },
  },
}