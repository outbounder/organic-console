# oragnic-console

Organelle which overrides standard `console` object methods ["log", "debug", "error", "warn", "info", "trace"] and emits given arguments instead of writing to stdout/stderr

## dna

    {
      "emitEvery": {
        "type": "consoleOutputChemical"
      }
    }

## chemical structure send to Plasma 

    {
      method: "console.method name",
      arguments: ["console.method arguments", ...]
    }