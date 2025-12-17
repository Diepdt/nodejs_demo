import getConnectionDatabase from "../config/database";

const handleCreateUser = async (name: string, email: string, address: string) => {
    // save to database
    const connection = await getConnectionDatabase();
    try {
        const sql = 'INSERT INTO `user`(`name`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [name, email, address];
        const [result, fields] = await connection.execute(sql, values);
        console.log("Insert new user successfully!");
    } catch (err) {
        console.log(err);
    }
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