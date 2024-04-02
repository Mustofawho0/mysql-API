import express, { Express, Request, Response, NextFunction } from "express";
// import db from "./connection";
// import util from "util";
// const query: any = util.promisify(db.query).bind(db);
import routers from "./routers";

const app: Express = express();
app.use(routers);
const port = 404;

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send({
    error: true,
    message: err.message || "Error",
    data : {}
  });
});

app.listen(port, () => {
  console.log(`🐣🐤🐥[server] : Running Server at http://localhost:${port}`);
});

/* 
1.User Dapat Mencari Nama Penumpang yang Berada di Kapal Titanic
Request : /passangers?Name='helen'
*/
// app.get(
//   "/passangers",
//   async (req: Request, res: Response): Promise<void> => {
//     try {
//       const { name }: any = req.query;
//       const findName = await query(
//         `select * from passangers where Name like '%${name}%'`
//       );

//       res.status(200).send({
//         status: 200,
//         message: "Success",
//         data: findName,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
/* 
2.User Dapat Melihat Total Penumpang yang Selamat
Request : /passangers/survived
*/
// app.get("/passangers/survived", async (req: Request, res: Response) => {
//   try {
//     const findSurvived = await query(
//       "select count(*) Survived from passangers where Survived = 1 group by Survived"
//     );

//     res.status(200).send({
//       status: 200,
//       message: "Success",
//       data: findSurvived,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
/* 
3.User Dapat Melihat Total Penumpang Pria dan Total Penumpang Wanita yang Selamat
Request : /passangers/survived/sex
*/
// app.get("/passangers/survived/sex", async (req: Request, res: Response) => {
//   try {
//     const findGender = await query(
//       "select count(*) as Total_Survived, Sex from passangers where Survived = 1 group by Sex"
//     );

//     res.status(200).send({
//       status: 200,
//       message: "Success",
//       data: findGender,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
/* 
4.User Dapat Melihat List Penumpang yang Selamat dan Berada di Class yang ditentukan oleh User
Request : /passangers/survived?class=1
            OR
          /passangers/survived?class=0
*/
// app.get("/passangers/survive", async (req: Request, res: Response) => {
//   try {
//     const { pclass } = req.query;
//     const findPclass = await query(
//       `select count(*) as Total_Survived, Pclass from passangers where Survived = 1 and Pclass = ${pclass}`
//     );

//     res.status(200).send({
//       status: 200,
//       message: "Success",
//       data: findPclass,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
