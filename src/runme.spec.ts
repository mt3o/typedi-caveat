import {Container} from "typedi";
import AbstractFoobar from "./AbstractFoobar";
import Foobar from "./Foobar";
import Foobaz from "./Foobaz";  //uncommenting enables (1) when "importsNotUsedAsValues": "preserve"


describe('broken injections',()=>{

    it('(1) injects by id',()=>{  //(1) passes when is imported and importsNotUsedAsValues: 'preserve'
        const o: AbstractFoobar=Container.get('bar')
        expect(o).toBeDefined();
        expect(o.whoami()).toEqual("Foobar");
    });

    it('(2) injects by id2',()=>{          // Foobaz has id, can't be imported with class name
        const o: AbstractFoobar=Container.get('baz')//  Removing the ID enables (3) and disables (2)
        expect(o).toBeDefined();
        expect(o.whoami()).toEqual("Foobaz")
    });

    it('(3) injects by class name thats imported',()=>{
        const o: AbstractFoobar=Container.get(Foobaz)
        expect(o).toBeDefined();
        expect(o.whoami()).toEqual("Foobaz")
    });

    it('(4) injects by class name thats NOT imported',()=>{ // always fails. Not imported,
        const o: AbstractFoobar=Container.get('bam')                  // so both id and classname are unknown
        expect(o).toBeDefined();
        expect(o.whoami()).toEqual("Foobam")
    });



});
