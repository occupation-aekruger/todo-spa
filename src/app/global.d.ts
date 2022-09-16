import { AppModule } from "./app.module";
export { AppModule };

declare global {
    interface String {
        /**
         * Removes special characters and case formatting.
         * @example
         * "my_string!".ToTitleCase(); //returns 'My string'
         */
        ToTitleCase(this: string | null): string
    }
}
