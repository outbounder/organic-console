# oragnic-console

Organelle which overrides standard `console` object methods and transforms their calls to emitted chemicals.

## dna

    {
      "emitEvery": {
        "type": "consoleOutputChemical",
        // ... optional extra properties 
      },
      "reactOn": "String" // optional, if not set will issue reaction upon dna,
      "disposeOn": "String" // optional,
      "methods": ["log", "debug", "error", "warn", "info", "trace"]
    }

## chemical structure send to Plasma 

    {
      type: "consoleOutputChemical",
      method: String,
      arguments: [ Mixed ],
      // ... optional extra properties from dna
    }

Note: `chemical.method` represents the method name captured from `console` ; `chemical.arguments` respectively are the arguments been given to the method at that time.