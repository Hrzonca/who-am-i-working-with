const formatHtml = function () {
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
<header>Dream team</header>

// Manager section 
<section class="card">
<div>
<h1> ${name} </h1>
<div> 👔Manager </div>
<div>ID: ${id}</div>
<div href='#' class="card-link">Email: ${email}</div>
<div>Office: ${office}</div>
</div>
</section>

// engineer section
<section class="card">
<div>
<h1> ${name} </h1>
<div>Engineer </div>
<div>ID: ${id}</div>
<div href='#' class="card-link">Email: ${email}</div>
<div>Office: ${github}</div>
</div>
</section>

//intern section
<section class="card">
<div>
<h1> ${name} </h1>
<div> Intern </div>
<div>ID: ${id}</div>
<div href='#' class="card-link">Email: ${email}</div>
<div>Office: ${school}</div>
</div>
</section>


</body>
    `
}