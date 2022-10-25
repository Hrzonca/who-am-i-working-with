//function that wraps all the sections in one
const generate = team => {

  // Manager section 
  const managerInfo = function (data) {
    return `<div class="card-deck col-sm">
<div class="card border-primary m-2">
<div class="card-header bg-primary">
<h1> ${data.name} </h1>
<h2> ${data.getRole()} </h2>
</div>
<div class="class-body>
  <ul class="list-group">
    <p class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id}</span></p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span><a href="mailto:${data.email}">Email: ${data.email}</a></span></p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span>Office: ${data.getOffice()}</span></p>
  </ul>
</div>
</div>
</div>`
  };

  //ask how to make email a link 

  // engineer section
  const engineerInfo = function (data) {
    return `<div class="card-deck col-sm">
<div class="card border-info m-2">
<div class="card-header bg-info">
<h1> ${data.name} </h1>
<h2> ${data.getRole()} </h2>
</div>
<div class="class-body>
  <ul class="list-group">
    <p class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id}</span> </p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span><a href="mailto:${data.email}">Email: ${data.email}</a></span></p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span><a href="${data.getGithub()}"> Github: ${data.getGithub()}</a></span></p>
  </ul>
</div>
</div>
</div>`
};

  //intern section
  const internInfo = function (data) {
    return `<div class="card-deck col-sm">
<div class="card border-success m-2">
<div class="card-header bg-success">
<h1> ${data.name} </h1>
<h2> ${data.getRole()} </h2>
</div>
<div class="class-body>
  <ul class="list-group">
    <p class="list-group-item list-group-item-action list-group-item-light"><span>ID: ${data.id} </span></p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span><a href="mailto:${data.email}"> Email: ${data.email}</a></span></p>
    <p class="list-group-item list-group-item-action list-group-item-light"><span> School: ${data.getSchool()} </span></p>
  </ul>
</div>
</div>
</div>`
};

  //empty array to push 
  const finalHTML = []

  finalHTML.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => managerInfo(manager)));
  finalHTML.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerInfo(engineer)));
  finalHTML.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internInfo(intern)));

  return finalHTML.join('');
};


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
      <div class="row">
      
          ${generate(team)}
    
    </div>
  </div>
  </body>`
};
// <div class="container">
//<div class="col-md-12">
//<div class="row">

//</div>
//</div>
//</div>