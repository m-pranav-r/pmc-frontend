declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            GMAPS_API_KEY: string;
        }
    }
}

export { }