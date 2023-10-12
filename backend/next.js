const cors = require("cors") 
const express = require("express") 
const bodyParser=require('body-parser');
const app = express();
const mysql = require('mysql');
const PORT = 3031

const connection = mysql.createPool({
  host: "localhost",
  database: 'placement',
  user: "root",
  password: "root"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
  res.send("hello 2");
})
    //example
app.get("/api", (req, res) => {
connection.query('select * from company', (err, results, fields) => {
    res.send(results);
  });
});
//2021 ---------------------------------------------------------------------------
//2021 all
app.get("/2021all", (req, res) => {
  connection.query('select * from 21_22all', (err, results, fields) => {
      res.send(results);
    });
  });
  app.get("/20211all", (req, res) => {
    connection.query('select Name,Company1 from 21_22all where Company2="" and  Company3="" and Company4="" and Company5=""', (err, results, fields) => {
        res.send(results);
      });
    });
//2021 higherstudies
app.get("/2021higherstudies", (req, res) => {
  connection.query('select * from 21_22higherstudies', (err, results, fields) => {
      res.send(results);
    });
  });
  //2021 other
app.get("/2021other", (req, res) => {
  connection.query('select * from 21_22others', (err, results, fields) => {
      res.send(results);
    });
  });
  //2020--------------------------------------------------------------------------------
  //2020 all
app.get("/2020all", (req, res) => {
  connection.query('select * from 20_21all', (err, results, fields) => {
      res.send(results);
    });
  });
  app.get("/20200all", (req, res) => {
    connection.query('select  Student_Name,Company1  from 20_21all where Company2="" and  Company3="" and Company4="" and Company1!=""', (err, results, fields) => {
        res.send(results);
      });
    });
    app.get("/20199all", (req, res) => {
      connection.query('select  Name_of_Eligible_Student, Company1, Package from 19_20all where Company2="" and Company3="" and Company1!=""', (err, results, fields) => {
          res.send(results);
       });
      });
//2020 higherstudies
app.get("/2020higherstudies", (req, res) => {
  connection.query('select * from 20_21higherstudies', (err, results, fields) => {
      res.send(results);
    });
  });
  //2020 other
app.get("/2020other", (req, res) => {
  connection.query('select * from 20_21others', (err, results, fields) => {
      res.send(results);
    });
  });
  //2020 companywise
app.get("/2020Companywise", (req, res) => {
  connection.query('select * from 20_21companywise', (err, results, fields) => {
      res.send(results);
    });
  });
 //2019--------------------------------------------------------------------------------
  //2019 all
  app.get("/2019all", (req, res) => {
    connection.query('select * from 19_20all', (err, results, fields) => {
        res.send(results);
      });
    });
  //2019 higherstudies
  app.get("/2019higherstudies", (req, res) => {
    connection.query('select * from 19_20higherstudies', (err, results, fields) => {
        res.send(results);
      });
    });
    //2019 other
  app.get("/2019other", (req, res) => {
    connection.query('select * from 19_20others', (err, results, fields) => {
        res.send(results);
      });
    });
    //2019 companywise
  app.get("/2019Companywise", (req, res) => {
    connection.query('select * from 19companywise', (err, results, fields) => {
        res.send(results);
      });
    });
    
    //2019 companyvisited
  app.get("/2019CompanyVisited", (req, res) => {
    connection.query('select * from 19companyvisited', (err, results, fields) => {
        res.send(results);
      });
    });
//2018--------------------------------------------------------------------------------
  
  //2018 higherstudies
  app.get("/2018higherstudies", (req, res) => {
    connection.query('select * from 18_19higherstudies', (err, results, fields) => {
        res.send(results);
      });
    });
    //2018 other
  app.get("/2018other", (req, res) => {
    connection.query('select * from 18_19others', (err, results, fields) => {
        res.send(results);
      });
    });
    //2018 companywise
  app.get("/2018Companywise", (req, res) => {
    connection.query('select * from 18companywise', (err, results, fields) => {
        res.send(results);
      });
    });
       //2018 companyvisited
  app.get("/2018CompanyVisited", (req, res) => {
    connection.query('select * from 18companyvisited', (err, results, fields) => {
        res.send(results);
      });
    });
    app.get("/2018IndividualOffer", (req, res) => {
      connection.query('select SrNo,Company_Name,Package,Selected_Students from 18companyvisited where Package >0;', (err, results, fields) => {
          res.send(results);
        });
      });
    //2018--------------------------------------------------------------------------------
  
  //2017 higherstudies
  app.get("/2017IndividualOffer", (req, res) => {
    connection.query('select SrNo,Company_Name,Package,Selected_Students from 18companyvisited where Package >0;', (err, results, fields) => {
        res.send(results);
      });
    });
  app.get("/2017higherstudies", (req, res) => {
    connection.query('select * from 17_18higherstudies', (err, results, fields) => {
        res.send(results);
      });
    });
    //2017 other
  app.get("/2017other", (req, res) => {
    connection.query('select * from 17_18others', (err, results, fields) => {
        res.send(results);
      });
    });
    //2017 companywise
  app.get("/2017Companywise", (req, res) => {
    connection.query('select * from 17companywise', (err, results, fields) => {
        res.send(results);
      });
    });
       //2017 companyvisited
  app.get("/2017CompanyVisited", (req, res) => {
    connection.query('select * from 17companyvisited', (err, results, fields) => {
        res.send(results);
      });
    });
  //2016--------------------------------------------------------------------------------
  
  //2016 higherstudies
  app.get("/2016higherstudies", (req, res) => {
    connection.query('select * from 16_17higherstudies', (err, results, fields) => {
        res.send(results);
      });
    });
    //2016 other
  app.get("/2016other", (req, res) => {
    connection.query('select * from 16_17others', (err, results, fields) => {
        res.send(results);
      });
    });
    //2016 companywise
  app.get("/2016Companywise", (req, res) => {
    connection.query('select * from 16companywise', (err, results, fields) => {
        res.send(results);
      });
    });
       //2016 companyvisited
  app.get("/2016CompanyVisited", (req, res) => {
    connection.query('select * from 16companyvisited', (err, results, fields) => {
        res.send(results);
      });
    });
    // ---------------------------------------------------------
    //2022 college
    app.get("/college", (req, res) => {
      connection.query('select * from college1', (err, results, fields) => {
          res.send(results);
        });
      });
      // ---------------------------------------------------------
    //statistic
    app.get("/statistic", (req, res) => {
      connection.query('select * from bar', (err, results, fields) => {
          res.send(results);
        });
      });
      // ---------------------------------------------------------
    //pie
    app.get("/pie", (req, res) => {
      connection.query('select * from pie', (err, results, fields) => {
          res.send(results);
        });
      });
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});