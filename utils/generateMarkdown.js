
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const license = data.license;
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            Badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'ISC':
            Badge = 'https://img.shields.io/badge/License-ISC-blue.svg';
            break;
            case 'None':
            Badge='no license';
            break;
              case 'GNU General Public License v3.0':
            Badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
            break;
            case 'Apache License 2.0':
                Badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
                break;
            case 'GNU General Public License v2.0':
            Badge='https://img.shields.io/badge/License-GPL_v2-blue.svg';
            break;
            case 'Creative Commons Zero v1.0 Uni':
                Badge='https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg';
                break;
            case 'Creative Commons Attribution 4.0 International':
            Badge='https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg';
                break;
                case 'BSD 2-Clause License':
            Badge='https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
                break;
                case 'The Unilicense':
           Badge ='https://img.shields.io/badge/license-Unlicense-blue.svg';
                break;
                case 'Boost Software License 1.0':
            Badge ='https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
                break;
                case 'Eclipse Public License 2.0':
            Badge='https://img.shields.io/badge/License-EPL_1.0-red.svg';
                break;
                case 'Mozilla Public License 2.0':
            Badge='https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
                break;
    }
return Badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
 let licenseLink = '';

    switch (license) {
        case 'MIT':
            licenseLink = 'https://choosealicense.com/licenses/mit/';
            break;
        case 'ISC':
            licenseLink = 'https://choosealicense.com/licenses/isc/';
            break;
            case 'None':
            licenseLink='no license';
            break;
              case 'GNU General Public License v3.0':
            licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
            break;
            case 'Apache License 2.0':
                licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
                break;
            case 'GNU General Public License v2.0':
            licenseLink='https://choosealicense.com/licenses/gpl-2.0/';
            break;
            case 'Creative Commons Zero v1.0 Uni':
                licenseLink='https://choosealicense.com/licenses/cc0-1.0/';
                break;
            case 'Creative Commons Attribution 4.0 International':
            licenseLink='https://choosealicense.com/licenses/cc-by-4.0/';
                break;
                case 'BSD 2-Clause License':
            licenseLink='https://opensource.org/license/bsd-2-clause/';
                break;
                case 'The Unilicense':
            licenseLink='https://choosealicense.com/licenses/unlicense/';
                break;
                case 'Boost Software License 1.0':
            licenseLink='https://choosealicense.com/licenses/bsl-1.0/';
                break;
                case 'Eclipse Public License 2.0':
            licenseLink='https://www.eclipse.org/legal/epl-2.0/';
                break;
                case 'Mozilla Public License 2.0':
            licenseLink='https://choosealicense.com/licenses/mpl-2.0/';
                break;
    }

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink= renderLicenseLink(license);

    if (licenseLink) {
        return `For this project, I license my work under the ${license} License.License info is here ${licenseLink}`;
    } else {
        return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const Badge=renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
return  `# ${data.title}  + ${Badge}
## Description
${data.describe}
## Installation
${data.install}
## Usage
${data.usage}
## License
${licenseSection}
## Contribution
${data.contribute}
## Test
${data.test}
## Questions
My Github is ${data.username} and my email is ${data.email}
`;
}

module.exports = generateMarkdown;