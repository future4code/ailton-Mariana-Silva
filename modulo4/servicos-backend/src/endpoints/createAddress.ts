import { getAddress } from "../service/getAddress";
import { Request, Response } from "express";

export async function createAddress(req: Request, res: Response) {
  try {
    const cep = req.params.cep;
    const { Numero, Complemento } = req.body;

    if (!cep) {
      res.statusCode = 400;
      throw new Error("Inform a valid CEP");
    }
    if (!Numero) {
      res.statusCode = 404;
      throw new Error("Inform a valid number");
    }

    const receivedAddress = await getAddress(cep);

    if (!receivedAddress) {
      res.statusCode = 404;
      throw new Error("CEP doesn't exist.");
    }

    const newAddress = {
      CEP: cep,
      Logradouro: receivedAddress.logradouro,
      Numero: Numero,
      Complemento: Complemento,
      Bairro: receivedAddress.bairro,
      Cidade: receivedAddress.localidade,
      Estado: receivedAddress.uf,
    };

    res.status(201).send(newAddress);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
