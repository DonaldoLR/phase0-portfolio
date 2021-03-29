// console.log('Is this connected?');

const socialMedia = [
    {company: 'Github', logo: './github-logo.svg', url: 'https://github.com/DonaldoLR'}, 
    {company: 'Medium', logo: './medium-size.svg', url: 'https://donaldolr.medium.com/'}
]

const footer = document.getElementsByTagName('footer')[0];
const footerImgs = footer.getElementsByTagName('img');
const footerA = footer.getElementsByTagName('a');

for (let i = 0; i < socialMedia.length; i++){
    footerA[i].setAttribute('href', socialMedia[i].url);
    footerA[i].setAttribute('target', '_blank');
    footerImgs[i].setAttribute('src', socialMedia[i].logo);
    footerImgs[i].setAttribute('width', '50px');
}