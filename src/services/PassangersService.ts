import db from "./../connection";
import util from "util";

const query: any = util.promisify(db.query).bind(db);

export const findPassangersNameQuery = async (name: any) => {
  return await query(`SELECT * FROM passangers where Name like ?`, [
    `%${name}%`,
  ]);
};
export const findPassangersQuery = async () => {
  return await query(`select * from passangers`);
};

export const findPassangersSurvivedQuery = async () => {
  return await query(
    "select count(*) Survived from passangers where Survived = 1 group by Survived"
  );
};

export const findPassangersSurvivedSexQuery = async () => {
  return await query(
    "select count(*) as Total_Survived, Sex from passangers where Survived = 1 group by Sex"
  );
};

export const findPassangersSurvivedPclassQuery = async (pclass: any) => {
  return await query(
    `select count(*) as Total_Survived, Pclass from passangers where Survived = 1 and Pclass = ?`,
    [`${pclass}`]
  );
};
