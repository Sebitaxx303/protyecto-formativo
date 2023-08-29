import { z } from 'zod'

export const registerSchema = z.object({
    company_name: z.string({
        required_error: 'El nombre de la compañia es un campo obligatorio'
    }),
    rut: z.string({
        required_error: 'El Rut es un campo obligatorio'
    }),
    u_address: z.string({
        required_error: 'La dirección es un campo obligatorio'
    }),
    email: z.string({
        required_error: 'El correo electronico es un campo obligatorio'
    }).email({
        message: 'Direccion de correo invalida'
    }),
    u_password: z.string({
        required_error: 'La contraseña es un campo obligatorio'
    }).min(8,{
        message: 'La contraseña debe de contar con mas de ocho caracteres'
    })

});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'El correo electronico es un campo obligatorio'
    }).email({
        message: 'Direccion de correo invalida'
    }),
    u_password: z.string({
        required_error: 'La contraseña es un campo obligatorio'
    }).min(8,{
        message: 'La contraseña debe de contar con mas de ocho caracteres'
    })
});