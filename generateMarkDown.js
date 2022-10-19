const formatHtml = ({ manager, employeeNumber, email, office }) => {
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
<section class="card" style="width: 18rem;">
<div class="card-body" ">
<h1 class="card-title>${manager}</h1>
<h2 class="card-subtitle mb-2 texted-muted>👔Manager</h2>
<div>ID: ${employeeNumber}</div>
<div href='#' class="card-link">Email: ${email}</div>
<div>Office: ${office}</div>
</div>
</section>

</body>
    `
}

function generateMarkDown() {
    var format = formatHtml();
    return `
    ${format}
    `
}