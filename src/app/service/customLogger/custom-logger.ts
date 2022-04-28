/* Based on https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript */

export interface customLogger {
    typesafeProp1?: number,
    [key: string]: any
}