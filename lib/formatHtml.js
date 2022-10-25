//function that wraps all the sections in one
const generate = team => {

// Manager section 
const managerInfo = function(data) {
  return `
<section class="card" style="width: 18rem;>
<div class="card-body>
<h1 class="card-title> ${data.name} </h1>
<h2 class="card-subtitle text-muted> ${data.getRole()} </h2>
<div>ID: ${data.id}</div>
<div href='#' class="card-link">Email: ${data.email}</div>
<div>Office: ${data.getOffice()}</div>
</div>
</section>`
};

//ask how to make email a link 

// engineer section
const engineerInfo = function(data) { 
  return `
<section class="card">
<div>
<h1> ${data.name} </h1>
<div> ${data.getRole()} </div>
<div>ID: ${data.id}</div>
<a href='mailo: ${data.email}' class="card-link">Email: ${data.email}</a>
<div>Office: ${data.getGithub()} </div>
</div>
</section>`
};

//intern section
const internInfo = function(data) {
  return `
<section class="card">
<div>
<h1> ${data.name} </h1>
<div>${data.getRole()}</div>
<div>ID: ${data.id}</div>
<div href='#' class="card-link">Email: ${data.email}</div>
<div>Office: ${data.getSchool()}</div>
</div>
</section>`
};

//empty array to push 
const finalHTML = []

finalHTML.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerInfo(manager)));
finalHTML.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerInfo(engineer)));
finalHTML.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internInfo(intern)));

return finalHTML.join('');
}


module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Office Team</title>
  </head>
  <body>
  <header> Project Team</header>
  ${generate(team)}
  </body>

  `
}