module.exports = {
    genRosterHtml: function (employees) {

        const rosterCards = []; // array to store each HTML string card of each team member (engCard, mgrCard, and internCard)
        let engCard = ""; // for holding html string of engineer card
        let mgrCard = ""; // for holding html string of manager card
        let internCard = ""; // for holding html string of intern card
        let firstPartHTML = ""; // for first part of html of the roster page
        let lastPartHTML = ""; // for last part of html of the roster page
        let fullHTML = ""; // full html of the roster page
        // loop through array of Employee objects to get create different html card based on role of each team members
        for (let emp of employees) {
            if (emp.role === "Manager") { // create html card for manager role
                mgrCard = `<div class="col-md-4 col-sm-12 mb-3">
                            <div class="card bg-light">
                                <div class="bg-primary p-2 text-white">
                                    <h4>${emp.name}</h4>
                                    <h4><i class="fas fa-mug-hot"></i>&nbsp;${emp.role}</h4>
                                </div>
                                <ul>
                                    <li>ID: ${emp.id}</li>
                                    <li>Email: <a href="mailto:${emp.email}" target="_top">${emp.email}</a></li>
                                    <li>Office number: ${emp.officeNum}</li>
                                </ul>
                            </div>
                        </div>`;
                rosterCards.push(mgrCard); // push html card to the array rosterCards
            }
            if (emp.role === "Engineer") { // create html card for Engineer role
                engCard = `<div class="col-md-4 col-sm-12 mb-3">
                            <div class="card bg-light">
                                <div class="bg-primary p-2 text-white">
                                    <h4>${emp.name}</h4>
                                    <h4><i class="fas fa-glasses"></i>&nbsp;${emp.role}</h4>
                                </div>
                                <ul>
                                    <li>ID: ${emp.id}</li>
                                    <li>Email: <a href="mailto:${emp.email}" target="_top">${emp.email}</a></li>
                                    <li>GitHub: <a href="#">${emp.gitHub}</a></li>
                                </ul>
                            </div>
                        </div>`;
                rosterCards.push(engCard);
            }


            if (emp.role === "Intern") { // create html card for Intern role
                internCard = `<div class="col-md-4 col-sm-12 mb-3">
                            <div class="card bg-light">
                                <div class="bg-primary p-2 text-white">
                                    <h4>${emp.name}</h4>
                                    <h4><i class="fas fa-user-graduate"></i>&nbsp;${emp.role}</h4>
                                </div>
                                <ul>
                                    <li>ID: ${emp.id}</li>
                                    <li>Email: <a href="mailto:${emp.email}" target="_top">${emp.email}</a></li>
                                    <li>School: ${emp.school}</li>
                                </ul>
                            </div>
                        </div>`; 
                rosterCards.push(internCard); // push html card to the array rosterCards
            }
        }
        // assign first part of roster HTML to the variable 'firstPartHTML'
        firstPartHTML = `<!DOCTYPE html> 
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Main</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
                    <style type="text/css">
                        body {
                            font-family: 'Roboto', sans-serif;
                        }
                        h1, h4 {font-weight: bold;}
                        li {
                            margin: 2px 0; padding: 5px;
                            background-color: white; font-weight: bold;
                        }
                        ul {
                            list-style-type: none;
                            padding: 25px 10px;
                            margin: 0;
                        }
                        .main {
                            width: 75%;
                            margin: 0 auto;
                            padding: 70px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container-fluid-nav text-center bg-danger p-4">
                        <h1 class="text-white"> My Team </h1>
                    </div>
                    <div class="main">
                        <div class="row d-flex justify-content-center">`;
        // assign the last part of roster HTML to the variable 'lastPartHTML'
        lastPartHTML = `</div>
                </div>
            </body>
            </html>`;
        // combine html parts to create full html for roster page
        fullHTML = firstPartHTML + rosterCards.join("\n") + lastPartHTML;
        return fullHTML; // return string of full html when the function is called
    }
}

// TEST DATA:
    // const employees = [{
    //     id: '01',
    //     name: 'Manager1111',
    //     email: 'mgr1@gmail.com',
    //     role: 'Manager',
    //     officeNum: '101'
    // },
    // {
    //     id: '10',
    //     name: 'Eng1',
    //     email: 'eng1@gmail.com',
    //     role: 'Engineer',
    //     gitHub: 'eng1-gitHub'
    // },
    // {
    //     id: '11',
    //     name: 'Eng2',
    //     email: 'eng2@gmail.com',
    //     role: 'Engineer',
    //     gitHub: 'Eng2-gitHub'
    // },
    // {
    //     id: '111',
    //     name: 'Intern 111',
    //     email: 'intern@gmail.com',
    //     role: 'Intern',
    //     school: 'UoM'
    // }];