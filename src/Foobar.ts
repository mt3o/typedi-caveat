import 'reflect-metadata';
import AbstractFoobar from "./AbstractFoobar";
import {Service} from "typedi";

@Service({id:'bar'})
export default class Foobar extends AbstractFoobar{
    whoami() {
        return "Foobar"
    }

}
