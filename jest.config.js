module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss)$": "<rootDir>/__mocks__/fileMock.js"
  },
  setupFilesAfterEnv: [
    "./setupTests.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/cypress"
  ],
  coverageReporters: [
    "text-summary"
  ]
}
