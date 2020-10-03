// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
\`
${data.install}
\`
## Usage 

${data.userinfo}

## Credits

${data.credits}

## License

![Picture of ${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg)

---

## Badges

![${data.reponame}](https://img.shields.io/github/languages/top/${data.username}/${data.reponame})

## Contributing

${data.contributing}

## Tests
\`
${data.tests}
\`


Copyright (c) 2020 John Nederveld\n
GitHub: [${data.username}](https://github.com/${data.username})\n
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
