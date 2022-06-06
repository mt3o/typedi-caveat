# Typedi dependency injection caveat

It fails to `Container.get()` when class is imported, despite having in `tsconfig.js`: 
```
    "compilerOptions":{
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        }
```
