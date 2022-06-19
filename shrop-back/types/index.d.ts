export {};

declare global {
    namespace External {
        interface Request {
            user: any;
        }
    }
}