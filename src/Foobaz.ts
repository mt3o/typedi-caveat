import 'reflect-metadata';
import AbstractFoobar from "./AbstractFoobar";
import {Service} from "typedi";

@Service()              //enables (3) to pass and (2) to fail
// @Service({id:'baz'}) //enables (2) to pass and (3) to fail
export default class Foobaz extends AbstractFoobar{
    whoami() {
        return "Foobaz";
    }

}
