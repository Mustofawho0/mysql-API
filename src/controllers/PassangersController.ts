import { Request, Response } from "express";
import {
  findPassangersNameQuery,
  findPassangersSurvivedQuery,
  findPassangersSurvivedSexQuery,
  findPassangersQuery,
  findPassangersSurvivedPclassQuery,
} from "../services/PassangersService";

export const findPassangers = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const getPassangers = await findPassangersQuery();
    if (name) {
      const findPasssangers = await findPassangersNameQuery(name);

      res.status(200).send({
        status: 200,
        message: "Success",
        data: findPasssangers,
      });
    } else {
      res.send(getPassangers);
    }
  } catch (error) {
    console.log(error);
  }
};

export const findPassangersSurvived = async (req: Request, res: Response) => {
  try {
    const { pclass } = req.query;
    const findPassangersSurvived = await findPassangersSurvivedQuery();
    if (pclass) {
      const findPassangersSurvivedPclass =
        await findPassangersSurvivedPclassQuery(pclass);

      res.status(200).send({
        status: 200,
        message: "Success",
        data: findPassangersSurvivedPclass,
      });
    } else {
      res.send(findPassangersSurvived);
    }
    // res.status(200).send({
    //   status: 200,
    //   message: "Success",
    //   data: findPassangersSurvived,
    // });
  } catch (error) {
    console.log(error);
  }
};

export const findPassangersSurvivedSex = async (
  req: Request,
  res: Response
) => {
  try {
    const findPassangersSurvivedSex = await findPassangersSurvivedSexQuery();

    res.status(200).send({
      status: 200,
      message: "Success",
      data: findPassangersSurvivedSex,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const findPassangersSurvivedPclass = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const { pclass } = req.query;
//     const findPassangersSurvivedPclass =
//       await findPassangersSurvivedPclassQuery(pclass);
//   } catch (error) {
//     console.log(error);
//   }
// };
