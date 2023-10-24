

export const userQueries = {
    register: "INSERT INTO users (user_type, manager_name, company_name, rut, u_address, phone_number, register_date, u_state, email ,u_password) VALUES (@user_type, @manager_name, @company_name, @rut, @u_address, @phone_number, GETDATE(), 'Activo' ,  @email, @u_password) SELECT id FROM users WHERE company_name = @company_name ",
    login: 'SELECT id,email,u_password FROM users WHERE email = @email',
    user_type: 'SELECT user_type FROM users WHERE id = @id',
    talleres: "SELECT * FROM users WHERE user_type = 'taller' AND u_state = 'Activo'",
    empresas: "SELECT * FROM users WHERE user_type = 'empresa'",
    update: 'UPDATE users SET manager_name = @manager_name, company_name = @company_name, rut = @rut, u_address = @u_address, phone_number = @phone_number, u_state = @u_state WHERE id = @id SELECT u_state FROM users  WHERE id = @id ',
    profile: 'SELECT id, manager_name, company_name, user_type, rut, u_address, phone_number, register_date, u_state  FROM users WHERE id = @id',
    acceptRequest: "INSERT INTO d_requests_talleres (id_user, id_request ) VALUES (@id_user, @id_request) UPDATE requests SET r_state = 'inactiva' WHERE id = @id_request",
}
export const machinesQueries= {
    getmachines: 'SELECT * FROM machines WHERE id_user = @id_user',
    getmachine: 'SELECT * FROM machines WHERE id_machine = @id_machine AND id_user = @id_user',
    addmachine: 'INSERT INTO machines (id_user, machine_type, mach_description, photo) values (@id_user, @machine_type, @mach_description, @photo)',
    updatemachine: 'UPDATE machines SET machine_type = @machine_type, mach_description = @mach_description, photo = @photo WHERE id_machine = @id_machine AND id_user = @id_user ',
    deleteMachine: 'DELETE FROM machines WHERE id_user = @id_user AND id_machine = @id_machine'
}
export const requestsQueries = {
    addRequest: "INSERT INTO requests (id_user_request, request_type, start_date, description, r_state, amount ) VALUES (@id_user_request, @request_type, GETDATE(), @description, 'Activa' ,@amount)",
    getRequests: "SELECT * FROM requests WHERE r_state = 'Activa' ",
    getRequestsUser: 'SELECT * FROM requests WHERE id_user_request = @id_user_request',
    getRequestsUserAcepted: 'SELECT * FROM d_requests_talleres DR  inner join requests R  ON R.id = DR.id_request inner join users U ON U.id = DR.id_user WHERE R.id_user_request = @id_user_request',
    getRequest:  'SELECT * FROM requests WHERE id_user = @id_user AND id = @id',
    updateRequest: 'UPDATE requests SET request_type = @request_type, r_state = @r_state, description = @description, amount = @amount WHERE id_user_request = @id_user_request AND id = @id',
    deleteRequest: 'DELETE FROM requests WHERE id_user_request = @id_user_request AND id = @id',
    updateRequestState: 'UPDATE requests SET r_state = WHERE id = @id_request',
    deletePostulation: 'DELETE FROM d_requests_talleres WHERE id_d_r_t = @id_d_r_t '
}