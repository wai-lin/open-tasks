import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return

  const moduleName = camelCase(fileName.replace(/\.\/|\.js/g, ''))
  const module = requireModule(fileName).default || requireModule(fileName)
  modules[moduleName] = {
    namespaced: true,
    ...module,
  }
})

export default modules
