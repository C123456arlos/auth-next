export { }
export type Roles = "admin" | "Moderator"
declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles
        }
    }
}