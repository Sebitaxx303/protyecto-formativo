
export const userQueries = {
    register: 'INSERT INTO users (user_type, company_name, rut, u_address, phone_number, email ,u_password) VALUES (@user_type, @company_name, @rut, @u_address, @phone_number, @email, @u_password) SELECT id FROM users WHERE company_name = @company_name ',
    login: 'SELECT id,email,u_password FROM users WHERE email = @email',
    profile: 'SELECT id, company_name, user_type FROM users WHERE id = @id',
}