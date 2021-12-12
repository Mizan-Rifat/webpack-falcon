import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
  {
    input: './src/js/phoenix.js',
    output: {
      file: './public/assets/js/phoenix.js',
      format: 'iife'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },
  {
    external: ['echarts'],
    input: './src/js/default.js',
    output: {
      file: './public/assets/js/default.js',
      format: 'iife',
      globals: {
        echarts: 'echarts'
      }
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },
  {
    external: ['echarts'],
    input: './src/js/saas.js',
    output: {
      file: './public/assets/js/saas.js',
      format: 'iife',
      globals: {
        echarts: 'echarts'
      }
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  }
];
