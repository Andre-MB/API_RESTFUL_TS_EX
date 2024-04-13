const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@andre.88gfcx0.mongodb.net/?retryWrites=true&w=majority&appName=Andre`,
    env: "development",
}