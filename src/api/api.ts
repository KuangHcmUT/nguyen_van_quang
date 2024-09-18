import * as fs from "fs";

export const DATA = fs.readFileSync("data.json", "utf-8");

export const PROVINCES = fs.readFileSync("tinh_tp.json", "utf-8");

export const DISTRICTS = fs.readFileSync("quan_huyen.json", "utf-8");
