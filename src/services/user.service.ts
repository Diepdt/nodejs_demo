import getConnectionDatabase from "../config/database";

const handleCreateUser = (name: string, email: string, address: string) => {
    // save to database

    // return result
    console.log("Insert new user to database successfully!")
}

const getAllUser = async () => {
    const connection = await getConnectionDatabase();
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user`'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export { handleCreateUser, getAllUser }