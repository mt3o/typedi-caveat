import 'reflect-metadata';
import {Service} from "typedi";

@Service()
export default abstract class AbstractFoobar{
    abstract whoami();
}
