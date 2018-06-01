[keyword for] ([keyword var] [def&local i] [operator =] [number 0];
     [variable-2 i] [operator <] [number 100];
     [variable-2 i][operator ++])
  [variable&callee doSomething]([variable-2 i]);
[keyword debugger];

[keyword for] ([keyword const] [def&local name] [keyword of] [variable Object].[callee&property getOwnPropertyNames](
         [variable Object].[callee&property getPrototypeOf]([variable instance]))) {}

[keyword for] ([keyword let] [def&local x] [keyword of] [number 1] [operator +]
         [number 1]) {}
