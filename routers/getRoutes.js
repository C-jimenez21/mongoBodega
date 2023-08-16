import { Router } from "express";
import {getBodegas} from '../controllers/getData.js'

const appBodegas = Router();

appBodegas.get('/', getBodegas)
appBodegas.get('/', getA)
appBodegas.get('/', getBodegas)

export default appBodegas