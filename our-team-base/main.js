// selezione dom html
let container = document.querySelector('.team-container');
// const teamcardimg = document.createElement('div');
// teamcardimg.className = 'team-card';
// const Cardimg = document.createElement('div');
// Cardimg.className = 'card-image';
// const cardtxt = document.createElement('div');
// cardtxt.className = 'card-text'
// const h3 = document.createElement('h3');
// const p = document.createElement('p');



// immagini
let img0 = document.createElement('img');
img0.src = "img/wayne-barnett-founder-ceo.jpg";

let img1 = document.createElement('img');
img1.src = "img/angela-caroll-chief-editor.jpg";

let img2 = document.createElement('img');
img2.src = "img/walter-gordon-office-manager.jpg";

let img3 = document.createElement('img');
img3.src = "img/angela-lopez-social-media-manager.jpg";

let img4 = document.createElement('img');
img4.src = "img/scott-estrada-developer.jpg";

let img5 = document.createElement('img');
img5.src = "img/barbara-ramos-graphic-designer.jpg";

// creare array oggetti che definisce i membri del team

const TeamMember = [

    {
        'img' : img0,
        'nome' : 'Wayne Barrett',
        'ruolo' : 'founder CEO',

    },
    {
        'img' : img1,
        'nome' : 'Angela Carol',
        'ruolo' : 'Chief Editor',
    },
    
    {
        'img' : img2,
        'nome' : 'Walter Gorgo',
        'ruolo' : 'Office Manager',
    },   

    {
        'img' : img3,
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
    },   

    {
        'img' : img4,
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
    },

    {
        'img' : img5,
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
    },





        // 'img' : [img1, img2, img3, img4, img5],
        // nome : ['Angela Carol', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'],
        // 'ruolo' : ['Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer']

    
];



    // container.append(teamcardimg);
    // teamcardimg.append(Cardimg);
    // Cardimg.append(TeamMember[0].img);
    // Cardimg.append(cardtxt);
    // cardtxt.append(h3);
    // cardtxt.append(p);
    // h3.append(TeamMember[0].nome);
    // p.append(TeamMember[0].ruolo);

    

for (let index = 0; index < TeamMember.length; index++) {
    const teamcardimg = document.createElement('div');
    teamcardimg.className = 'team-card';
    const Cardimg = document.createElement('div');
    Cardimg.className = 'card-image';
    const cardtxt = document.createElement('div');
    cardtxt.className = 'card-text';
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    container.append(teamcardimg);
    teamcardimg.append(Cardimg);
    Cardimg.append(TeamMember[index].img);
    teamcardimg.append(cardtxt);
    cardtxt.append(h3);
    cardtxt.append(p);
    h3.append(TeamMember[index].nome);
    p.append(TeamMember[index].ruolo);
    
}