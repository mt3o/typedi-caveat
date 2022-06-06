# Typedi dependency injection caveat

It fails to `Container.get()` when class is imported, despite having in `tsconfig.js`: 
```
    "compilerOptions":{
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        }
```

Enabling `"importsNotUsedAsValues": "preserve"` enables one of the test, it probably should be mentioned by typedi.

# Experiment

Change `importsNotUsedAsValues` in `tsconfig.json` and redo tests. This toggles test (1) 
Change `@Service({id:'baz'})` to `@Service()` and redo tests. This toggles test (2) and (3)  

                                                                                                                   
# Final conclusions:

Contrary to Java, where DI works across whole project, with TS, all files must be explicitly imported somewhere
in the project, and executed, before DI container notices them. So ts classes are like _notice me sempai_ in nodejs world.

This behavior limits the capability of type-based injections, where many smaller objects interact on shared data like in the _chain of responsibility_ pattern, as we can't dynamically inject all interface-matching objects and rely on autodetection. Classes are not autodetected, what's more, simply importing them doesn't work. Out of the box TS removes unused `import` calls, so at least `"importsNotUsedAsValues": "preserve"` is needed.
