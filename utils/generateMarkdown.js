// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  switch(license) {
  case 'Apache':
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  case 'GPL':
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  default:
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  switch(license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if (license === 'None') {
    return '';
  }

  return `## License
  This project is licensed under the ${license} license. 
  For more information, please check ${renderLicenseLink(license)}.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  \`\`\`${data.installation}\`\`\`
  ## Usage
  \`\`\`${data.usage}\`\`\`
  ${renderLicenseSection(data.license)}
  ## Contributing
  Contributions are welcome. Please open an issue or pull request on GitHub to contribute.
  ## Tests
  \`\`\`${data.test}\`\`\`
  ## Questions
  If you have any questions, please contact me at ${data.email}.
  ### GitHub Profile
  [${data.github}](https://github.com/${data.github})
`;
}

module.exports = {generateMarkdown};