export interface User {
    name: string,
    email: string,
    sector:string,
    role: string,
    firebase?: string | number, 
    healthPlan?: string,
    dentalPlan?: string,
}
