import { AppModule } from "./app.module";
export { AppModule };

/**
 * Removes special characters and case formatting.
 * @example
 * "my_string!".ToTitleCase(); //returns 'My string'
 */
String.prototype.ToTitleCase = function (this: string | null): string {
  if (this === null || this === undefined || this === '' || this === 'null')
    return '';
  else return this.replace(/\w+/g, function (x) { return x[0].toUpperCase() + x.slice(1).toLowerCase() })
};