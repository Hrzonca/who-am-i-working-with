//function that wraps all the sections in one
//bootstrap used for styling
const generate = team => {

  // Manager section 
  const managerInfo = function (data) {
    return `<div class="card-deck col-lg-3 col-md-6 col-sm-12">
<div class="card border-primary m-2">
<div class="card-header bg-primary">
<h1> ${data.name} </h1>
<h2 class="text-muted"> 👩🏽‍💼${data.getRole()} </h2>
</div>
<div class="class-body">
  <ul class="list-group">
    <li class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id}</span></li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span>Email:<a href="mailto:${data.email}"> ${data.email}</a></span></li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span>Office: ${data.getOffice()}</span></li>
  </ul>
</div>
</div>
</div>
`
  };

  // engineer section
  const engineerInfo = function (data) {
    return `<div class="card-deck col-lg-3 col-md-6 col-sm-12">
<div class="card border-info m-2">
<div class="card-header bg-info">
<h1> ${data.name} </h1>
<h2 class="text-muted"> 👩‍💻${data.getRole()} </h2>
</div>
<div class="class-body">
  <ul class="list-group">
    <li class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id}</span> </li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span>Email:<a href="mailto:${data.email}"> ${data.email}</a></span></li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span>Github:<a href="${data.getGithub()}"> ${data.getGithub()}</a></span></li>
  </ul>
</div>
</div>
</div>
<br>`
};

  //intern section
  const internInfo = function (data) {
    return `<div class="card-deck col-lg-3 col-md-6 col-sm-12">
<div class="card border-success m-2">
<div class="card-header bg-success">
<h1> ${data.name} </h1>
<h2 class="text-muted"> 📚${data.getRole()} </h2>
</div>
<div class="class-body">
  <ul class="list-group">
    <li class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id} </span></li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span>Email:<a href="mailto:${data.email}"> ${data.email}</a></span></li>
    <li class="list-group-item list-group-item-action list-group-item-light"><span> School: ${data.getSchool()} </span></li>
  </ul>
</div>
</div>
</div>
<br>`
};

  //empty array to push filtered employees to 
  const finalHTML = []

  finalHTML.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerInfo(manager)).join(''));
  finalHTML.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerInfo(engineer)).join(''));
  finalHTML.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internInfo(intern)).join(''));

  
  return finalHTML.join('');
};

//function team that holds the data for html markdown
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Office Team</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid text-center bg-dark">
      <div class="container">
        <h1 class="col-md-12 text-white" > Project Team </h1>
      </div>
    </div>
    
  <div class="container">
      <div class="row justify-content-center">
      
          ${generate(team)}
    
    </div>
  </div>
  </body>
  `
};
