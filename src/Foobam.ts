import 'reflect-metadata';
import AbstractFoobar from "./AbstractFoobar";
import {Service} from "typedi";

@Service({id:'bam'})
export default class Foobam extends AbstractFoobar{
    whoami() {
        return "Foobam";
    }

}
