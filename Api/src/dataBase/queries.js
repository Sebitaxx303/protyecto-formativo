

export const userQueries = {
    register: "INSERT INTO users (user_type, manager_name, company_name, rut, u_address, phone_number, register_date, u_state, email ,u_password) VALUES (@user_type, @manager_name, @company_name, @rut, @u_address, @phone_number, GETDATE(), 'Inactivo',  @email, @u_password) SELECT id FROM users WHERE company_name = @company_name ",
    login: 'SELECT id,email,u_password FROM users WHERE email = @email',
    user_type: 'SELECT user_type FROM users WHERE id = @id',
    talleres: "SELECT * FROM users WHERE user_type = 'taller'",
    empresas: "SELECT * FROM users WHERE user_type = 'empresa'",
    register_manager: 'INSERT INTO managers (id_user, manager_name) VALUES (@id_user, @manager_name) SELECT  manager_name FROM managers WHERE id_user = @id_user',
    getManager: 'SELECT id_user, manager_name FROM managers M INNER JOIN users U ON M.id_user = U.id WHERE U.id = @id',
    update: 'UPDATE users SET manager_name = @manager_name, company_name = @company_name, rut = @rut, u_address = @u_address, phone_number = @phone_number, u_state = @u_state WHERE id = @id',
    profile: 'SELECT id, manager_name, company_name, user_type, rut, u_address, phone_number, register_date, u_state  FROM users WHERE id = @id',
}
export const machinesQueries= {
    getmachines: 'SELECT * FROM machines WHERE id_user = @id_user',
    getmachine: 'SELECT * FROM machines WHERE id_machine = @id_machine AND id_user = @id_user',
    addmachine: 'INSERT INTO machines (id_user, machine_type, mach_description, photo) values (@id_user, @machine_type, @mach_description, @photo)',
    updatemachine: 'UPDATE machines SET machine_type = @machine_type, mach_description = @mach_description, photo = @photo WHERE id_machine = @id_machine AND id_user = @id_user',
    deleteMachine: 'DELETE FROM machines WHERE id_user = @id_user AND id_machine = @id_machine'
}
export const requestsQueries = {
    addRequest: 'INSERT INTO requests (id_user, request_type, start_date, description, amount ) VALUES (@id_user, @request_type, GETDATE(), @description, @amount)',
    getRequests: 'SELECT * FROM requests ',
    getRequestsUser: 'SELECT * FROM requests WHERE id_user = @id_user',
    getRequest:  'SELECT * FROM requests WHERE id_user = @id_user AND id = @id',
    updateRequest: 'UPDATE requests SET request_type = @request_type, description = @description, amount = @amount WHERE id_user = @id_user AND id = @id',
    deleteRequest: 'DELETE FROM requests WHERE id_user = @id_user AND id = @id'
}