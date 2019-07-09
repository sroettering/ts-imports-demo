module.exports = {
  name: 'ts-imports-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ts-imports-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
