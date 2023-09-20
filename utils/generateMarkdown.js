
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
    const licenseSection = renderLicenseSection(data.license);
return  `# ${data.title}
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