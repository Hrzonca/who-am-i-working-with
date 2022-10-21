const topHtml = function () {
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
<header>Dream team</header>`
};

// Manager section 
const mangerInfo = function(data) {
  return `
<section class="card">
<div>
<h1> ${data.name} </h1>
<div> 👔Manager </div>
<div>ID: ${data.id}</div>
<div href='#' class="card-link">Email: ${data.email}</div>
<div>Office: ${data.office}</div>
</div>
</section>`
};

// engineer section
const engineerInfo = function(data) { 
  return `
<section class="card">
<div>
<h1> ${data.name} </h1>
<div>Engineer </div>
<div>ID: ${data.id}</div>
<div href='#' class="card-link">Email: ${data.email}</div>
<div>Office: ${data.github}</div>
</div>
</section>`
};

//intern section
const internInfo = function(data) {
  return `
<section class="card">
<div>
<h1> ${data.name} </h1>
<div> Intern </div>
<div>ID: ${data.id}</div>
<div href='#' class="card-link">Email: ${data.email}</div>
<div>Office: ${data.school}</div>
</div>
</section>`
};

const endHtml = function() {
  return `
  </body>`
}

module.exports = {
top: topHtml,
manager: mangerInfo,
engineer: engineerInfo,
intern: internInfo,
end: endHtml,
}