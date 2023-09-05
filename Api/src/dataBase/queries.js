

export const userQueries = {
    register: 'INSERT INTO users (user_type, company_name, rut, u_address, phone_number, email ,u_password) VALUES (@user_type, @company_name, @rut, @u_address, @phone_number, @email, @u_password) SELECT id FROM users WHERE company_name = @company_name ',
    login: 'SELECT id,email,u_password FROM users WHERE email = @email',
    user_type: 'SELECT user_type FROM users WHERE id = @id',
    user_name: 'SELECT company_name FROM users WHERE id = @id',
    profile: 'SELECT id, company_name, user_type, rut, u_address, phone_number  FROM users WHERE id = @id',
}
export const machinesQueries= {
    getmachines: 'SELECT * FROM machines WHERE id_user = @id_user',
    getmachine: 'SELECT * FROM machines WHERE id_machine = @id_machine AND id_user = @id_user',
    addmachine: 'INSERT INTO machines (id_user, machine_type, mach_description, photo) values (@id_user, @machine_type, @mach_description, @photo)',
    updatemachine: 'UPDATE machines SET machine_type = @machine_type, mach_description = @mach_description, photo = @photo WHERE id_machine = @id_machine AND id_user = @id_user',
    deleteMachine: 'DELETE FROM machines WHERE id_machine = @id_machine AND id_user = @id_user'
}